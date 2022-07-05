import React from "react";
import { cardsData } from "./../../../utils/Data";

import Card from "../Card/Card";

const Cards = () => {
  return (
    <div className="flex flex-wrap items-center justify-evenly gap-[10px]">
      {cardsData.map((card, id) => {
        return (
          <div className="w-[15rem]" key={id}>
            <Card
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={card.series}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
