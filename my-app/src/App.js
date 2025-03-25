import React, { useState } from 'react';
import './App.css';
import Gallery from './Gallery';

function App() {
  const [showGallery, setShowGallery] = useState(false);

  const handleStartClick = () => {
    setShowGallery(true);
  };

  const handleCloseGallery = () => {
    setShowGallery(false);
  };

  return (
    <div className="container">
      <div className="message-box">
        졸업을 축하해
      </div>
      <button className="start-button" onClick={handleStartClick}>start</button>

      {showGallery && <Gallery onClose={handleCloseGallery} />}
    </div>
  );
}

export default App;
