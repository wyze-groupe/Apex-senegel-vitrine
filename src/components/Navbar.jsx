import logoApex from "../assets/logo_APEX_black.png";

function Navbar() {
  return (
    <header className="navbar">
      <div className="container">
        <a href="#home" className="logo-box">
            <img src={logoApex} alt="Logo APEx" className="logo-img" />
            <span className="logo-text">ACADÉMIE SENEGEL</span>
        </a>

        <nav>
          <a href="#home">Accueil</a>
          <a href="#formations">Formations</a>
          <a href="#pourquoi">Pourquoi</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="btn">
          S'inscrire
        </a>
      </div>
    </header>
  );
}

export default Navbar;