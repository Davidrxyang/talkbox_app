import React, { useState } from 'react';
import ChatInput from './ChatInput';
import MessageList from './MessageList';
import './App.css'; // Import the CSS file

function App() {
  const [messages, setMessages] = useState([]);

  const sendMessage = (message) => {
    // You will implement sending the message to the server here
    // For now, we will just update the state to display the message

    // call functions from backend to send a message to the server
    setMessages([...messages, message]);
  };

  return (
    <div className="chat-container"> {/* Apply the container class */}
      <h1>TalkBox!</h1>
      <MessageList messages={messages} />
      <div className="chat-input"> {/* Apply the input container class */}
        <ChatInput sendMessage={sendMessage} />
      </div>
    </div>
  );
}

export default App;
