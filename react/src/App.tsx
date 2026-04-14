import "./App.css";
import { Card, CardLoading, CardError } from "./components/card";
import { useQuote } from "./hooks/useQuote";

function App() {
  const { quote, loading, error, refetch } = useQuote();

  return (
    <section id="center">
      {loading && <CardLoading />}

      {error && <CardError message={error} onRetry={refetch} />}

      {quote && !loading && !error && (
        <Card
          id={quote.id}
          quote={quote.quote}
          handleClick={refetch}
          disable={loading}
        />
      )}
    </section>
  );
}

export default App;
