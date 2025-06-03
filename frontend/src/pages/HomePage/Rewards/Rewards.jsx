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
            src="/corinthians-camiseta.jpg"
            alt="Camisa Oficial"
            />
          <p>Camisa Oficial</p>
            </div>
        </div>
        <div className="premio">
          <div className="premio-content">

          <img
            src="/corinthians-ingressos.jpg"
            alt="Ingressos"
            />
          <p>Ingressos para jogos</p>
            </div>
        </div>
        <div className="premio">
          <div className="premio-content">

          <img
            src="/money.jpg"
            alt="Dinheiro"
            />
          <p>Até dinheiro!</p>
            </div>
        </div>
        <div className="premio">
          <div className="premio-content">

          <img
            src="/fielia-celular.jpg" // Substitua pelo caminho da sua imagem do quiz
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