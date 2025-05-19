import React from "react";
import "../styles.css";
import DramaCard from "./DramaCard";

export default function Watchlist({ dramas, watchlist, toggleWatchlist }) {
  return (
    <div>
      <h1 className="title">Your Watchlist</h1>
      <div className="watchlist">
        {watchlist.map((id) => {
          const drama = dramas.find((drama) => drama.id === id);
          return (
            <DramaCard
              key={id}
              drama={drama}
              toggleWatchlist={toggleWatchlist}
              isWatchlisted={true}
            ></DramaCard>
          );
        })}
      </div>
    </div>
  );
}
