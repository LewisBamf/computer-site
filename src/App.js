import './App.css';
import React from 'react';
import HeroTitle from './components/hero-title.js';
import Navbar from './components/Navbar.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className='item'> 
          <HeroTitle />
        </div>
      </div>
    </div>
  );
}

export default App;
