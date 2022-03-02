import nightModeIcon from './nightModeIcon.svg';
import dayModeIcon from './dayModeIcon.svg';
import useDarkMode from '../../hooks/useDarkMode';
import { Link } from 'react-router-dom';
import React, { useState } from "react";

const ThemeIcon = () => {
  
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);

  return (
    <div onClick={handleMode}>
      {darkTheme ? (
        <img src={dayModeIcon} alt="Day Mode Theme" className="sm:h-6 h-16 cursor-pointer transition-all dark:transition-all"/>
      ) : (
        <img src={nightModeIcon} alt="Night Mode Theme" className="sm:h-6 h-16 cursor-pointer transition-all dark:transition-all"/>
      )}
    </div>
  );
};


function NavBar() {

  const [mobileActive, setMobile] = useState(true);
  const toggleMobile = () => setMobile(!mobileActive);

  return (
    <nav>
      <div className={`bg-cream w-full flex h-20 items-center drop-shadow-sm select-none transition-all dark:drop-shadow-md dark:transition-all dark:bg-flint`}>
      
    {/* Logo */}
    {mobileActive ?  (
    <Link to="/" className='mr-auto'>
      <svg id="nameLogo" className="fill-current h-10 justify-start ml-6 cursor-pointer animate-spin-slow transition-all dark:text-cream" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 250" >
        <path d="M47.59 28.25c8.17-6.88 16.29-5.71 21.31.27 3.59 4.27 4.26 9.91.89 15.32l17.54 6.5-11.21 9.42-15.92-6.53-.05.04 9.81 11.66-10.2 8.58-27.33-32.52 15.16-12.74zm6.26 9.31-4.04 3.4 4.63 5.51 4.04-3.4c1.93-1.62 2.24-3.3.62-5.23-1.38-1.65-3.32-1.9-5.25-.28zM109.35 45.52c-11.84 2.3-23.23-4.72-25.67-17.26C81.24 15.72 89.19 5 101.02 2.7c11.9-2.31 23.1 4.68 25.54 17.23 2.44 12.54-5.43 23.3-17.21 25.59zm-2.37-12.2c5.24-1.02 7.41-5.29 6.33-10.83-1.1-5.65-4.69-8.75-9.94-7.73-5.36 1.04-7.48 5.24-6.38 10.9 1.08 5.54 4.63 8.7 9.99 7.66zM149.03 47.82c-9.29-2.85-15.25-9.39-13.02-18.69l13.53 4.16c-.69 3.05.76 4.06 2.02 4.45 1.26.39 2.64.18 3.08-1.25 1.63-5.52-18.14-9.4-13.64-23.21 2.5-8.14 10.69-10.27 19.35-7.61 9.81 3.01 14.67 9.66 12.42 18.19l-13.71-4.21c.64-2.5-.45-3.65-1.82-4.07-1.03-.32-2.05.12-2.47 1.5-1.57 5.1 17.56 10.04 13.72 22.54-2.29 7.46-9.66 11.22-19.46 8.2zM179.03 65.34c-7.21-6.52-9.84-14.97-3.88-22.45l10.5 9.5c-1.92 2.47-1.03 4-.05 4.89.98.89 2.32 1.29 3.32.17 3.82-4.31-12.45-16.2-2.53-26.81 5.72-6.32 14.03-4.78 20.75 1.3 7.61 6.88 9.2 14.96 3.55 21.74l-10.63-9.62c1.64-1.99 1.14-3.5.08-4.46-.8-.73-1.91-.75-2.87.31-3.58 3.96 11.66 16.54 2.88 26.24-5.24 5.79-13.51 6.07-21.12-.81zM204.73 122.8c-.27-9.72 4.02-17.46 13.54-18.32l.39 14.15c-3.11.33-3.6 2.02-3.57 3.34.04 1.32.67 2.56 2.17 2.52 5.76-.22 3.11-20.19 17.63-20.35 8.52-.23 13.15 6.84 13.4 15.9.28 10.26-4.45 16.99-13.26 17.59l-.39-14.33c2.58-.19 3.32-1.59 3.28-3.03-.03-1.08-.77-1.9-2.21-1.86-5.34.15-3.9 19.85-16.97 20.21-7.81.22-13.73-5.56-14.01-15.82zM209.19 172.26l5.54-11.38-14.89-7.25 5.83-11.98 38.19 18.6-5.83 11.97-13.75-6.7-5.54 11.38 13.75 6.7-5.83 11.97-38.19-18.6L194.3 165l14.89 7.26zM179.55 223.28l12.07-8.91-3.1-4.2-10.62 7.84-5.95-8.06 10.62-7.84-3.56-4.83-12.07 8.91-6.31-8.54 22.79-16.82 25.22 34.18-22.79 16.82-6.3-8.55zM152.08 244.04l-7.5-31.52-12.49 2.97-2.33-9.81 25.45-6.06 9.83 41.33-12.96 3.09zM117.57 247.74l-29.56-5.14 1.81-10.4 16.43 2.86 1.01-5.79-11.82-2.05 1.71-9.87 11.82 2.05 2.74-15.78 13.12 2.28-7.26 41.84zM80.51 190.95c10.06 6.65 13.27 19.63 6.22 30.29s-20.22 12.74-30.28 6.09c-10.11-6.68-13.2-19.52-6.16-30.18 7.05-10.65 20.21-12.82 30.22-6.2zm-6.85 10.36c-4.45-2.94-8.99-1.41-12.1 3.29-3.18 4.8-2.78 9.53 1.68 12.47 4.55 3.01 9.01 1.5 12.18-3.31 3.11-4.7 2.79-9.44-1.76-12.45zM17.09 183.83c-5.39-9.22-2.87-17.02 3.87-20.96 4.82-2.82 10.48-2.52 15.25 1.71l9.37-16.18 7.39 12.64-9.13 14.58.03.05 13.15-7.69 6.72 11.5-36.67 21.44-9.98-17.09zm10.24-4.59L30 183.8l6.21-3.63-2.67-4.56c-1.27-2.18-2.87-2.77-5.05-1.5-1.86 1.08-2.44 2.95-1.16 5.13zM22.6 104.61c12.12-.12 21.44 8.31 21.58 21.87l.18 17.7-42.48.42-.18-17.7c-.13-13.56 8.66-22.16 20.9-22.29zm9.71 23.19c-.06-5.88-3.4-9.75-9.58-9.69-6.18.06-9.44 3.99-9.38 9.87l.03 3.18 18.96-.19-.03-3.17z"/>
        <g><circle cx="220.26" cy="80.12" r="8.18"/></g>
        <g><circle cx="25.55" cy="80.12" r="8.18"/></g>
      </svg>
    </Link>)
    : (null)}
 
    {/* Desktop Nav */}
    <div className='hidden sm:flex'>
      <div className="justify-end">
        <Link to="/work">
          <span className="ml-6 font-poppins hover:underline hover:decoration-lavender hover:decoration-wavy cursor-pointer dark:text-cream">WORK</span>
        </Link>
        <Link to="/about">
          <span className="ml-6 font-poppins hover:underline hover:decoration-salmon hover:decoration-wavy cursor-pointer dark:text-cream">ABOUT</span>
        </Link>
        <Link to="/contact">
          <span className="ml-6 font-poppins hover:underline hover:decoration-mint hover:decoration-wavy cursor-pointer dark:text-cream">CONTACT</span>
        </Link>
      </div>
      <span className="mx-14"><ThemeIcon /></span>
    </div>

    {/* Mobile burger icon */}
    <button onClick={toggleMobile} className='flex sm:hidden cursor-pointer'>
    {mobileActive ? (<svg xmlns="http://www.w3.org/2000/svg" className="absolute h-10 w-10 top-6 right-10 stroke-flint dark:stroke-cream" viewBox="0 0 24 24" stroke="currentColor">
       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
     </svg>) : (
     <svg xmlns="http://www.w3.org/2000/svg" className="absolute h-10 w-10 top-6 right-10 stroke-flint dark:stroke-cream" stroke="currentColor" viewBox="0 0 24 24" >
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
     </svg>)}
    </button>
  </div>

    {/* Mobile Menu */}
    {mobileActive ? (null) : (
      <div className="h-screen w-screen bg-cream dark:bg-flint fixed justify-center z-50">
        <div className="flex flex-col items-center">
          <button>
            <svg id="nameLogo" className="fill-current m-20 h-52 justify-start animate-spin-slow transition-all dark:text-cream" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 250" >
               <path d="M47.59 28.25c8.17-6.88 16.29-5.71 21.31.27 3.59 4.27 4.26 9.91.89 15.32l17.54 6.5-11.21 9.42-15.92-6.53-.05.04 9.81 11.66-10.2 8.58-27.33-32.52 15.16-12.74zm6.26 9.31-4.04 3.4 4.63 5.51 4.04-3.4c1.93-1.62 2.24-3.3.62-5.23-1.38-1.65-3.32-1.9-5.25-.28zM109.35 45.52c-11.84 2.3-23.23-4.72-25.67-17.26C81.24 15.72 89.19 5 101.02 2.7c11.9-2.31 23.1 4.68 25.54 17.23 2.44 12.54-5.43 23.3-17.21 25.59zm-2.37-12.2c5.24-1.02 7.41-5.29 6.33-10.83-1.1-5.65-4.69-8.75-9.94-7.73-5.36 1.04-7.48 5.24-6.38 10.9 1.08 5.54 4.63 8.7 9.99 7.66zM149.03 47.82c-9.29-2.85-15.25-9.39-13.02-18.69l13.53 4.16c-.69 3.05.76 4.06 2.02 4.45 1.26.39 2.64.18 3.08-1.25 1.63-5.52-18.14-9.4-13.64-23.21 2.5-8.14 10.69-10.27 19.35-7.61 9.81 3.01 14.67 9.66 12.42 18.19l-13.71-4.21c.64-2.5-.45-3.65-1.82-4.07-1.03-.32-2.05.12-2.47 1.5-1.57 5.1 17.56 10.04 13.72 22.54-2.29 7.46-9.66 11.22-19.46 8.2zM179.03 65.34c-7.21-6.52-9.84-14.97-3.88-22.45l10.5 9.5c-1.92 2.47-1.03 4-.05 4.89.98.89 2.32 1.29 3.32.17 3.82-4.31-12.45-16.2-2.53-26.81 5.72-6.32 14.03-4.78 20.75 1.3 7.61 6.88 9.2 14.96 3.55 21.74l-10.63-9.62c1.64-1.99 1.14-3.5.08-4.46-.8-.73-1.91-.75-2.87.31-3.58 3.96 11.66 16.54 2.88 26.24-5.24 5.79-13.51 6.07-21.12-.81zM204.73 122.8c-.27-9.72 4.02-17.46 13.54-18.32l.39 14.15c-3.11.33-3.6 2.02-3.57 3.34.04 1.32.67 2.56 2.17 2.52 5.76-.22 3.11-20.19 17.63-20.35 8.52-.23 13.15 6.84 13.4 15.9.28 10.26-4.45 16.99-13.26 17.59l-.39-14.33c2.58-.19 3.32-1.59 3.28-3.03-.03-1.08-.77-1.9-2.21-1.86-5.34.15-3.9 19.85-16.97 20.21-7.81.22-13.73-5.56-14.01-15.82zM209.19 172.26l5.54-11.38-14.89-7.25 5.83-11.98 38.19 18.6-5.83 11.97-13.75-6.7-5.54 11.38 13.75 6.7-5.83 11.97-38.19-18.6L194.3 165l14.89 7.26zM179.55 223.28l12.07-8.91-3.1-4.2-10.62 7.84-5.95-8.06 10.62-7.84-3.56-4.83-12.07 8.91-6.31-8.54 22.79-16.82 25.22 34.18-22.79 16.82-6.3-8.55zM152.08 244.04l-7.5-31.52-12.49 2.97-2.33-9.81 25.45-6.06 9.83 41.33-12.96 3.09zM117.57 247.74l-29.56-5.14 1.81-10.4 16.43 2.86 1.01-5.79-11.82-2.05 1.71-9.87 11.82 2.05 2.74-15.78 13.12 2.28-7.26 41.84zM80.51 190.95c10.06 6.65 13.27 19.63 6.22 30.29s-20.22 12.74-30.28 6.09c-10.11-6.68-13.2-19.52-6.16-30.18 7.05-10.65 20.21-12.82 30.22-6.2zm-6.85 10.36c-4.45-2.94-8.99-1.41-12.1 3.29-3.18 4.8-2.78 9.53 1.68 12.47 4.55 3.01 9.01 1.5 12.18-3.31 3.11-4.7 2.79-9.44-1.76-12.45zM17.09 183.83c-5.39-9.22-2.87-17.02 3.87-20.96 4.82-2.82 10.48-2.52 15.25 1.71l9.37-16.18 7.39 12.64-9.13 14.58.03.05 13.15-7.69 6.72 11.5-36.67 21.44-9.98-17.09zm10.24-4.59L30 183.8l6.21-3.63-2.67-4.56c-1.27-2.18-2.87-2.77-5.05-1.5-1.86 1.08-2.44 2.95-1.16 5.13zM22.6 104.61c12.12-.12 21.44 8.31 21.58 21.87l.18 17.7-42.48.42-.18-17.7c-.13-13.56 8.66-22.16 20.9-22.29zm9.71 23.19c-.06-5.88-3.4-9.75-9.58-9.69-6.18.06-9.44 3.99-9.38 9.87l.03 3.18 18.96-.19-.03-3.17z"/>
               <g><circle cx="220.26" cy="80.12" r="8.18"/></g>
               <g><circle cx="25.55" cy="80.12" r="8.18"/></g>
            </svg>
          </button> 
          <Link to="/" className="text-6xl m-3 font-poppins font-bold cursor-pointer dark:text-cream hover:text-lavender dark:hover:text-lavender">
            <span>HOME</span>
          </Link>
          <Link to="/work" className="text-6xl m-3 font-poppins font-bold cursor-pointer dark:text-cream hover:text-salmon dark:hover:text-salmon">
            <span >WORK</span>
          </Link>
          <Link to="/about" className="text-6xl m-3 font-poppins font-bold cursor-pointer dark:text-cream hover:text-mint dark:hover:text-mint">
            <span>ABOUT</span>
          </Link>
          <Link to="/contact" className="text-6xl m-3 font-poppins font-bold cursor-pointer dark:text-cream hover:text-sunflower dark:hover:text-sunflower">
            <span >CONTACT</span>
          </Link>
          <button className="flex justify-end m-10 mx-14"><ThemeIcon /></button>
        </div>

      </div>)}
    </nav>
  );
}

export default NavBar;