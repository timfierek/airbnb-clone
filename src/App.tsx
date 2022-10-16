import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data';

function App() {
  const cards = data.map((item) => {
    return <Card 
        key={item.id}
        item={item}
      />
  });

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="cards">
        {cards}
      </div>
    </div>
  );
}


export default App;
