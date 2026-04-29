import heroImg from "../assets/faq/4.png";

export default function Hero() {
  return (
    <section className="hero">

<div className="hero-bg">
  <img src={heroImg} alt="Apex Académie Sénégal" />
</div>

  <div className="hero-overlay"></div>

  <div className="container">

    <div className="hero-badges">
      <div><small>Aucun prérequis</small></div>
      <div><small>Stage garanti</small></div>
      <div><small>5 villes du Sénégal</small></div>
    </div>

    <div className="hero-content">

      <h1>
        Apprends. Crée. <span>Entreprends.</span>
      </h1>

      <p className="hero-subtitle">
        Forme-toi au numérique au plus près de chez toi.
      </p>

      <p className="hero-text">
        Développement Web, Marketing Digital, Design,
        E-commerce et Intelligence Artificielle.
      </p>

      <div className="hero-actions">
        <a href="#formations" className="hero-btn primary">
          Découvrir nos formations
        </a>

        <a href="#formations" className="hero-btn secondary">
          Je suis auto-entrepreneur
        </a>
      </div>

    </div>
  </div>

</section>
  );
}