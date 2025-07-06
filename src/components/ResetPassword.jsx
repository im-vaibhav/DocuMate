import { useState, useContext, useEffect } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate, useSearchParams } from 'react-router-dom'

const ResetPassword = () => {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isValidToken, setIsValidToken] = useState(false)
  const [isVerifying, setIsVerifying] = useState(true)
  
  const { backendUrl } = useContext(AppContext)
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const token = searchParams.get('token')

  // Verify token on component mount
  useEffect(() => {
    const verifyToken = async () => {
      if (!token) {
        toast.error('Invalid reset link')
        navigate('/login')
        return
      }

      try {
        const { data } = await axios.post(backendUrl + '/api/auth/verify-reset-token', { token })
        
        if (data.success) {
          setIsValidToken(true)
        } else {
          toast.error(data.message)
          navigate('/login')
        }
      } catch (error) {
        console.log(error)
        toast.error(error.response?.data?.message || 'Invalid or expired reset link')
        navigate('/login')
      } finally {
        setIsVerifying(false)
      }
    }

    verifyToken()
  }, [token, backendUrl, navigate])

  const onSubmitHandler = async (event) => {
    event.preventDefault()
    
    if (password !== confirmPassword) {
      toast.error('Passwords do not match')
      return
    }

    if (password.length < 6) {
      toast.error('Password must be at least 6 characters long')
      return
    }

    setIsLoading(true)

    try {
      const { data } = await axios.post(backendUrl + '/api/auth/reset-password', { 
        token, 
        password 
      })
      
      if (data.success) {
        toast.success('Password reset successfully! You can now login with your new password.')
        navigate('/login')
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.response?.data?.message || 'Something went wrong')
    } finally {
      setIsLoading(false)
    }
  }

  if (isVerifying) {
    return (
      <div className='min-h-[80vh] flex items-center justify-center'>
        <div className="w-20 h-20 border-4 border-gray-300 border-t-4 border-t-primary rounded-full animate-spin"></div>
      </div>
    )
  }

  if (!isValidToken) {
    return null
  }

  return (
    <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg'>
        <p className='text-2xl font-semibold'>Reset Password</p>
        <p>Enter your new password below.</p>
        
        <div className='w-full'>
          <p>New Password</p>
          <input 
            onChange={(e) => setPassword(e.target.value)} 
            value={password} 
            className='border border-[#DADADA] rounded w-full p-2 mt-1' 
            type="password" 
            required 
            minLength={6}
            placeholder="Enter new password"
          />
        </div>
        
        <div className='w-full'>
          <p>Confirm Password</p>
          <input 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            value={confirmPassword} 
            className='border border-[#DADADA] rounded w-full p-2 mt-1' 
            type="password" 
            required 
            minLength={6}
            placeholder="Confirm new password"
          />
        </div>
        
        <button 
          type="submit"
          disabled={isLoading}
          className='bg-primary text-white w-full py-2 my-2 rounded-md text-base disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center'
        >
          {isLoading ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            'Reset Password'
          )}
        </button>
        
        <p className='text-center w-full'>
          Remember your password? 
          <span onClick={() => navigate('/login')} className='text-primary underline cursor-pointer ml-1'>
            Back to Login
          </span>
        </p>
      </div>
    </form>
  )
}

export default ResetPassword