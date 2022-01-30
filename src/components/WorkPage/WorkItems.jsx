import React from 'react';
import menuItems from './workData';


function WorkItems() {
  return (
    <div className='select-none relative flex flex-col flex-grow items-center w-full pt-16'>
      {menuItems.map((item, i) => {
            return( 
            <div key={item.id} className='
            w-3/5 h-1/6 
            mb-20  
            transform-gpu transition ease-out duration-700
            hover:cursor-pointer hover:scale-110
            overflow-hidden
            group
            '>

                <div className='opacity-0 transition ease-in duration-200 group-hover:opacity-100 
                absolute bottom-0 p-4 select-none'>
                  <img className='w-6 h-6 pb-6' src={`${item.tools}`} />
                  <h2 className='text-cream  font-poppins text-2xl z-10'>{item.title}</h2>
                  <svg className=" w-8 h-8 stroke-cream z-10"  xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </div>
                <img src={item.tb} alt={item.title} className="-z-1 w-full object-cover"/>

            </div>
            )
          }
        )
      }
    </div>
  );
}

export default WorkItems;
