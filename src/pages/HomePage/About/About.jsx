import "./About.css";

const About = () => {
  return (
    <div className="about-container">
        <div className="background-image1"></div>
      <h1>O que é a Fiel.IA?</h1>
      <div className="about-content">
        <div className="about-text">
          <h3>Feita para o torcedor Fiel</h3>
          <p>
            Uma Inteligência Artificial feita pra Fiel, por quem entende o Bando
            de Loucos.
          </p>
        </div>
        <div className="about-text">
          <h3>Vive o Corinthians</h3>
          <p>
            Fala como a gente, torce como a gente, vive o Corinthians com sangue
            no olho e coração na mão
          </p>
        </div>
        <div className="about-text">
          <h3>Informação na Hora</h3>
          <p>Traz escalação, notícias, bastidores e tudo do Timão na hora.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
