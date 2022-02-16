import React from 'react';

function HeroText(props) {
  return (
    <div className="mt-44 h-60 flex items-center justify-center transition-all dark:transition-all">
      
      <div className="
        text-center
        leading-[6rem] sm:leading-[10rem]
        sm:text-[10rem] text-[6rem] 
        absolute 
        font-poppins 
        font-bold 
        select-none
        bg-clip-text 
        text-transparent 
        bg-gradient-to-r 
      from-mint 
      to-lavender 
      via-salmon
        animate-gradient-x
        dark:invisible
        ">
        {props.text}
      </div>

      <div className="
        text-center
        leading-[6rem] sm:leading-[10rem]
        sm:text-[10rem] text-[6rem]
        absolute 
        font-poppins 
        font-bold 
        select-none
        blur-sm
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
      </div>

      <div className="
        text-center
        leading-[6rem] sm:leading-[10rem]
        sm:text-[10rem] text-[6rem]
        absolute 
        font-poppins 
        font-bold 
        select-none
        text-charcoal
        invisible
        dark:visible">
        {props.text}
      </div>

    </div>
  );
}

export default HeroText;