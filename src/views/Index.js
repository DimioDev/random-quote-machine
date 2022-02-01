import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/index.css';

function Index() {
  let randomQuote = {};
  const [quotes, setQuotes] = useState([{ quote: '', author: '' }]);
  const [nextQuote, setNextQuote] = useState();

  useEffect(() => {
    axios
      .get(
        'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
      )
      .then((res) => {
        setQuotes(res.data.quotes);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
  }

  randomQuote = getRandomQuote();

  const handleClick = () => {
    setNextQuote(randomQuote);
    randomQuote = nextQuote;
  };

  return (
    <>
      <div className="card">
        <h2>Random Quote Generator</h2>
        <p>by Dimitar Odrinski</p>
        <div id="wrapper">
          <div id="quote-box">
            <div className="quote-text">
              <i className="fa fa-quote-left"> </i>
              <span id="text" />
              {randomQuote.quote}
            </div>
            <div className="quote-author">
              - <span id="author" /> {randomQuote.author}
            </div>
            <div className="buttons">
              <a
                type="button"
                role="button"
                href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fparse.com"
                target="_blank"
                rel="noopener noreferrer"
                className="button"
                id="tweet-quote"
                title="Tweet this quote!"
              >
                <i className="fa fa-twitter" />
              </a>
              <button className="button" id="new-quote" onClick={handleClick}>
                New quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
