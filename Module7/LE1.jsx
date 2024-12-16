import React, { useState, useEffect } from "react";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]); // Default to first currency
  const [price, setPrice] = useState(null); // State to store Bitcoin price
  const [loading, setLoading] = useState(true); // Loading state for API call

  // useEffect to fetch data when 'currency' changes
  useEffect(() => {
    let isMounted = true; // To prevent state updates if component unmounts

    const fetchBitcoinPrice = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`
        );
        const data = await response.json();
        if (isMounted) {
          setPrice(data.bitcoin[currency.toLowerCase()]);
        }
      } catch (error) {
        console.error("Error fetching Bitcoin price:", error);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchBitcoinPrice();

    // Cleanup function
    return () => {
      isMounted = false;
    };
  }, [currency]); // Runs whenever 'currency' changes

  // Map currencies into options
  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  return (
    <div className="BitcoinRates componentBox" style={{ textAlign: "center" }}>
      <h3>Bitcoin Exchange Rate</h3>
      <label>
        Choose currency:
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>
      {loading ? (
        <p>Loading...</p>
      ) : price !== null ? (
        <p>
          Current Bitcoin price in {currency}:{" "}
          <strong>
            {price} {currency}
          </strong>
        </p>
      ) : (
        <p>Error fetching price</p>
      )}
    </div>
  );
}

export default BitcoinRates;
