// ChatScreen.js
import React, { useState, useEffect, useContext } from 'react';
import ChatMessage from './ChatMessage';
import styles from '../../css/ChatScreen/ChatScreen.module.css';
import { SocketContext } from '../../socketContext';
import io from "socket.io-client";

function Chat() {
  const socket = useContext(SocketContext);
  const [messageText, setMessageText] = useState('');
  const [messages, setMessages] = useState([]);
  const [ws, setWs] = useState(null);

  const sendMessage = (event) => {
    event.preventDefault();
    if(socket && messageText.trim() !== '') {
      //socket.emit(JSON.stringify({userId: 'user1', text: messageText.trim()}));
      socket.emit('sendMessage', {userId: 'user1', text: messageText.trim()});
      setMessageText('');}
  }

  useEffect(()=>{
    socket.on("reciveMessage: ", (event) => {
      setMessages(prevMessages => [...prevMessages, event.data]);
    })
  })

  // useEffect(() => {
  //   const ws = new WebSocket('ws://localhost:8000/ws');

  //   ws.onmessage = function(event) {
  //     setMessages(prevMessages => [...prevMessages, event.data]);
  //   };

  //   setWs(ws);
    
  //   return () => {
  //     ws.close();
  //   };
  // }, []);

  // const sendMessage = (event) => {
  //   event.preventDefault();
  //   if(ws && messageText.trim() !== '') {
  //     ws.send(JSON.stringify({userId: 'user1', text: messageText.trim()}));
  //     setMessageText('');
  //   }
  // };

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
