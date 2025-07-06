import { useState, useContext } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const ForgotPassword = ({ onBack }) => {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { backendUrl } = useContext(AppContext)
  const navigate = useNavigate()

  const onSubmitHandler = async (event) => {
    event.preventDefault()
    setIsLoading(true)

    try {
      const { data } = await axios.post(backendUrl + '/api/auth/forgot-password', { email })
      
      if (data.success) {
        toast.success('Password reset email sent! Check your inbox.')
        onBack()
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

  return (
    <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg'>
        <div className='flex items-center gap-2 mb-2'>
          <button 
            type="button"
            onClick={onBack}
            className='text-primary hover:text-primary/80 text-lg'
          >
            ← Back
          </button>
        </div>
        
        <p className='text-2xl font-semibold'>Forgot Password</p>
        <p>Enter your email address and we'll send you a link to reset your password.</p>
        
        <div className='w-full'>
          <p>Email</p>
          <input 
            onChange={(e) => setEmail(e.target.value)} 
            value={email} 
            className='border border-[#DADADA] rounded w-full p-2 mt-1' 
            type="email" 
            required 
            placeholder="Enter your email address"
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
            'Send Reset Link'
          )}
        </button>
        
        <p className='text-center w-full'>
          Remember your password? 
          <span onClick={onBack} className='text-primary underline cursor-pointer ml-1'>
            Back to Login
          </span>
        </p>
      </div>
    </form>
  )
}

export default ForgotPassword