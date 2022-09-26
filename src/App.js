import React from 'react';
import './App.css';

function Main() {
  return(
    <div className="main-content">
      <div className="flag">
        <div className="yellow"></div>
        <div className="blue"></div>
      </div>
      <div className="about">
        <h2 className="about-position">Front-End Developer</h2>
        <h1 className="about-name">Olha Kucheruk</h1>
        <p className="about-text">
            Graduate front-end developer focusing on react and javascript development skills. I am expanding my javascript
            and react knowledge and eager to work and make a profit for a company. My dream is to achieve a senior level in 3-5 years
            and to get a C2 English level.
        </p>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
