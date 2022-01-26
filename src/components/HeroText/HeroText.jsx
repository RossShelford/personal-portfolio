import React from 'react';

function HeroText(props) {
  return (
    <div className="relative h-screen">


<div className='flex items-center justify-center'>
</div>

      <div className="text-[10vw] font-poppins font-bold z-10">
        <span className="
          select-none
          flex
          h-screen
          items-center 
          justify-center
          bg-clip-text 
          text-transparent 
          bg-gradient-to-r 
        from-mint 
        to-lavender 
        via-salmon
          animate-gradient-x
          dark:z-50
          dark:invisible">
          {props.text}
        </span>
      </div>

      <div className="text-[10vw] inset-0 absolute font-poppins font-bold z-0">
        <span className="
          select-none
          blur-sm
          flex
          h-screen
          items-center 
          justify-center
          bg-clip-text 
          text-transparent 
          bg-gradient-to-r 
        from-green-500
        to-fuchsia-500
        via-orange-400
          animate-gradient-x
          invisible
          dark:visible">
          {props.text}
        </span>
      </div>

      <div className="text-[10vw] inset-0 absolute font-poppins font-bold z-0">
        <span className="
          select-none
          flex
          h-screen
          items-center 
          justify-center
          text-charcoal
          invisible
          dark:visible">
          {props.text}
        </span>
      </div>

    </div>
  );
}

export default HeroText;