/* eslint-disable react/prop-types */

import { useEffect, useRef } from "react";
import styles from "./ChatBox.module.css";
import ChatLogo from "./ChatLogo";
import ReactMarkdown from "react-markdown";

function ChatBody({ chatHistory, loading }) {
  const chatContainerRef = useRef(null); // Whole chat container
  const latestBotRef = useRef(null); // Top of latest bot reply

  // Detect last message role
  const lastMessage = chatHistory[chatHistory.length - 1];

  useEffect(() => {
    if (!chatContainerRef.current) return;

    if (lastMessage?.role === "user") {
      // ✅ User just sent a message → go to absolute bottom
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    } else if (lastMessage?.role === "bot" && latestBotRef.current) {
      // ✅ Bot just sent a reply → scroll to top of reply
      latestBotRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [chatHistory, lastMessage]);

  return (
    <div className={styles.chatBody} ref={chatContainerRef}>
      <div className={styles.botMessage}>
        <ChatLogo className={styles.chatLogo} />
        <div className={styles.botText}>
          Hello, what can I help you with today?
        </div>
      </div>

      {chatHistory.map((m, index) => {
        if (m.role === "user") {
          return (
            <div className={styles.userMessage} key={index}>
              {m.content}
            </div>
          );
        }
        return (
          <div
            className={styles.botMessage}
            key={index}
            ref={
              index === chatHistory.length - 1 && m.role === "bot"
                ? latestBotRef
                : null
            }
          >
            <ChatLogo className={styles.chatLogo} />
            <pre className={styles.botText}>
              <ReactMarkdown>{m.content}</ReactMarkdown>
            </pre>
          </div>
        );
      })}

      {loading && <Loader />}
    </div>
  );
}

function Loader() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "6px",
        padding: "5px",
        color: "#666",
        fontStyle: "italic",
        fontSize: "14px",
      }}
    >
      <span>MediBot is typing</span>
      <span
        style={{ display: "inline-flex", alignItems: "center", gap: "2px" }}
      >
        <span style={dotStyle}></span>
        <span style={{ ...dotStyle, animationDelay: "0.2s" }}></span>
        <span style={{ ...dotStyle, animationDelay: "0.4s" }}></span>
      </span>
    </div>
  );
}

const dotStyle = {
  width: "6px",
  height: "6px",
  backgroundColor: "#666",
  borderRadius: "50%",
  display: "inline-block",
  animation: "typingDots 1s infinite ease-in-out",
};

const styleSheet = document.styleSheets[0];
styleSheet.insertRule(
  `
@keyframes typingDots {
  0%, 80%, 100% { transform: scale(0); }
  40% { transform: scale(1); }
}
`,
  styleSheet.cssRules.length
);

export default ChatBody;
