import { useState } from "react";
import ChatBox from "./ChatBox";
import { FaComments } from "react-icons/fa";
import { IoClose } from "react-icons/io5"; // close icon

function App() {
 
const [isOpen, setIsOpen] = useState(false);
  return (
    <div style={{ blur: 0 }}>
      {/* Floating Chat Button */}
      {!isOpen && (
        <button onClick={() => setIsOpen(true)} style={styles.chatButton}>
          <FaComments size={24} color="#fff" />
        </button>
      )}

      {/* Chat Box */}
      {isOpen && (
        <div style={styles.chatWrapper}>
          {/* Fixed Header */}
          <div style={styles.chatHeader}>
            <span style={styles.chatTitle}>DocuMate Assistant</span>
            <button onClick={() => setIsOpen(false)} style={styles.closeButton}>
              <IoClose size={22} />
            </button>
          </div>

          {/* Scrollable Chat Content */}
          <div style={styles.chatContent}>
            <ChatBox />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

const styles = {
  chatButton: {
    position: "fixed",
    bottom: "75px",
    right: "130px",
    backgroundColor: "#5F6FFF",
    border: "none",
    borderRadius: "50%",
    width: "55px",
    height: "55px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    zIndex: 1000,
  },
  chatWrapper: {
    position: "fixed",
    bottom: "80px",
    right: "20px",
    width: "400px",
    height: "550px",
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
    zIndex: 1000,
    display: "flex",
    flexDirection: "column",
  },
  chatHeader: {
    backgroundColor: "#5F6FFF",
    color: "#fff",
    padding: "10px 15px",
    fontSize: "16px",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexShrink: 0, // prevent shrinking when content overflows
  },
  chatTitle: {
    fontFamily: "'Rubik', sans-serif",
  },
  closeButton: {
    background: "transparent",
    border: "none",
    cursor: "pointer",
    color: "#fff",
  },
  chatContent: {
    flex: 1,
    overflowY: "auto", // only this part scrolls
    padding: "10px",
  },
};
