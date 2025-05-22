import React from 'react';
import './Orchid.css';

const Orchid = ({ orchid }) => {
  const {
    id,
    name,
    rating,
    isSpecial,
    isNatural,
    image,
    color,
    numberOfLike,
    origin,
    category
  } = orchid;

  // Hiển thị số sao dựa trên rating
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= rating ? 'star filled' : 'star'}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="orchid-card">
      <div className="orchid-image-container">
        <img src={image} alt={name} className="orchid-image" />
        {isSpecial && <div className="special-badge">Special</div>}
      </div>
      <div className="orchid-info">
        <h3 className="orchid-name">{name}</h3>
        <div className="orchid-details">
          <p className="orchid-origin">
            <span className="detail-label">Origin:</span> {origin}
          </p>
          <p className="orchid-color">
            <span className="detail-label">Color:</span> 
            <span className="color-dot" style={{ backgroundColor: color }}></span>
            {color}
          </p>
          <p className="orchid-category">
            <span className="detail-label">Category:</span> {category}
          </p>
          <p className="orchid-type">
            <span className="detail-label">Type:</span> 
            {isNatural ? 'Natural' : 'Hybrid'}
          </p>
          <div className="orchid-rating">
            <span className="detail-label">Rating:</span> 
            <div className="stars">{renderStars()}</div>
          </div>
          <p className="orchid-likes">
            <span className="like-icon">♥</span> {numberOfLike} likes
          </p>
        </div>
      </div>
    </div>
  );
};

export default Orchid;