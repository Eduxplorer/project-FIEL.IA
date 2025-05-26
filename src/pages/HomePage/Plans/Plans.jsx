import "./Plans.css";

const Plans = () => {

return (

    <div className="plans-container">
        <div className="plans-background"></div>
        <h1>Planos pra todo tipo de Corinthiano</h1>
        <div className="plans-text-content">
            <div className="plans-card">
                <h2>Básico</h2>
                <p>R$ 19,90</p>
                <p>10 interações/dia</p>
                <p>Para torcedores casuais que querem se manter informados</p>
            </div>
            <div className="plans-card">
                <h2>Fiel</h2>
                <p>R$ 54,00</p>
                <p>25 interações/dia + Quiz geral.</p>
                <p>Nossa opção mais popular para o veradeiro corintiano</p>
            </div>
            <div className="plans-card">
                <h2>Fanático</h2>
                <p>R$ 86,40</p>
                <p>40 interações/dia + quiz com prêmios exclusivos e prioridadeno suporte</p>
                <p>A experiência definitiva para os mais apaixonados</p>
            </div>
        </div>
    </div>

);

}

export default Plans;