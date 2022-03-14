import React from 'react'
import { bike, chess, f1, fishing, games, golf, snowboarding, music, pingpong } from "../../assets/assetsIndex.js";

function Hobbies() {
  return (
    
    <div className='pb-32'>
      <p className="
      mt-20 
      mx-10 sm:mx-20
      max-w-2xl
      text-2xl font-poppins 
      dark:text-cream 
      whitespace-pre-line
      text-center
    selection:bg-salmon selection:text-charcoal
      sm:text-left
      sm:text-3xl">

      My Hobbies include:
      </p> 
      
      <div className="flex flex-wrap items-center mx-16 pt-6 justify-center sm:justify-start selection:bg-salmon selection:text-charcoal">
          <img className="h-16 sm:m-5 m-2" src={snowboarding} alt="Snowboarding" />
          <img className="h-16 sm:m-5 m-2" src={chess} alt="Chess" />
          <img className="h-16 sm:m-5 m-2" src={f1} alt="F1" />
          <img className="h-16 sm:m-5 m-2" src={fishing} alt="Fishing" />
          <img className="h-16 sm:m-5 m-2" src={games} alt="Games" />
          <img className="h-16 sm:m-5 m-2" src={golf} alt="Golf" />
          <img className="h-16 sm:m-5 m-2" src={bike} alt="Bike" />
          <img className="h-16 sm:m-5 m-2" src={music} alt="Music" />
          <img className="h-16 sm:m-5 m-2" src={pingpong} alt="Ping-Pong" />
      </div>
    </div>
  )
}

export default Hobbies