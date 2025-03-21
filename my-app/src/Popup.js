import React, { useState } from 'react';
import './Popup.css';

const images = [
  { src: "https://drive.google.com/uc?export=view&id=12Px1OZUYFEdJPZqS_HXrPFGv5Yyo9vIM", title: "첫 번째", description: "설명1", category: "together" },
  { src: "image2.jpg", title: "두 번째", description: "설명2", category: "solo" },
  { src: "image3.jpg", title: "세 번째", description: "설명3", category: "together" },
  { src: "image4.jpg", title: "네 번째", description: "설명4", category: "solo" },
  // 추가 이미지 데이터...
];

const Popup = ({ onClose }) => {
  const [category, setCategory] = useState("all");

  const filteredImages =
    category === "all" ? images : images.filter(img => img.category === category);

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
        {filteredImages.map((img, index) => (
          <div key={index} className="image-wrapper">
            <img src={img.src} alt={img.title} />
            <h3>{img.title}</h3>
            <p>{img.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popup;
