import React from 'react';

function MacTopBarFrame(props) {
  return (

<div className='flex items-center relative justify-center rounded-t-xl bg-[#F3F5F4] dark:bg-[#434343] h-7 w-full'>

  <div className='flex absolute left-0'>
      <div className='ml-2 h-2 w-2 rounded-full bg-[#ED6A62]' />
      <div className='ml-1 h-2 w-2 rounded-full bg-[#F4BF5D]' />
      <div className='ml-1 h-2 w-2 rounded-full bg-[#64C456]' />
  </div>
  <div className='flex relative items-center rounded-sm bg-[#E6E8E8] dark:bg-[#717171] h-5 px-40'>
      <span className='font-sans text-xs text-flint dark:text-white mr-auto'>{props.text}</span>

      <svg className='stroke-gray-500 dark:stroke-gray-300 absolute right-1.5' width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.50602 4.59082L4.89809 2.73472L3.04199 1.34265" stroke-linecap="round"/>
        <path d="M9.07412 6.91096C9.07412 9.21742 7.20436 11.0872 4.8979 11.0872C2.59144 11.0872 0.72168 9.21742 0.72168 6.91096C0.72168 4.6045 2.59144 2.73474 4.8979 2.73474" stroke-linecap="round"/>
      </svg>
  </div>

</div>






  );
}

export default MacTopBarFrame;