/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import axios from "axios";

// ✅ Styles
const inputStyle = {
  width: "85%",
  height: "30px",
  borderRadius: "5px",
  padding: "10px",
  border: "1px solid #ccc",
  fontSize: "16px",
  marginBottom: "10px",
  outline: "none",
};

const formStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "6px",
};

const buttonStyle = {
  backgroundColor: "#5F6FFF",
  border: "none",
  height: "35px",
  width: "35px",
  borderRadius: "50%",
  cursor: "pointer",
  fontSize: "20px",
  marginBottom: "10px",
  color: "white",
  transition: "color 0.3s ease",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const hoverStyle = {
  color: "black",
};

function ChatForm({ handleChat, loading, setLoading }) {
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!message.trim()) return;

    // Add user message immediately
    handleChat((prev) => [...prev, { role: "user", content: message }]);

    // Show loader
    setLoading(true);

    getResponse(message);
    setMessage("");
  }

  async function getResponse(message) {
    try {
 
      const res = await axios.post("http://localhost:5000/api/ask", {
        question: message,
      });
      let responseText = res.data.answer;
      responseText = responseText
        .replace(/\r\n/g, "\n")
        .replace(/\n{3,}/g, "\n\n")
        .replace(/[ \t]+\n/g, "\n")
        .trim();

      // Hide loader & add bot reply
      setLoading(false);
      handleChat((prev) => [...prev, { role: "bot", content: responseText }]);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching bot response:", error);
      handleChat((prev) => [
        ...prev,
        { role: "bot", content: "⚠️ Error fetching response. Wait for sometime to let backend load." },
      ]);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="text"
          placeholder="Type your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={inputStyle}
        />
        <button
          type="submit"
          style={buttonStyle}
          onMouseOver={(e) => (e.target.style.color = hoverStyle.color)}
          onMouseOut={(e) => (e.target.style.color = buttonStyle.color)}
          disabled={loading} // prevent spam clicks
        >
          <FaArrowUp />
        </button>
      </form>
    </>
  );
}

export default ChatForm;
