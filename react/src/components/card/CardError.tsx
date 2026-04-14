import "./Card.css";

type CardErrorProps = {
  message: string;
  onRetry: () => void;
};

export const CardError = ({ message, onRetry }: CardErrorProps) => {
  return (
    <div className="card">
      <p className="card__quote" style={{ color: "red" }}>
        {message}
      </p>

      <button className="card__btn" onClick={onRetry}>
        Try again
      </button>
    </div>
  );
};