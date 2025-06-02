import React from "react";
import './Rewards.css';

const Rewards = () => {
  return (
    <div className="premios-recompensas">
      <h2>Prêmios e Recompensas</h2>
      <div className="premios">
        <div className="premio">
          <div className="premio-content">

          <img
            src="/fielIA-banner1.png"
            alt="Camisa Oficial"
            />
          <p>Camisa Oficial</p>
            </div>
        </div>
        <div className="premio">
          <div className="premio-content">

          <img
            src="/fielIA-banner1.png"
            alt="Ingressos"
            />
          <p>Ingressos para jogos</p>
            </div>
        </div>
        <div className="premio">
          <div className="premio-content">

          <img
            src="/fielIA-banner1.png"
            alt="Dinheiro"
            />
          <p>Até dinheiro!</p>
            </div>
        </div>
        <div className="premio">
          <div className="premio-content">

          <img
            src="/fielIA-banner1.png" // Substitua pelo caminho da sua imagem do quiz
            alt="Participe de Quizzes"
            />
          <p>Participe de Quizzes</p>
            </div>
        </div>
      </div>

      <p>Participe do nosso Quiz e concorra a prêmios exclusivos: camisetas oficiais, ingressos para jogos, e até dinheiro! Quanto mais você interage, maiores suas chances.</p>
    </div>
  );
};

export default Rewards;