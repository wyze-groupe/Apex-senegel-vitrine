export default function Hero() {
  return (
    <section className="hero">

  <div className="hero-bg">
    <img
src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1800&q=80"    />
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