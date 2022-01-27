import React from 'react';

function HeroText(props) {
  return (
    <div className="relative min-h-[80vh] max-h-screen flex items-center justify-center">
      
      <div className="
        text-[10vw] 
        absolute 
        font-poppins 
        font-bold 
        z-10
        select-none
        flex
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
      </div>

      <div className="
        text-[10vw] 
        inset-0 
        absolute 
        font-poppins 
        font-bold z-0
        select-none
        blur-sm
        flex
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
      </div>

      <div className="
        text-[10vw] 
        inset-0 
        absolute 
        font-poppins 
        font-bold 
        z-0
        select-none
        flex
        items-center 
        justify-center
        text-charcoal
        invisible
        dark:visible">
        {props.text}
      </div>

    </div>
  );
}

export default HeroText;