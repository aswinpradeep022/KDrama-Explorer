import React from "react";
import "../styles.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="footer">
      <p className="footer-text">© {year} SarangBom, All rights reserved</p>
    </div>
  );
}
