import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [amount, setAmount] = useState(100);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [rates, setRates] = useState({});
  const [result, setResult] = useState(null);

  useEffect(() => {
    async function fetchRates() {
      const url =
        "https://v6.exchangerate-api.com/v6/c5f1e7e7562ec9ce568e34fa/latest/USD";
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        const data = await response.json();
        setRates(data.conversion_rates);
      } catch (error) {
        console.error("Error fetching exchange rates:", error);
      }
    }
    fetchRates();
  }, []);

  function handleConversion() {
    if (rates[fromCurrency] && rates[toCurrency]) {
      const convertedAmount =
        (amount / rates[fromCurrency]) * rates[toCurrency];
      setResult(
        `${amount} ${fromCurrency} = ${convertedAmount.toFixed(
          2
        )} ${toCurrency}`
      );
    } else {
      setResult("Código de moneda no válido.");
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Conversor de Monedas</h1>
        <label>
          Cantidad:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
        <label>
          De:
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
          >
            {Object.keys(rates).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </label>
        <label>
          A:
          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
          >
            {Object.keys(rates).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </label>
        <button onClick={handleConversion}>Convertir</button>
        <p>{result}</p>
      </header>
    </div>
  );
}

export default App;
