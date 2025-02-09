import "./App.css";
import { Card } from "./components/Card";
import { Top } from "./components/Top";

import { dataCard } from "./data/dataCard";

function App() {
  return (
    <>
      <header>
        <Top />
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