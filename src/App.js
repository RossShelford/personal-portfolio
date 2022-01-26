import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import HeroText from './components/HeroText/HeroText';


function App() {
  return (
    <div className="w-auto h-auto flex-col-reverse dark:bg-charcoal transition-all dark:transition-all">
      <NavBar />
      <HeroText text="HELLO WORLD"/>
    </div>
  );
}

export default App;
