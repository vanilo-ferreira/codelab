import "./App.css";

import codelab from "./assets/codelab.svg";
import { Card } from "./components/Card";

import { dataCard } from "./data/dataCard";

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
        {dataCard.map((data) => (
          <Card
            title={data.title}
            description={data.description}
            date={data.date}
          />
        ))}
      </main>
    </>
  );
}

export default App;