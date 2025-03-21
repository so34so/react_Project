import React, { useState } from 'react';
import './App.css';
import Popup from './Popup';

function App() {
  const [showPopup, setShowPopup] = useState(false);

  const handleStartClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="container">
      <div className="message-box">
        졸업을 축하해
      </div>
      <button className="start-button" onClick={handleStartClick}>start</button>

      {showPopup && <Popup onClose={handleClosePopup} />}
    </div>
  );
}

export default App;
