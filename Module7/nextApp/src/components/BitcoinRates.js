"use client";

import { useState } from "react";
import { useEmoji } from "../context/EmojiContext";
import useBitcoinRate from "../hooks/useBitcoinRate";

const BitcoinRates = () => {
  const [currency, setCurrency] = useState("USD");
  const { rate, loading, error } = useBitcoinRate(currency);
  const { isHappy } = useEmoji(); // Access Emoji

  return (
    <div className="p-4 bg-gray-100 rounded-xl">
      <h2 className="text-xl font-bold mb-2">
        Bitcoin Exchange Rate {isHappy ? "😊" : "🥰"}
      </h2>
      <div className="mb-4">
        <label htmlFor="currency" className="block mb-1">
          Select Currency:
        </label>
        <select
          id="currency"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
        </select>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && (
        <p className="text-lg">
          1 BTC = {rate} {currency}
        </p>
      )}
    </div>
  );
};

export default BitcoinRates;
