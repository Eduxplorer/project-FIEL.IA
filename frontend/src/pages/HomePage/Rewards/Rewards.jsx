import React from "react";
import './Rewards.css';

const Rewards = () => {
  return (
    <div className="premios-recompensas">
      <h2>Prêmios e Recompensas</h2>
      <p>Participe do nosso Quiz e concorra a prêmios exclusivos: camisetas oficiais, ingressos para jogos, e até dinheiro! Quanto mais você interage, maiores suas chances.</p>
      <div className="premios">
        <div className="premio">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Corinthians_home_jersey_2020.jpg/800px-Corinthians_home_jersey_2020.jpg"
            alt="Camisa Oficial"
          />
          <p>Camisa Oficial</p>
        </div>
        <div className="premio">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Corinthians_Ticket_2023.jpg/800px-Corinthians_Ticket_2023.jpg"
            alt="Ingressos"
          />
          <p>Ingressos para jogos</p>
        </div>
        <div className="premio">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Brazilian_banknotes_100_reais_2018.jpg/800px-Brazilian_banknotes_100_reais_2018.jpg"
            alt="Dinheiro"
          />
          <p>Até dinheiro!</p>
        </div>
      </div>
    </div>
  );
};

export default Rewards;
