function ButtonFilterBar({activeFilter, handleSetFilter }) {

  return (
    <div className="h-auto">
        <div className="bg-gray-50 dark:bg-[#292929] transition-all h-16 flex items-center justify-center">
            <button onClick={() => handleSetFilter("All")} className="inline-flex h-10 m-5 p-2 px-3 text-sm items-center justify-center text-center font-poppins select-none rounded-xl min-w-[3rem] text-stone-800 bg-neutral-300 transition-all dark:bg-neutral-500 dark:text-stone-300">
                All
            </button>
            <button onClick={() => handleSetFilter("Design")} className="inline-flex h-10 m-3 p-2 text-sm items-center justify-center text-center font-poppins select-none text-stone-500 dark:text-stone-300 cursor-pointer">
                Design
            </button>
            <button onClick={() => handleSetFilter("Development")} className="inline-flex h-10 m-3 p-2 text-sm items-center justify-center text-center font-poppins select-none text-stone-500 dark:text-stone-300 cursor-pointer">
                Development
            </button>
            <button onClick={()=> console.log(activeFilter)}>
              LogActiveFilter
            </button>
        </div>
    </div>
  );
}

export default ButtonFilterBar;