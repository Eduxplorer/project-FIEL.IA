import { useState } from "react"; // 1. Importe o useState
import "./NavBar.css";

const NavBar = () => {
  // 2. Crie um estado para controlar se o menu está ativo (aberto) ou não
  const [menuActive, setMenuActive] = useState(false);

  return (
    // Corrigido: 'class' trocado por 'className' em todos os elementos
    // Adicionamos a classe 'active' dinamicamente quando o menu estiver aberto
    <div className={`nav ${menuActive ? "active" : ""}`}>
      <div className="nav-container">
        {/* Links de navegação */}
        <div className="nav-links">
          <div className="btn">Home</div>
          <div className="btn">Contato</div>
          <div className="btn">Sobre</div>
          <div className="btn">FAQ</div>
        </div>

        {/* Efeito de borda com SVG (mantido como no original) */}
<svg
  className="outline"
  overflow="visible"
  width="100%"
  height="60" // Altura ajustada para 60px, igual à da navbar
  viewBox="0 0 1200 60" // CORRIGIDO: Usando valores numéricos. 1200 é uma largura de desktop comum.
  preserveAspectRatio="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <rect
    className="rect"
    pathLength="100"
    x="0"
    y="0"
    width="100%"
    height="60"
    fill="transparent"
    strokeWidth="5"
  ></rect>
</svg>

        {/* 3. Botão Hambúrguer (só será visível no mobile via CSS) */}
        <div className="hamburger" onClick={() => setMenuActive(!menuActive)}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;