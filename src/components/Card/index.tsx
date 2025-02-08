import "./style.css";
import heart from "../../assets/heart.svg";
import litheart from "../../assets/litheart.svg";

import { useState } from "react";

type Props = {
  title: string;
  description: string;
  date: string;
};

export const Card = ({ title, description, date }: Props) => {
  const [liked, setLiked] = useState(false);

  function like() {
    setLiked(!liked)
  }

  return (
    <div className="card">
      <div className="cardTopo">
        <p className="cardDate">{date}</p>
        <img
          className="cardIcon"
          onClick={() => like()}
          src={liked === false ? heart : litheart}
          alt="Heart"
        />
      </div>
      <h2 className="cardTitle">{title}</h2>
      <p className="cardText">{description}</p>
    </div>
  );
};