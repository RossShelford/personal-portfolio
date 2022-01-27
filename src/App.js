import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import HeroText from './components/HeroText/HeroText';
import { BrowserRouter as Router, Routes as Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="w-auto h-auto flex-col-reverse dark:bg-charcoal transition-all dark:transition-all">
        <NavBar />
        <Switch>
          <Route path="/" exact>
            
          </Route>
        </Switch>
        <HeroText text="HELLO WORLD"/>
      </div>
    </Router>
  );
}

export default App;
