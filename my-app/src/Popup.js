import React from 'react';
import './Popup.css'; // 별도의 스타일 파일을 만들 수 있습니다.

const Popup = ({ onClose }) => {
  return (
    <div className="popup">
      <div className="popup-header">
        <button className="close-button" onClick={onClose}>닫기</button>
      </div>
      <div className="photo-container">
        {Array.from({ length: 10 }, (_, index) => (
          <div key={index} className="photo-box">
            사진 {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popup;
