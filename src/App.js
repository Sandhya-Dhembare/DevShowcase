import React from 'react';
import NavBar from './navbar';
import './App.css';
const App = () => {
  return (
    <div>
      <NavBar />
      <section id="home">
        <h1>Home</h1>
        <p>Welcome to my portfolio.</p>
      </section>
      <section id="about">
        <h1>About</h1>
        <p>Information about me.</p>
      </section>
      <section id="portfolio">
        <h1>Portfolio</h1>
        <p>My work samples.</p>
      </section>
      <section id="contact">
        <h1>Contact</h1>
        <p>How to reach me.</p>
      </section>
    </div>
  );
};

export default App;

