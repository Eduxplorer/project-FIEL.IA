import React from "react";
import "./ExperienceSection.css"; // Arquivo CSS para os estilos

const ExperienceSection = () => {
  return (
    <div className="experience-section">
      <section className="experience-content">
        <div className="experience-text-content">
          <h2>Uma experiência que tem a cara da Fiel</h2>
          <div className="cards">
            <div className="card">
              <h3>Parceiro de arquibancada</h3>
              <p>
                "A Fiel.IA não é só IA. É tipo aquele parceiro de
                arquibancada que nunca perde um jogo."
              </p>
            </div>
            <div className="card">
              <h3>Conversa real</h3>
              <p>
                Você: "Quem vai pro jogo hoje?"
                <br />
                Fiel.IA: "Hoje é guerra, mano! Hugo Souza, Félix Torres,
                Mateuzinho... o time tá na pegada. Vamos atropelar!"
              </p>
            </div>
            <div className="card">
              <h3>Memória corinthiana</h3>
              <p>
                Lembra história, revive gol raiz e até dá palpite em aposta. Se
                você tiver dúvida, a Fiel.IA responde tipo aquele parceiro que
                manja tudo do time.
              </p>
            </div>
          </div>
        </div>
        <div className="image-experience-content">
          <img src="/fielIA-banner2.png" alt="Fiel IA Banner" />
        </div>
      </section>
    </div>
  );
};

export default ExperienceSection;
