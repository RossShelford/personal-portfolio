import React from 'react';

function MacTopBarFrame() {
  return (

  <div className='flex flex-1 justify-center rounded-t-xl bg-[#F3F5F4] dark:bg-[#434343] h-7 w-full'>

    <div className='flex flex-row items-center'>
        <div className='ml-2 h-2 w-2 rounded-full bg-[#ED6A62]' />
        <div className='ml-1 h-2 w-2 rounded-full bg-[#F4BF5D]' />
        <div className='ml-1 h-2 w-2 rounded-full bg-[#64C456]' />
    </div>
    <div className='flex items-center justify-center'>
        <div className='flex items-center justify-center rounded-sm bg-[#E6E8E8] dark:bg-[#717171] h-5 w-1/3'>
            <span className='font-sans text-xs text-flint dark:text-white'>www.imagineear.com</span>
        </div>
    </div>
    
  </div>
 


  );
}

export default MacTopBarFrame;