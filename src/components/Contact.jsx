function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="container contact-layout">
        <div className="contact-content">
          <p className="section-kicker">Inscription</p>
          <h2>Prêt à transformer ton avenir ?</h2>
          <p>
            Les inscriptions sont ouvertes. Rejoins la prochaine promotion
            ACADÉMIE SENEGEL et développe des compétences concrètes dans le numérique.
          </p>

          <div className="contact-actions">
            <a
              href="https://wa.me/221777684999?text=Bonjour%2C%20je%20souhaite%20m%27inscrire%20%C3%A0%20une%20formation%20ACAD%C3%89MIE%20SENEGEL."
              className="btn-primary"
              target="_blank"
            >
              Je m’inscris sur WhatsApp
            </a>

            <a href="mailto:formation@senegel.org" className="btn-secondary-dark">
              Envoyer un email
            </a>
          </div>

          <div className="contact-details">
            <p><strong>Email :</strong> formation@senegel.org</p>
            <p><strong>Téléphone :</strong> 77 768 49 99 / 33 843 63 12</p>
            <p><strong>Adresse :</strong> Dakar, Sénégal</p>
          </div>
        </div>

        <form className="contact-form">
          <h3>Demande d’information</h3>

          <input type="text" placeholder="Nom complet" />
          <input type="email" placeholder="Adresse email" />
          <input type="tel" placeholder="Téléphone" />

          <select>
            <option>Formation souhaitée</option>
            <option>Formation complète - 6 mois</option>
            <option>Booster son Commerce - 3 mois</option>
          </select>

          <textarea placeholder="Votre message"></textarea>

          <button type="submit">Envoyer la demande</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;