import React from "react";
import "./card.style.css";
import Card from "../card/card.component";
import { Monster } from "../../App";

interface CardListProps {
  monsters: Monster[];
}

const CardList = ({ monsters }: CardListProps) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return <Card monster={monster} />;
      })}
    </div>
  );
};

export default CardList;
