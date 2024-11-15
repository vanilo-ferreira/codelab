import codelab from "./assets/codelab.svg";
import litheart from "./assets/litheart.svg";
import heart from "./assets/heart.svg";

function App() {
  return (
    <>
      <div>
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
          <div>
            <div>
              <p>17 de ago, 2024</p>
              <img src={litheart} alt="Lit Heart" />
            </div>
            <div>
              <h2>O que é linguagem de programação? Conheça as principais</h2>
              <p>
                Uma das mais populares vertentes da tecnologia da informação, a
                área de programação segue tendo muita demanda de trabalho
                justamente pela velocidade com que dispositivos tecnológicos vêm
                avançando.
              </p>
            </div>
          </div>

          <div>
            <div>
              <p>17 de ago, 2024</p>
              <img src={heart} alt="Heart" />
            </div>
            <div>
              <h2>O que é linguagem de programação? Conheça as principais</h2>
              <p>
                Uma das mais populares vertentes da tecnologia da informação, a
                área de programação segue tendo muita demanda de trabalho
                justamente pela velocidade com que dispositivos tecnológicos vêm
                avançando.
              </p>
            </div>
          </div>

          <div>
            <div>
              <p>17 de ago, 2024</p>
              <img src={litheart} alt="Lit Heart" />
            </div>
            <div>
              <h2>O que é linguagem de programação? Conheça as principais</h2>
              <p>
                Uma das mais populares vertentes da tecnologia da informação, a
                área de programação segue tendo muita demanda de trabalho
                justamente pela velocidade com que dispositivos tecnológicos vêm
                avançando.
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
