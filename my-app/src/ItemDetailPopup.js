// src/ItemDetailPopup.js

import React from "react";
import "./ItemDetailPopup.css";

function ItemDetailPopup({ item, onClose, images, setSelectedItem }) {
  const relatedItems = images.filter(i => i.date === item.date);

  const handleNext = () => {
    const currentIndex = relatedItems.findIndex(i => i.id === item.id);
    const nextIndex = (currentIndex + 1) % relatedItems.length;
    setSelectedItem(relatedItems[nextIndex]);
  };

  const handlePrev = () => {
    const currentIndex = relatedItems.findIndex(i => i.id === item.id);
    const prevIndex = (currentIndex - 1 + relatedItems.length) % relatedItems.length;
    setSelectedItem(relatedItems[prevIndex]);
  };

  return (
    <div className="item-detail-popup">
      <button className="close-button" onClick={onClose}>
        X
      </button>
      <div className="item-detail-content">
        <div className="item-image">
          {item.type === "image" ? (
            <img src={item.src} alt="상세 이미지" />
          ) : (
            <video controls>
              <source src={item.src} type="video/mp4" />
            </video>
          )}
        </div>
        <div className="item-info">
          <h3>제목</h3>
          <p>사진에 대한 설명</p>
          <div className="navigation-buttons">
            <button onClick={handlePrev}>◀</button>
            <button onClick={handleNext}>▶</button>
          </div>
          <button className="download-button">다운로드</button>
        </div>
      </div>
    </div>
  );
}

export default ItemDetailPopup;
