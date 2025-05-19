import React from "react";
import "../styles.css";
//import "../headerstyle.css";

export default function Header() {
  return (
    <div className="header">
      <h1 className="logo">
        <span className="logo__serif">Sarang</span>
        <span className="logo__script">Bom</span>
      </h1>
      <h2 className="app-subtitle">
        Popcorn time? Find your next Kdrama here.
      </h2>
    </div>
  );
}
