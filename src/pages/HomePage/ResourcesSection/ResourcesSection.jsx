import React from "react";
import "./ResourcesSection.css"; // Arquivo CSS

const ResourcesSection = () => {
  return (
    <div className="resources-section">
      <section className="resources-section-content">
        <h2>Recursos pra quem vive o Corinthians</h2>
        <div className="resources-grid">
          <div className="resource-card">
            <span className="icon"><i className="bi bi-mic"></i></span> {/* Ícone de microfone */}
            <h3>Respostas com alma de arquibancada</h3>
            <p>Receba respostas e informações como um verdadeiro corinthiano.</p>
          </div>
          <div className="resource-card">
            <span className="icon"><i className="bi bi-newspaper"></i></span> {/* Ícone de jornal */}
            <h3>Notícias em tempo real</h3>
            <p>Acompanhe as últimas notícias e novidades do Timão.</p>
          </div>
          <div className="resource-card">
            <span className="icon"><i className="bi bi-currency-dollar"></i></span> {/* Ícone de dólar */}
            <h3>Palpites certeiros nas bets</h3>
            <p>Veja as melhores dicas de apostas para o jogo do Coringão.</p>
          </div>
          <div className="resource-card">
            <span className="icon"><i className="bi bi-house-door"></i></span> {/* Ícone de casa */}
            <h3>Caminho até a Arena</h3>
            <p>Guia completo para chegar na Arena Corinthians com facilidade.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesSection;
