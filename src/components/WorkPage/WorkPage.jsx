import WorkItem from "./WorkItem.jsx"

function WorkPage() {
  return (
  <div className="h-auto">
    <div className="bg-gray-50 dark:bg-[#292929] transition-all h-16 flex items-center justify-center">
       <span className="inline-flex h-10 m-5 p-2 px-3 text-sm items-center justify-center text-center font-poppins select-none rounded-xl min-w-[3rem] text-stone-800 bg-neutral-300 transition-all dark:bg-neutral-500 dark:text-stone-300  ">All</span>
       <span className="inline-flex h-10 m-3 p-2 text-sm items-center justify-center text-center font-poppins select-none text-stone-500 dark:text-stone-300 cursor-pointer">Design</span>
       <span className="inline-flex h-10 m-3 p-2 text-sm items-center justify-center text-center font-poppins select-none text-stone-500 dark:text-stone-300 cursor-pointer">Development</span>
    </div>
  <div>
      <WorkItem/>
    </div>
  </div>
  );
}

export default WorkPage;