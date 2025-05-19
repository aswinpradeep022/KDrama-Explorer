import React, { useState } from "react";
import "../styles.css";
import DramaCard from "./DramaCard";

export default function DramasGrid({ dramas, watchlist, toggleWatchlist }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (change) => {
    setSearchTerm(change.target.value);
  };
  const [genre, setGenre] = useState("All Genres");
  const [rating, setRating] = useState("All");

  const handleGenreChange = (change) => {
    setGenre(change.target.value);
  };

  const handleRatingChange = (change) => {
    setRating(change.target.value);
  };

  const matchesGenre = (drama, genre) => {
    return (
      genre === "All Genres" ||
      drama.genre.toLowerCase().includes(genre.toLowerCase())
    );
  };

  const matchesRating = (drama, rating) => {
    switch (rating) {
      case "All":
        return true;
      case "Good":
        return drama.rating >= 8;
      case "Ok":
        return drama.rating >= 5 && drama.rating < 8;
      case "Bad":
        return drama.rating < 5;
      default:
        return false;
    }
  };

  const matchesSearchTerm = (drama, searchTerm) => {
    return drama.title.toLowerCase().includes(searchTerm.toLowerCase());
  };

  const filteredDramas = dramas.filter((drama) => {
    return (
      matchesGenre(drama, genre) &&
      matchesRating(drama, rating) &&
      matchesSearchTerm(drama, searchTerm)
    );
  });

  return (
    <>
      <input
        type="text"
        className="search-input"
        placeholder="Search your favorite dramas here..."
        value={searchTerm}
        onChange={handleSearchChange}
      ></input>

      <div className="filter-bar">
        <div className="filter-slot">
          <label>Genre</label>
          <select
            className="filter-dropdown"
            value={genre}
            onChange={handleGenreChange}
          >
            <option>All Genres</option>
            <option>Action</option>
            <option>Drama</option>
            <option>Fantasy</option>
            <option>Horror</option>
            <option>Romance</option>
            <option>Thriller</option>
          </select>
        </div>
        <div className="filter-slot">
          <label>Rating</label>
          <select
            className="filter-dropdown"
            value={rating}
            onChange={handleRatingChange}
          >
            <option>All</option>
            <option>Good</option>
            <option>Ok</option>
            <option>Bad</option>
          </select>
        </div>
      </div>

      <div className="movies-grid">
        {filteredDramas.map((drama) => (
          <DramaCard
            drama={drama}
            key={drama.id}
            toggleWatchlist={toggleWatchlist}
            isWatchlisted={watchlist.includes(drama.id)}
          ></DramaCard>
        ))}
      </div>
    </>
  );
}
