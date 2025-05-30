import "./EasyAcess.css"; 

const EasyAcess = () => {
    return (
        <section className="easy-access-section">
        <div className="easy-container">
          <h2>Acesso fácil onde você tiver!</h2>
          <div className="access-points-container">
            
            <div className="access-point-card">
              <div className="icon-wrapper">
                  {/* Usando <i> com classes Bootstrap Icons */}
                  <i className="bi bi-telephone icon"></i> 
              </div>
              <h3>No seu celular</h3>
              <p>
                Acesse pelo WhatsApp ou pelo aplicativo móvel com interface
                intuitiva.
              </p>
            </div>
  
            <div className="access-point-card">
              <div className="icon-wrapper">
                  {/* Usando <i> com classes Bootstrap Icons */}
                  <i className="bi bi-globe icon"></i> 
              </div>
              <h3>No site</h3>
              <p>
                Layout liso, rápido e leve para consultas rápidas em qualquer
                navegador.
              </p>
            </div>
  
            <div className="access-point-card">
              <div className="icon-wrapper">
                  {/* Usando <i> com classes Bootstrap Icons */}
                  <i className="bi bi-house icon"></i>
              </div>
              <h3>Em qualquer lugar</h3>
              <p>
                Tá em casa, no busão ou na quebrada? A Fiel.IA cola contigo.
              </p>
            </div>
  
          </div>
        </div>
      </section>
    );
}

export default EasyAcess; 