// ChatScreen.js
import React from 'react';
import { useState, useEffect } from 'react';
import ChatMessage from './ChatMessage';
import styles from '../../css/ChatScreen/ChatScreen.module.css';

function Chat() {
  const [messageText, setMessageText] = useState('');
  const [messages, setMessages] = useState([]);
  const [ws, setWs] = useState(null);

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8000/ws');

    ws.onmessage = function(event) {
      setMessages(prevMessages => [...prevMessages, event.data]);
    };

    setWs(ws);
    
    return () => {
      ws.close();
    };
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    if(ws && messageText.trim() !== '') {
      ws.send(JSON.stringify({userId: 'user1', text: messageText.trim()}));
      setMessageText('');
    }
  };

  return (
    <div className={styles.chatScreen}>
      <div className={styles.chatHeader}>
        <h2 className="text-2xl font-semibold text-center mb-4">Chat Screen</h2>
          <div className={styles.chatMessages}>
            <div className="flex flex-col gap-4">
              {messages.map((message, index) => (
                <ChatMessage key={index} isSentByUser={false} text={message} />
              ))}
            </div>
          </div>
          <form className={styles.messageInput} onSubmit={sendMessage}>
          <input
            className="flex-1"
            placeholder="Type a message..."
            type="text"
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            autoComplete="off"
          />
          <button type="submit" onClick={sendMessage}>Send</button>
        </form>
      </div>
    </div>
  );
}

export default Chat;
