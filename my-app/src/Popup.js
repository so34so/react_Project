import React, { useState } from "react";
import "./Popup.css";

const Popup = ({ onClose }) => {
  const [category, setCategory] = useState("all");

  return (
    <div className="popup">
      <div className="popup-header">
        <button className="close-button" onClick={onClose}>닫기</button>
      </div>

      <div className="button-container">
        <button onClick={() => setCategory("all")}>전체 보기</button>
        <button onClick={() => setCategory("together")}>같이</button>
        <button onClick={() => setCategory("solo")}>혼자</button>
      </div>

      <div className="photo-container">
        {/* 첫 번째 이미지 (같이) */}
        {(category === "all" || category === "together") && (
          <div className="image-wrapper">
            <img
              src="https://github.com/so34so/react_Project/blob/main/exec/20240922_195203.jpg?raw=true"
              alt="첫 번째"
            />
            <div className="text-wrapper">
              <h3>첫 번째</h3>
              <p>설명1</p>
            </div>
          </div>
        )}

        {/* 두 번째 동영상 (혼자) */}
        {(category === "all" || category === "solo") && (
          <div className="image-wrapper">
            <video controls autoPlay muted loop>
              <source
                src="https://res.cloudinary.com/dkzferide/video/upload/v1742568427/KakaoTalk_20250321_232745627_i4ig1n.mp4"
                type="video/mp4"
              />
              브라우저가 비디오 태그를 지원하지 않습니다.
            </video>
            <div className="text-wrapper">
              <h3>두 번째</h3>
              <p>설명2</p>
            </div>
          </div>
        )}

        {/* 세 번째 이미지 (같이) */}
        {(category === "all" || category === "together") && (
          <div className="image-wrapper">
            <img src="image3.jpg" alt="세 번째" />
            <div className="text-wrapper">
              <h3>세 번째</h3>
              <p>설명3</p>
            </div>
          </div>
        )}

        {/* 네 번째 이미지 (혼자) */}
        {(category === "all" || category === "solo") && (
          <div className="image-wrapper">
            <img src="image4.jpg" alt="네 번째" />
            <div className="text-wrapper">
              <h3>네 번째</h3>
              <p>설명4</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Popup;
