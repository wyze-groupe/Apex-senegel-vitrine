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
    answer: "Non. La formation commence par les bases...",
    image: faq1  
  },
  {
    number: "02",
    badge: "Financement",
    question: "Combien coûte la formation ?",
    answer: "Le prix est à compléter...",
    image: faq2
  },
  {
    number: "03",
    badge: "Organisation",
    question: "Quels sont les horaires ?",
    answer: "20 heures par semaine...",
    image: faq3  },
  {
    number: "04",
    badge: "Stage",
    question: "Le stage est-il rémunéré ?",
    answer: "Le stage n’est pas rémunéré...",
    image: faq4  },
  {
    number: "05",
    badge: "Niveaux",
    question: "Je suis déjà expérimenté...",
    answer: "Oui, le formateur adapte...",
    image: faq5
    },
  {
    number: "06",
    badge: "Campus",
    question: "Est-ce que la formation est en ligne ?",
    answer: "Présentiel dans 5 campus...",
    image: faq6
  },
  {
    number: "07",
    badge: "Certification",
    question: "Quel diplôme obtient-on ?",
    answer: "Certificat + badge numérique...",
    image: faq7  },
  {
    number: "08",
    badge: "Entrepreneurs",
    question: "Je suis commerçant...",
    answer: "Booster son Commerce...",
    image: faq8 
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