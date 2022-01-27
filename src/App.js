import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import HeroText from './components/HeroText/HeroText';
import WorkPage from './components/WorkPage/WorkPage';
import { BrowserRouter as Router, Routes as Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="w-auto min-h-screen flex-col-reverse dark:bg-charcoal transition-all dark:transition-all">
        <NavBar />
        <Switch>
          <Route exact path="/" element={<HeroText text="HELLO WORLD"/>}/>
          <Route path="work" element={<WorkPage/>}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
