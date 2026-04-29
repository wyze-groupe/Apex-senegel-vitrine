import { useEffect, useRef } from "react";

function Pourquoi() {
  const trackRef = useRef(null);

  const items = [
    { number: "01", title: "Proximité", text: "Des campus dans 5 villes du Sénégal. Pas besoin d’aller à Dakar." },
    { number: "02", title: "100% pratique", text: "Chaque semaine, vous réalisez un livrable concret." },
    { number: "03", title: "Stage garanti", text: "Un mois de stage chez WYZE Academy ou SENEGEL." },
    { number: "04", title: "Outils accessibles", text: "Figma, Canva, VS Code, GIMP et autres outils utiles." },
    { number: "05", title: "Boosté à l’IA", text: "ChatGPT et Claude intégrés aux formations modernes." },
    { number: "06", title: "Diplôme reconnu", text: "Certificat APEx, Open Badge numérique et portfolio réel." },
  ];

  const loopItems = [...items, ...items, ...items];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let frame;
    const speed = 0.5;

    const animate = () => {
      track.scrollLeft += speed;

      const resetPoint = track.scrollWidth / 3;

      if (track.scrollLeft >= resetPoint) {
        track.scrollLeft -= resetPoint;
      }

      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className="pourquoi section" id="pourquoi">
      <div className="container">
        <p className="section-kicker">Pourquoi nous</p>

        <h2 className="section-title">Pourquoi choisir ACADÉMIE SENEGEL ?</h2>

        <p className="section-description">
          Une approche moderne, pratique et pensée pour réussir rapidement.
        </p>

        <div className="why-carousel" ref={trackRef}>
          {loopItems.map((item, index) => (
            <article className="why-scroll-card" key={index}>
              <span className="why-scroll-number">{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pourquoi;