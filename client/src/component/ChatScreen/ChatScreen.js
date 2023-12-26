// ChatScreen.js
import React from "react";
import ChatMessage from "./ChatMessage";
import styles from "../../assets/css/ChatScreen/ChatScreen.module.css";

export default function ChatScreen() {
  return (
    <div className={styles.chatScreen}>
      <div className={styles.chatHeader}>
        <h2 className="text-2xl font-semibold text-center mb-4">Chat Screen</h2>
        <div className={styles.chatMessages}>
          <div className="flex flex-col gap-4">
            <ChatMessage isSentByUser={false} text="Hello, how are you?" />
            <ChatMessage isSentByUser={true} text="I'm fine, thank you!" />
            {/* Add more messages here */}
          </div>
        </div>
        <div className={styles.messageInput}>
          <input
            className="flex-1"
            placeholder="Type a message..."
            type="text"
          />
          <button>Send</button>
        </div>
      </div>
    </div>
  );
}
