import { useEffect, useState, useRef, useCallback } from "react";
import type { Quote } from "../types/quote";

const formatQuote = (data: any): Quote => ({
  id: data.slip.id,
  quote: data.slip.advice,
});

export const useQuote = () => {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const controllerRef = useRef<AbortController | null>(null);

  const fetchQuote = useCallback(async () => {
    controllerRef.current?.abort();

    const controller = new AbortController();
    controllerRef.current = controller;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch("https://api.adviceslip.com/advice", {
        signal: controller.signal,
      });

      if (!res.ok) {
        throw new Error("Erro na resposta HTTP");
      }

      const json = await res.json();
      setQuote(formatQuote(json));
    } catch (err: any) {
      if (err.name === "AbortError") return;

      setError(err instanceof Error ? err.message : "Erro desconhecido");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchQuote();
  }, []);

  return {
    quote,
    loading,
    error,
    refetch: fetchQuote,
  };
};
