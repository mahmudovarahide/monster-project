import { Monster } from "../../App";

interface CardProps {
  monster: Monster;
}

const Card = ({ monster }: CardProps) => {
  const { id, name, email } = monster;
  return (
    <div className="card-container" key={id}>
      <img src={`https://robohash.org/${id}?set=set2&size180x180`} alt="" />
      <h1>{name}</h1>
      <h2>{email}</h2>
    </div>
  );
};

export default Card;
