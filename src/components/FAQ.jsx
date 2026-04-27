import { useState } from "react";

function FAQ() {
  const faqs = [
    {
      q: "Faut-il déjà savoir utiliser un ordinateur ?",
      a: "Non. La formation 6 mois commence par les bases : utilisation d'un ordinateur, navigation web, email. On part de zéro.",
    },
    {
      q: "Combien coûte la formation ?",
      a: "[PRIX À COMPLÉTER]. Possibilité de paiement en plusieurs fois. Renseignez-vous sur les financements DER et 3FPT.",
    },
    {
      q: "Quels sont les horaires ?",
      a: "20 heures par semaine. Les horaires précis sont définis par chaque campus. Compatible avec une activité à temps partiel.",
    },
    {
      q: "Le stage est-il rémunéré ?",
      a: "Le stage n'est pas rémunéré. Il se fait chez WYZE Academy ou SENEGEL, en présentiel à Dakar ou en remote.",
    },
    {
      q: "Je suis déjà expérimenté, la formation est-elle pour moi ?",
      a: "Oui. Le formateur adapte le rythme à chaque niveau. Les experts travaillent sur des projets avancés et font du mentorat.",
    },
    {
      q: "Est-ce que la formation est en ligne ?",
      a: "Les cours sont en présentiel dans nos 5 campus (Dakar, Thiès, Saint-Louis, Kaolack, Ziguinchor). Le stage peut être en remote.",
    },
    {
      q: "Quel diplôme obtient-on ?",
      a: "Un certificat ACADÉMIE SENEGEL (APEx) + un Open Badge numérique infalsifiable. Vous repartez aussi avec un portfolio de projets réels.",
    },
    {
      q: "Je suis commerçant, quelle formation choisir ?",
      a: 'La formation "Booster son Commerce" (3 mois) est faite pour vous. Elle combine marketing digital, création de boutique en ligne et IA pour générer vos premiers clients.',
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <section className="faq section" id="faq">
      <div className="container">
        <p className="section-kicker">FAQ</p>
        <h2 className="section-title">Tu hésites encore ?</h2>
        <p className="section-description">
          Clique sur une question pour afficher sa réponse.
        </p>

        {selectedIndex === null ? (
          <div className="faq-choice-grid">
            {faqs.map((item, index) => (
              <button
                key={index}
                type="button"
                className="faq-choice-card"
                onClick={() => setSelectedIndex(index)}
              >
                <span className="faq-choice-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="faq-choice-text">{item.q}</span>
              </button>
            ))}
          </div>
        ) : (
          <div className="faq-single-card">
            <span className="faq-single-label">Question sélectionnée</span>
            <h3>{faqs[selectedIndex].q}</h3>
            <p>{faqs[selectedIndex].a}</p>

            <button
              type="button"
              className="faq-back-btn"
              onClick={() => setSelectedIndex(null)}
            >
              Retour aux questions
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default FAQ;