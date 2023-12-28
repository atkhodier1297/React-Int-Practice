import React from "react";
import "./star-rating.css";
import { useState } from 'react';

function StarRating() {
    const [currentRating, setCurrentRating] = useState(0);
  return (
    <div className="star-rating-container">
        current rating: {currentRating}  
      {[...Array(5)].map((_, idx) => {
        const ratingValue = idx + 1
        return (
        <p 
        onClick={() => setCurrentRating(ratingValue)}
        className={`star ${ratingValue <= currentRating ? 'active' : '' }`}
        key={idx}
        >
        {ratingValue}
        </p>
        )
      })
      }
    </div>
  );
}

export default StarRating;
