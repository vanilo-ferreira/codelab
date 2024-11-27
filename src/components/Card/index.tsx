import "./style.css";
import heart from "../../assets/heart.svg";

export const Card = () => {
  return (
    <div className="card">
      <div className="cardTopo">
        <p className="cardDate">21 de jul, 2024</p>
        <img className="cardIcon" src={heart} alt="Heart" />
      </div>
      <h2 className="cardTitle">
        Por que os hiperlinks são azuis em sua maioria?
      </h2>
      <p className="cardText">
        Quem navega na internet, certamente já percebeu que ela conta com
        diversos recursos para tornar a nossa vida mais fácil. Entre essas
        opções podemos mencionar os hiperlinks – uma palavra ou termo clicável
        que direciona o leitor.
      </p>
    </div>
  );
};
