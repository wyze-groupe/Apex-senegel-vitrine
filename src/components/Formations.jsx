function Formations() {
  return (
    <section className="formations section" id="formations">
      <div className="container">
        <p className="section-kicker">Nos formations</p>
        <h2 className="section-title">
          Deux parcours pour apprendre, créer et entreprendre
        </h2>
        <p className="section-description">
            ACADÉMIE SENEGEL propose des formations intensives en Développement Web,
            Marketing Digital et Design. À Dakar, Thiès, Saint-Louis, Kaolack et Ziguinchor.
        </p>
        <p className="section-description">
          Choisis la formation qui correspond à ton niveau et à ton projet.
        </p>

        <div className="formations-grid">
          <article className="formation-card formation-card-highlight">
            <span className="formation-badge">TOUS NIVEAUX</span>

            <h3>Formation complète - 6 mois</h3>

            <p className="formation-subtitle">
              4 mois intensifs + 1 mois de stage garanti + 1 mois de projet & soutenance
            </p>

            <p className="formation-meta">
              <strong>Durée :</strong> 6 mois (24 semaines) - 20h/semaine - 500 heures
            </p>

            <p className="formation-meta">
              <strong>Prérequis :</strong> Aucun. Ouvert aux débutants, intermédiaires et experts.
            </p>

            <div className="formation-block">
              <h4>3 filières au choix</h4>
              <ul>
                <li>Développement Web - HTML, CSS, JavaScript, React, Node.js, bases de données, WordPress</li>
                <li>Marketing Digital - Réseaux sociaux, SEO, WhatsApp Business, Meta Ads, Google Ads, email marketing</li>
                <li>Design Graphique & UI/UX - GIMP, Inkscape, Figma, Canva, Scribus, branding, motion design</li>
              </ul>
            </div>

            <div className="formation-block">
              <h4>Points clés</h4>
              <ul>
                <li>Stage d’1 mois garanti chez WYZE Academy ou SENEGEL</li>
                <li>Projet individuel libre + soutenance orale devant jury</li>
                <li>Diplôme APEx + Open Badge numérique infalsifiable</li>
                <li>Pédagogie différenciée selon le niveau</li>
                <li>Dakar, Thiès, Saint-Louis, Kaolack, Ziguinchor</li>
              </ul>
            </div>

            <a href="#inscription" className="formation-btn">
              Je choisis cette formation
            </a>
          </article>

          <article className="formation-card formation-card-highlight">
            <span className="formation-badge">AUTO-ENTREPRENEURS</span>

            <h3>Booster son Commerce - 3 mois</h3>

            <p className="formation-subtitle">
              Digitalisez votre business avec le Marketing, le E-commerce et l’IA
            </p>

            <p className="formation-meta">
              <strong>Durée :</strong> 3 mois (12 semaines) - 20h/semaine - 240 heures
            </p>

            <p className="formation-meta">
              <strong>Prérequis :</strong> Avoir un commerce existant ou un projet concret. Aucun prérequis technique.
            </p>

            <div className="formation-block">
              <h4>Le parcours en 3 phases</h4>
              <ul>
                <li>Mois 1 - Présence Digitale : réseaux sociaux, WhatsApp Business, SEO local, Google My Business</li>
                <li>Mois 2 - Vendre en Ligne : site WordPress + WooCommerce, paiement Orange Money & Wave</li>
                <li>Mois 3 - IA & Scale : IA pour le contenu, no-code, analytics, lancement réel</li>
              </ul>
            </div>

            <div className="formation-block">
              <h4>Points clés</h4>
              <ul>
                <li>Boutique en ligne opérationnelle avec paiement mobile intégré</li>
                <li>Application mobile fonctionnelle créée avec l’IA</li>
                <li>Premiers clients et ventes réelles pendant la formation</li>
                <li>Bloc entrepreneuriat renforcé : business plan, NINEA, DER, fiscalité</li>
                <li>Certificat APEx Auto-Entrepreneur</li>
              </ul>
            </div>

            <a href="#inscription" className="formation-btn">
              Je lance mon commerce
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Formations;