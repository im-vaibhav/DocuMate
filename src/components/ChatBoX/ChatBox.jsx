// import ChatLogo from "./ChatLogo";
import ChatForm from "./ChatForm";
import styles from "./ChatBox.module.css";
import ChatBody from "./ChatBody";
import { useState } from "react";
function ChatBox() {
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false); // loader state

  return (
    <div className={styles.container}>
      {/* HEADER */}
      {/* <div className={styles.chatHeader}>
        <ChatLogo />
        <h1>DocuMate ChatBot </h1>
      </div> */}

      {/* BODY */}

      <ChatBody chatHistory={chatHistory} loading={loading} />

      {/* FOOTER */}

      <div className={styles.chatFooter}>
        <ChatForm handleChat={setChatHistory} setLoading={setLoading}  loading={loading}/>
      </div>
    </div>
  );
} 



export default ChatBox

