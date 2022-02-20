import React from 'react';
import './index.css';
import NavBar from './components/NavBar/NavBar';
import AboutPageContainer from './components/AboutPage/AboutPageContainer';
import WorkPageContainer from './components/WorkPage/WorkPageContainer';
import ImagineearContainer from './components/WorkPage/Imagineear/ImagineearContainer';
import NFTContainer from './components/WorkPage/NFT/NFTContainer';
import AccordionContainer from './components/WorkPage/Accordion/AccordionContainer';
import { BrowserRouter as Router, Routes as Switch, Route} from 'react-router-dom';
import ContactContainer from './components/ContactPage/ContactContainer';
import HomeContainer from './components/HomePage/HomeContainer';



function App() {
  return (
      <div className="w-screen h-auto">
        <Router>
          <NavBar />
          <Switch>
            <Route path="/" element={<HomeContainer />}/>
            <Route path="/about" element={<AboutPageContainer />}/>
            <Route path="/contact" element={<ContactContainer />}/>
              <Route path="/work" element={<WorkPageContainer />}/>
                <Route path="work/imagineear" element={<ImagineearContainer/>}/>
                <Route path="work/NFT" element={<NFTContainer/>}/>
                <Route path="work/accordion" element={<AccordionContainer/>}/>
          </Switch>
        </Router>
      </div>
    
  );
}

export default App;
