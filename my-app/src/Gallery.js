// Gallery.js

import React, { useState } from "react";
import { images } from "./images";
import ItemDetailPopup from "./ItemDetailPopup";
import "./Gallery.css";

function Gallery({ onClose }) {
  const [category, setCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = images.filter(
    (item) => category === "all" || item.category === category
  );

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleClosePopup = () => {
    setSelectedItem(null);
  };

  return (
    <div className="gallery-popup">
      <button className="close-button" onClick={onClose}>
        X
      </button>
      <div className="category-buttons">
        <button onClick={() => setCategory("all")}>ALL</button>
        <button onClick={() => setCategory("together")}>TOGETHER</button>
        <button onClick={() => setCategory("solo")}>SOLO</button>
      </div>
      <div className="gallery-grid">
        {filteredItems.map((item) => (
          <div key={item.id} className="gallery-item" onClick={() => handleItemClick(item)}>
            {item.type === "image" ? (
              <img src={item.src} alt="사진" className="gallery-media" />
            ) : (
              <video className="gallery-media" controls>
                <source src={item.src} type="video/mp4" />
              </video>
            )}
          </div>
        ))}
      </div>

      {selectedItem && (
        <ItemDetailPopup 
          item={selectedItem} 
          onClose={handleClosePopup} 
          images={images} 
          setSelectedItem={setSelectedItem} // setSelectedItem 전달
        />
      )}
    </div>
  );
}

export default Gallery;
