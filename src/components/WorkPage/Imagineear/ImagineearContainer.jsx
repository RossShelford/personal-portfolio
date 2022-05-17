import React from 'react';
import logo from './assets/logo.svg';
import MacTopBarFrame from '../../GeneralComponents/MacTopBarFrame';
import ImagineearWebVid from './assets/Imagineear-Website.mp4';
import logo1 from './assets/AltLogos/Logo1.png';
import logo2 from './assets/AltLogos/Logo2.png';
import logo3 from './assets/AltLogos/Logo3.png';
import logo4 from './assets/AltLogos/Logo4.png';
import Drawings1 from './assets/Drawings/Drawings1.png';
import Drawings2 from './assets/Drawings/Drawings2.png';
import Drawings3 from './assets/Drawings/Drawings3.png';
import Drawings4 from './assets/Drawings/Drawings4.png';
import Footer from '../../GeneralComponents/Footer.jsx'



function ImagineearContainer() {
  return (
  <>

    <div className="bg-[#650092] flex justify-center items-center h-80">
      <img src={logo} alt="Imagineear" className="h-32 px-20 select-none"/>
    </div>
    
    <div className='flex flex-col xl:justify-center xl:items-center xl:text-center'>
      <div className='selection:bg-salmon selection:text-flint max-w-screen-lg'>
        <h3 className='font-poppins text-3xl md:px-32 px-20 pb-3 pt-20 dark:text-cream'>Brand identity to reflect the evolution and rapid growth of the business</h3>
        <p className='font-poppins text-sm md:px-32 px-20 leading-relaxed dark:text-cream'>"In order to move away from a simple rounded look, a new stylish font was introduced to harden up the text and reflect the challenges of the day.  The colour palette was extended to include teal, yellow, and magenta options, further asserting the competitive edge of what has become widely known as ‘the Imagineear purple’, as always accompanied by a bolder green – a far cry from the muted green over a decade earlier.
        The work was completed by capitalising the ‘I’ of Imagineear, signifying solid growth and a reaching of maturity, and now, armed with this capital ‘I’, Imagineear is ready to take on the post-pandemic world."</p>
      </div>
      <div className='md:px-32 px-10 sm:pt-20 pt-16 max-w-screen-2xl'>
        <MacTopBarFrame text={"www.imagineear.com"} />
        <video playsInline src={ImagineearWebVid} loop="loop" className='shadow-xl' autoplay="autoplay"></video>
      </div>
      <div className='p-20 sm:pt-20 pt-16 max-w-screen-2xl flex flex-col items-center select-none'>
        <span className='p-10 font-poppins dark:text-zinc-500 text-zinc-400'>Alternative Logos</span>
        <div className='grid sm:grid-cols-4 grid-cols-2 sm:gap-16 gap-20'>
          <img src={logo1} className='w-32' alt="Logo Concept 1"/>
          <img src={logo2} className='w-32' alt="Logo Concept 2"/>
          <img src={logo3} className='w-32' alt="Logo Concept 3"/>
          <img src={logo4} className='w-32' alt="Logo Concept 4"/>
        </div> 
      </div>
      <div className='p-10 sm:pt-20 pt-16 max-w-screen-2xl xl:rounded-3xl flex flex-col items-center select-none bg-zinc-50 dark:bg-flint'>
          <div className='grid sm:grid-cols-2 grid-cols-1 sm:gap-10 gap-6'>
            <img src={Drawings1} className='w-96' alt="Drawings Concepts 1"/>
            <img src={Drawings2} className='w-96' alt="Drawings Concepts 2"/>
            <img src={Drawings3} className='w-96' alt="Drawings Concepts 3"/>
            <img src={Drawings4} className='w-96' alt="Drawings Concepts 4"/>
          </div> 
      </div>
    </div>
    <Footer />
  </>
  )
}

export default ImagineearContainer;
