import React from 'react';
import logo from './logo.svg';
import MacTopBarFrame from '../../GeneralComponents/MacTopBarFrame';
import ImagineearWebVid from './Imagineear-Website.mp4'



function ImagineearContainer() {
  return (
<div className='flex flex-col'>
    <div className="bg-[#650092] flex justify-center items-center h-80">
      <img src={logo} alt="Imagineear" className="h-32 px-20 select-none"/>
    </div>
    <div className='selection:bg-salmon selection:text-flint w-4/6'>
      <h3 className='font-poppins text-3xl px-20 pb-3 pt-10 dark:text-cream'>Brand identity to reflect the evolution and rapid growth of the business</h3>
      <p className='font-poppins text-sm px-20 leading-relaxed dark:text-cream'>"In order to move away from a simple rounded look, a new stylish font was introduced to harden up the text and reflect the challenges of the day.  The colour palette was extended to include teal, yellow, and magenta options, further asserting the competitive edge of what has become widely known as ‘the Imagineear purple’, as always accompanied by a bolder green – a far cry from the muted green over a decade earlier.
      The work was completed by capitalising the ‘I’ of Imagineear, signifying solid growth and a reaching of maturity, and now, armed with this capital ‘I’, Imagineear is ready to take on, and take our place in, the post-pandemic world."</p>
    </div>
    <div className='p-20'>
      <MacTopBarFrame text={"www.imagineear.com"} />
      <video src={ImagineearWebVid} loop="loop" className='shadow-xl w-full' autoplay="autoplay"></video>
    </div>
    <div className='p-20'>
      
    </div>
      
</div>
  )
}

export default ImagineearContainer;
