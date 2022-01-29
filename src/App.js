import React from 'react';
import './index.css';
import NavBar from './components/NavBar/NavBar';
import HeroText from './components/HeroText/HeroText';
import WorkPage from './components/WorkPage/WorkPage';
import { BrowserRouter as Router, Routes as Switch, Route} from 'react-router-dom';


function App() {
  return (
      <div className="w-screen h-auto">
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" element={<HeroText text="HELLO WORLD"/>}/>
            <Route path="work" element={<WorkPage/>}/>
          </Switch>
        </Router>
      </div>
    
  );
}

export default App;
