"use client";

import { useEffect, useState } from "react";

const useBitcoinRate = (currency) => {
  const [rate, setRate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBitcoinRate = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://api.coindesk.com/v1/bpi/currentprice/${currency}.json`
        );
        const data = await response.json();
        setRate(data.bpi[currency].rate);
      } catch (err) {
        console.error("Error fetching Bitcoin rate:", err);
        setError("Failed to fetch rate");
      }
      setLoading(false);
    };

    fetchBitcoinRate();
  }, [currency]);

  return { rate, loading, error };
};

export default useBitcoinRate;
