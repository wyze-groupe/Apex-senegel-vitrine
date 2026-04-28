import { useState } from "react";
import logoApex from "../assets/logo_APEX_white.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-inner">

        <a href="#home" className="navbar-logo">
          <img src={logoApex} alt="APEx" className="real-logo" />
          <span>ACADÉMIE SENEGEL</span>
        </a>

        <button
          className="navbar-toggle"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        <nav className={`navbar-links ${open ? "open" : ""}`}>
          <a href="#home">Accueil</a>
          <a href="#formations">Formations</a>
          <a href="#pourquoi">Pourquoi nous</a>
          <a href="#faq">FAQ</a>
          <a href="#contact" className="navbar-cta">
            Je m’inscris
          </a>
        </nav>

      </div>
    </header>
  );
}