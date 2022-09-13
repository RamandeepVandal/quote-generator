import React, { useState } from 'react';
import './App.css';

function App() {

  // quote
  let [quote, setQuote] = useState("Important principles may, and must, be inflexible.");

  // API KEY
  const API_KEY = process.env.REACT_APP_API_KEY;

  // fetch api data
  const generateQuote = () => {

    // random quote 
    let rand = Math.floor(Math.random() * 1600) + 1;

    fetch(API_KEY)
      .then((response) => { return response.json(); })
      .then((data) => { setQuote(quote = data[rand].text); });
  }

  return (
    <div className="App">
      <div className="wrapper">
        <h3>{quote}</h3>
        <button onClick={generateQuote}>Need Inspiration</button>
      </div>
    </div>
  );
}

export default App;
