import React from 'react';
import './App.css';
import Navigation from './Components/Navigation';
import Hero from './Components/Hero';
import SectionTwoColumn from './Components/SectionTwoColumn';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <SectionTwoColumn />
    </div>
  );
}

export default App;
