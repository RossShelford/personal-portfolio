import React from 'react';




function ButtonFilterBar() {
  return (
    <div className="h-auto">
        <div className="bg-gray-50 dark:bg-[#292929] transition-all h-16 flex items-center justify-center">
            <button className="inline-flex h-10 m-5 p-2 px-3 text-sm items-center justify-center text-center font-poppins select-none rounded-xl min-w-[3rem] text-stone-800 bg-neutral-300 transition-all dark:bg-neutral-500 dark:text-stone-300  ">
                All</button>
            <button className="inline-flex h-10 m-3 p-2 text-sm items-center justify-center text-center font-poppins select-none text-stone-500 dark:text-stone-300 cursor-pointer">
                Design</button>
            <button className="inline-flex h-10 m-3 p-2 text-sm items-center justify-center text-center font-poppins select-none text-stone-500 dark:text-stone-300 cursor-pointer">
                Development</button>
        </div>
    </div>
  );
}

export default ButtonFilterBar;




