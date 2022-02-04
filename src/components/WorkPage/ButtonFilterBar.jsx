function ButtonFilterBar({activeFilter, handleSetFilter }) {

 function handleIsActiveFilter(par) { return (activeFilter === par) ?
    "text-stone-800 bg-neutral-300 dark:bg-neutral-500 dark:text-stone-300 rounded-xl" :
    "text-stone-500 dark:text-stone-300 text-cream" 
 
  };

  return (
    <div className="h-auto">
        <div className="bg-gray-50 dark:bg-[#292929] transition-all h-16 flex items-center justify-center">
            <h3 className="font-poppins text-xs uppercase text-gray-400 dark:text-zinc-500">Work Type:</h3>
            <button onClick={() => handleSetFilter("All")} className={`${handleIsActiveFilter("All")} text-flint inline-flex h-10 m-5 p-2 px-3 text-sm items-center justify-center text-center font-poppins select-none transition-all`}>
                All
            </button>

            
            <button onClick={() => handleSetFilter("Design")} className={`${handleIsActiveFilter("Design")} text-flint inline-flex h-10 m-3 p-2 text-sm items-center justify-center text-center font-poppins select-none cursor-pointer transition-all`}>
                Design
            </button>


            <button onClick={() => handleSetFilter("Development")} className={`${handleIsActiveFilter("Development")} text-flint inline-flex h-10 m-3 p-2 text-sm items-center justify-center text-center font-poppins select-none cursor-pointer transition-all`}>
                Development
            </button>
        </div>
    </div>
  );
}

export default ButtonFilterBar;