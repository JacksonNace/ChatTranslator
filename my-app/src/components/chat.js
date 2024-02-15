import React from 'react';
import './chat.css';

function Chat() {
  return (
    <div className='box'>
      <div className='textbox'>
        <input type="text" className = "text" placeholder="click to start typing....">

        </input>
        <button className="blue-button">
          Send
        </button>
      </div>
    </div>
  )
}

export default Chat;
