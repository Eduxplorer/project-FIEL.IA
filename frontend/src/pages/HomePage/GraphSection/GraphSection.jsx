
import "./GraphSection.css"

const GraphSection = () => {
  return (
    <div className="graph-section-container">
    {/* Primeira coluna de texto */}
    <div className='graph-text-column'>
      <div className='text-content-card'>
        <h3>Converse</h3>
        <p>Tire suas dúvidas e receba informações em tempo real</p>
      </div>
      <div className='text-content-card'>
        <h3>Leve junto</h3>
        <p>Tenha o Timão no seu bolso, onde quer que você vá</p>
      </div>
    </div>

    {/* Div da imagem */}
    <div className='graph-image-container'>
      <img
        src="/graph.png"
        alt="Gráfico ilustrativo"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src="https://placehold.co/300x400/cccccc/000000?text=Falha+ao+carregar";
        }}
      />
    </div>

    {/* Segunda coluna de texto */}
    <div className='graph-text-column'>
      <div className='text-content-card'>
        <h3>Explore</h3>
        <p>Descubra funcionalidades e novidades exclusivas.</p>
      </div>
      <div className='text-content-card'>
        <h3>Compartilhe</h3>
        <p>Mostre sua paixão e conecte-se com outros torcedores.</p>
      </div>
    </div>
  </div>
  );
}


export default GraphSection;