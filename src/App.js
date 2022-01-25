import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';


function App() {
  return (
    <div className="w-screen h-screen flex-col-reverse">
      <NavBar />
      <body className="w-screen h-screen flex justify-center items-center dark:bg-charcoal transition-all dark:transition-all">Hello World</body>
    </div>
  );
}

export default App;
