function Pourquoi() {
  const items = [
    {
      title: "Proximité",
      text: "Des campus dans 5 villes du Sénégal. Pas besoin d'aller à Dakar.",
    },
    {
      title: "100% pratique",
      text: "Méthode Learning by Doing. Chaque semaine produit un livrable concret.",
    },
    {
      title: "Stage garanti",
      text: "1 mois chez WYZE Academy ou SENEGEL pour la formation 6 mois.",
    },
    {
      title: "Outils gratuits",
      text: "Figma, Canva, VS Code, GIMP et autres outils accessibles.",
    },
    {
      title: "Boosté à l’IA",
      text: "ChatGPT et Claude intégrés dans les formations modernes.",
    },
    {
      title: "Diplôme reconnu",
      text: "Certificat APEx + Open Badge numérique + portfolio réel.",
    },
  ];

  return (
    <section className="pourquoi section" id="pourquoi">
      <div className="container">
        <p className="section-kicker">Pourquoi nous choisir</p>

        <h2 className="section-title">
          Une formation pensée pour réussir rapidement
        </h2>

        <p className="section-description">
          Une approche moderne, pratique et adaptée au marché africain.
        </p>

        <div className="why-grid">
          {items.map((item, index) => (
            <div className="why-card" key={index}>
              <span className="why-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pourquoi;