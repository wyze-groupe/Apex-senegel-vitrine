function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-content">
        <h1>
          Apprends. Crée. Entreprends.
        </h1>

        <p>
          Forme-toi au numérique au plus près de chez toi.
        </p>

        <div className="buttons">
            <a href="#formations" className="btn-primary">
                Découvrir nos formations
            </a>

            <a href="#formations" className="btn-primary">
                Je suis auto-entrepreneur
            </a>
        </div>

        <div className="badges">
          <span>Aucun prérequis</span>
          <span>Stage garanti</span>
          <span>5 villes</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;