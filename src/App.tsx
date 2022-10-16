import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data';

function App() {
  const cards = data.map((event) => {
    return <Card 
        title={event.title}
        description={event.description}
        price={event.price}
        img={"/images/" + event.coverImg}
        rating={event.stats.rating}
        reviewCount={event.stats.reviewCount}
        location={event.location}
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
