 import "./Header.css";

 const Header = () => {
  return (
    <div className="grid-container">
      <div className="text-content-header">
        <h1>Fiel.IA – A Inteligência Artificial da Fiel Torcida</h1>
        <p>
          A Primeira inteligência Alvinegra da Favela. Chegou o parceiro que
          te atualiza 24h sobre o Coringão. É resenha, é informação, é zueira e
          é nós!
        </p>
        <button>Quero falar com a Fiel.IA agora</button>
      </div>
      <div className="image-content">
        <img src="/fielIA-banner1.png" alt="FielIA Image" />
      </div>
    </div>
  );
};

export default Header;