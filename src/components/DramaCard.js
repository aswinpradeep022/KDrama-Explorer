import React from "react";
import "../styles.css";

export default function DramaCard({ drama, isWatchlisted, toggleWatchlist }) {
  const handleError = (e) => {
    e.target.src =
      "https://res.cloudinary.com/ddkasgoly/image/upload/v1747676812/default_qhqemc.jpg";
  };

  const getRatingClass = (rating) => {
    if (rating >= 8) {
      return "rating-good";
    }

    if (rating > 5 && rating < 8) {
      return "rating-ok";
    }

    return "rating-bad";
  };

  return (
    <div key={drama.id} className="movie-card">
      <img src={drama.image} alt={drama.title} onError={handleError}></img>
      <div className="movie-card-info">
        <h3 className="movie-card-title">{drama.title}</h3>
        <div>
          <span className="movie-card-genre">{drama.genre}</span>
          <span className={`movie-card-rating ${getRatingClass(drama.rating)}`}>
            {drama.rating}
          </span>
        </div>

        <label className="switch">
          <input
            type="checkbox"
            checked={isWatchlisted}
            onChange={() => toggleWatchlist(drama.id)}
          ></input>
          <span className="slider">
            <span className="slider-label">
              {isWatchlisted ? "In Watchlist" : "Add to Watchlist"}
            </span>
          </span>
        </label>
      </div>
    </div>
  );
}
