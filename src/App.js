import React from 'react';
import './index.css';
import NavBar from './components/NavBar/NavBar';
import HeroText from './components/HeroText/HeroText';
import AboutPageContainer from './components/AboutPage/AboutPageContainer';
import WorkPageContainer from './components/WorkPage/WorkPageContainer';
import ImagineearContainer from './components/WorkPage/Imagineear/ImagineearContainer';
import PixtecContainer from './components/WorkPage/Pixtec/PixtecContainer';
import AccordionContainer from './components/WorkPage/Accordion/AccordionContainer';
import { BrowserRouter as Router, Routes as Switch, Route} from 'react-router-dom';
import ContactContainer from './components/ContactPage/ContactContainer';



function App() {
  return (
      <div className="w-screen h-auto">
        <Router>
          <NavBar />
          <Switch>
            <Route path="/" element={<HeroText text="HELLO WORLD"/>}/>
            <Route path="/about" element={<AboutPageContainer />}/>
            <Route path="/contact" element={<ContactContainer />}/>
              <Route path="/work" element={<WorkPageContainer />}/>
                <Route path="work/imagineear" element={<ImagineearContainer/>}/>
                <Route path="work/pixtec" element={<PixtecContainer/>}/>
                <Route path="work/accordion" element={<AccordionContainer/>}/>
          </Switch>
        </Router>
      </div>
    
  );
}

export default App;
