function Formations() {
  return (
    <section className="formations section" id="formations">
      <div className="container">
        <p className="section-kicker">Nos formations</p>

        <h2 className="section-title">
          Deux parcours, un objectif : votre avenir numérique
        </h2>

        <p className="section-description">
          Choisissez la formation qui correspond à votre situation. Aucun
          prérequis technique pour les deux parcours.
        </p>

        <div className="formations-grid">
          <article className="formation-card">
            <div className="formation-cover formation-cover-web">
              <span className="formation-badge">Tous niveaux</span>
            </div>

            <div className="formation-body">
              <h3>Formation complète</h3>
              <span className="formation-duration">6 mois</span>

              <p className="formation-subtitle">
                4 mois intensifs, 1 mois de stage garanti et 1 mois de projet
                avec soutenance.
              </p>

              <div className="formation-info">
                <span>500h</span>
                <span>24 semaines</span>
                <span>Diplôme APEx</span>
              </div>

              <div className="formation-block">
                <h4>Trois filières au choix</h4>
                <div className="formation-tags">
                  <span>Développement Web</span>
                  <span>Marketing Digital</span>
                  <span>Design & UI/UX</span>
                </div>
              </div>

              <ul className="formation-list">
                <li>Stage garanti chez WYZE Academy ou SENEGEL</li>
                <li>Projet individuel libre avec soutenance orale</li>
                <li>Pédagogie adaptée à chaque niveau</li>
                <li>Certificat APEx et Open Badge numérique</li>
              </ul>

              <a href="#inscription" className="formation-btn">
                Je m’inscris
              </a>
            </div>
          </article>

          <article className="formation-card">
            <div className="formation-cover formation-cover-business">
              <span className="formation-badge">Auto-entrepreneurs</span>
            </div>

            <div className="formation-body">
              <h3>Booster son Commerce</h3>
              <span className="formation-duration">3 mois</span>

              <p className="formation-subtitle">
                Digitalisez votre activité avec le marketing, le e-commerce et
                l’intelligence artificielle.
              </p>

              <div className="formation-info">
                <span>240h</span>
                <span>12 semaines</span>
                <span>Certificat APEx</span>
              </div>

              <div className="formation-block">
                <h4>Un parcours en trois phases</h4>
                <div className="formation-tags">
                  <span>Présence digitale</span>
                  <span>Vente en ligne</span>
                  <span>IA & Croissance</span>
                </div>
              </div>

              <ul className="formation-list">
                <li>Boutique en ligne avec paiement Orange Money & Wave</li>
                <li>Application mobile créée avec l’IA</li>
                <li>Premiers clients et ventes réelles</li>
                <li>Business plan, NINEA et accompagnement financement</li>
              </ul>

              <a href="#inscription" className="formation-btn">
                Je développe mon business
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Formations;