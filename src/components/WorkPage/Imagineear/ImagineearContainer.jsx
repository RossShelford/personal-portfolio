import React from 'react';
import logo from './assets/logo.svg';
import MacTopBarFrame from '../../GeneralComponents/MacTopBarFrame';
import ImagineearWebVid from './assets/Imagineear-Website.webm';
import logo1 from './assets/AltLogos/Logo1.png';
import logo2 from './assets/AltLogos/Logo2.png';
import logo3 from './assets/AltLogos/Logo3.png';
import logo4 from './assets/AltLogos/Logo4.png';



function ImagineearContainer() {
  return (
  <>
    <div className="bg-[#650092] flex justify-center items-center h-80">
      <img src={logo} alt="Imagineear" className="h-32 px-20 select-none"/>
    </div>

    <div className='flex flex-col'>

      <div className='selection:bg-salmon selection:text-flint max-w-screen-xl'>
        <h3 className='font-poppins text-3xl px-32 pb-3 pt-20 dark:text-cream'>Brand identity to reflect the evolution and rapid growth of the business</h3>
        <p className='font-poppins text-sm px-32 leading-relaxed dark:text-cream'>"In order to move away from a simple rounded look, a new stylish font was introduced to harden up the text and reflect the challenges of the day.  The colour palette was extended to include teal, yellow, and magenta options, further asserting the competitive edge of what has become widely known as ‘the Imagineear purple’, as always accompanied by a bolder green – a far cry from the muted green over a decade earlier.
        The work was completed by capitalising the ‘I’ of Imagineear, signifying solid growth and a reaching of maturity, and now, armed with this capital ‘I’, Imagineear is ready to take on, and take our place in, the post-pandemic world."</p>
      </div>
      <div className='px-32 pt-20 max-w-screen-2xl'>
        <MacTopBarFrame text={"www.imagineear.com"} />
        <video src={ImagineearWebVid} loop="loop" className='shadow-xl ' autoplay="autoplay"></video>
      </div>
      <div className='p-32 pt-20 max-w-screen-2xl flex flex-col items-center select-none'>
        <span className='p-10 font-poppins text-gray-400'>Alternative Logos</span>
        <div className='grid grid-flow-col gap-10'>
          <img src={logo1} className='w-32'/>
          <img src={logo2} className='w-32'/>
          <img src={logo3} className='w-32'/>
          <img src={logo4} className='w-32'/>
        </div> 
      </div>
      
    </div>
  </>

  )
}

export default ImagineearContainer;
