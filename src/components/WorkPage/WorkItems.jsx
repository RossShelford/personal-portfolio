import React from 'react';
import menuItems from './filterData';


function WorkItems() {
  return (
    <div className='flex flex-wrap grow flex-start w-full pt-[5vw] px-[10vw] bg-gray-500'>
      {menuItems.map((item) => {
            return( 
            <div key={item.id} className='w-52 h-52 m-5 min-w-[52] bg-red-500 shadow-md rounded-2xl overflow-hidden'>
              <img src={item.tb} alt={item.title} className="w-full object-cover"/>
              <h1 className='p-4'>{item.title}</h1>
            </div>
            )
          }
        )
      }
    </div>
  );
}

export default WorkItems;
