import './App.css'

import codelab from "./assets/codelab.svg";
import litheart from "./assets/litheart.svg";
import heart from "./assets/heart.svg";
import { Card } from './components/Card';

function App() {
  return (
    <>
      <header className="topo">
        <img className="logo" src={codelab} alt="Codelab logo" />
        <input
          className="search"
          type="text"
          id="search"
          name="search"
          placeholder="Pesquisar no blog"
        />
      </header>
      <main>
        <div className="card">
          <div className="cardTopo">
            <p className="cardDate">17 de ago, 2024</p>
            <img className="cardIcon" src={litheart} alt="Lit Heart" />
          </div>
          <h2 className="cardTitle">O que é linguagem de programação? Conheça as principais</h2>
          <p className="cardText">
            Uma das mais populares vertentes da tecnologia da informação, a
            área de programação segue tendo muita demanda de trabalho
            justamente pela velocidade com que dispositivos tecnológicos vêm
            avançando.
          </p>
        </div>

        <div className="card">
          <div className="cardTopo">
            <p className="cardDate">12 de jul, 2024</p>
            <img className="cardIcon" src={heart} alt="Heart" />
          </div>
          <h2 className="cardTitle">GitHub agora permite fazer login sem precisar de senha</h2>
          <p className="cardText">
            O GitHub anunciou nesta quarta-feira (12) o acesso a partir das passkeys, método de autenticação sem senhas. A novidade está disponível em uma versão beta pública e pode substituir a autenticação em dois fatores.
          </p>
        </div>

        <Card />

        {/* <div className="card">
          <div className="cardTopo">
            <p className="cardDate">21 de jul, 2024</p>
            <img className="cardIcon" src={heart} alt="Heart" />
          </div>
          <h2 className="cardTitle">Por que os hiperlinks são azuis em sua maioria?</h2>
          <p className="cardText">
            Quem navega na internet, certamente já percebeu que ela conta com diversos recursos para tornar a nossa vida mais fácil. Entre essas opções podemos mencionar os hiperlinks – uma palavra ou termo clicável que direciona o leitor.
          </p>
        </div> */}
      </main>
    </>
  );
}

export default App;
