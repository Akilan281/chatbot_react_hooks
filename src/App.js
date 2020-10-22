import React from 'react';
import Chatbot from "react-chatbot-kit";
import './App.css';
import ActionProvider from './chatbot/ActionProvider';
import config from './chatbot/Config';
import MessageParser from './chatbot/MessageParser';


function App() {
  return (
    <div className="App">
      <div style={{ maxWidth: "500px" }}>
        <Chatbot
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        />
      </div>
    </div>
  );
}

export default App;
