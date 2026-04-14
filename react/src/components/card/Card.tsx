import "./Card.css";
import dice from "/dice.svg";
import icon from "/icon.svg";
import type { Quote } from "../../types/quote";

type CardProps = Quote & {
  handleClick: () => void;
  disable: boolean;
};

export const Card = (props: CardProps) => {
  const { id, quote, handleClick, disable } = props;

  return (
    <div className="card">
      <p className="card__id">advice #{id}</p>
      <p className="card__quote">{quote}</p>

      <CardSeparator />

      <button className="card__btn" onClick={handleClick} disabled={disable}>
        <img src={dice} alt="dice" />
      </button>
    </div>
  );
};

const CardSeparator = () => {
  return (
    <div className="card__separator">
      <img src={icon} alt="icon" />
    </div>
  );
};
