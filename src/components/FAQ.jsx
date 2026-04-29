import { useState } from "react";
import faq1 from "../assets/faq/1.png";
import faq2 from "../assets/faq/2.png";
import faq3 from "../assets/faq/3.png";
import faq4 from "../assets/faq/4.png";
import faq5 from "../assets/faq/5.png";
import faq6 from "../assets/faq/6.png";
import faq7 from "../assets/faq/7.png";
import faq8 from "../assets/faq/8.png";

const faqs = [
  {
    number: "01",
    badge: "Débutants",
    question: "Faut-il déjà savoir utiliser un ordinateur ?",
    answer:
      "Non. La formation complète de 6 mois commence par les bases : utilisation d’un ordinateur, navigation sur internet, email, outils bureautiques et prise en main digitale. Nous partons de zéro pour permettre à chacun de progresser sereinement. :contentReference[oaicite:0]{index=0}",
    image: faq1,
  },

  {
    number: "02",
    badge: "Financement",
    question: "Combien coûte la formation ?",
    answer:
      "Le tarif exact sera communiqué prochainement. Un paiement en plusieurs fois pourra être proposé. Il est également conseillé de se renseigner sur les aides et financements disponibles comme la DER ou le 3FPT. :contentReference[oaicite:1]{index=1}",
    image: faq2,
  },

  {
    number: "03",
    badge: "Organisation",
    question: "Quels sont les horaires ?",
    answer:
      "La formation représente 20 heures par semaine. Les horaires précis sont fixés selon chaque campus (Dakar, Thiès, Saint-Louis, Kaolack, Ziguinchor). Le rythme peut être compatible avec une activité à temps partiel. :contentReference[oaicite:2]{index=2}",
    image: faq3,
  },

  {
    number: "04",
    badge: "Stage",
    question: "Le stage est-il rémunéré ?",
    answer:
      "Le stage d’un mois n’est pas rémunéré. Il se déroule chez WYZE Academy ou SENEGEL, soit en présentiel à Dakar, soit à distance selon les opportunités disponibles. :contentReference[oaicite:3]{index=3}",
    image: faq4,
  },

  {
    number: "05",
    badge: "Tous niveaux",
    question: "Je suis déjà expérimenté, la formation est-elle pour moi ?",
    answer:
      "Oui. Le programme est conçu pour tous les niveaux. Le formateur adapte le rythme selon chaque profil. Les apprenants avancés travaillent sur des projets plus ambitieux et peuvent aussi accompagner les autres participants. :contentReference[oaicite:4]{index=4}",
    image: faq5,
  },

  {
    number: "06",
    badge: "Campus",
    question: "Est-ce que la formation est en ligne ?",
    answer:
      "Les cours se déroulent principalement en présentiel dans les 5 villes partenaires : Dakar, Thiès, Saint-Louis, Kaolack et Ziguinchor. Certaines phases, comme le stage, peuvent être réalisées à distance. :contentReference[oaicite:5]{index=5}",
    image: faq6,
  },

  {
    number: "07",
    badge: "Certification",
    question: "Quel diplôme obtient-on ?",
    answer:
      "À la fin du parcours, vous obtenez un certificat officiel ACADÉMIE SENEGEL (APEx), accompagné d’un Open Badge numérique infalsifiable. Vous repartez également avec un portfolio de projets concrets réalisés durant la formation. :contentReference[oaicite:6]{index=6}",
    image: faq7,
  },

  {
    number: "08",
    badge: "Entrepreneurs",
    question: "Je suis commerçant, quelle formation choisir ?",
    answer:
      "La formation Booster son Commerce (3 mois) est idéale pour vous. Elle combine marketing digital, création de boutique en ligne, réseaux sociaux, outils IA et méthodes concrètes pour obtenir vos premiers clients rapidement. :contentReference[oaicite:7]{index=7}",
    image: faq8,
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeFaq = faqs[activeIndex];

  return (
    <section className="faq section" id="faq">
      <div className="container">
        <p className="section-kicker">FAQ</p>
        <h2 className="section-title">Questions fréquentes</h2>
        <p className="section-description">
          Tout ce qu’il faut savoir avant de rejoindre ACADÉMIE SENEGEL.
        </p>

        <div className="faq-premium-layout">
          <div className="faq-question-list">
            {faqs.map((faq, index) => (
              <button
                key={index}
                className={`faq-question-card ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <span>{faq.number}</span>
                <p>{faq.question}</p>
              </button>
            ))}
          </div>

          <div className="faq-answer-card">
            <div className="faq-answer-image">
              <img src={activeFaq.image} alt={activeFaq.question} />
            </div>

            <div className="faq-answer-content">
              <span className="faq-answer-badge">{activeFaq.badge}</span>
              <h3>{activeFaq.question}</h3>
              <p>{activeFaq.answer}</p>

              <a href="#contact" className="faq-answer-btn">
                Je veux m’inscrire
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}