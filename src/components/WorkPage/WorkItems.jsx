import React from 'react';
import menuItems from './workData';
          
function WorkItems() {
  return (
    <div className='select-none relative flex flex-col flex-grow items-center w-full pt-16'>
      {menuItems.map((item) => {
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
                absolute bottom-0 p-6 select-none'>
                  <div className='flex'>
                    {item.tools.map((icon) =>{
                      return <img className='w-6 h-6 mr-4' src={icon} alt={icon} />
                      })}
                  </div>
                  <h2 className='pt-2 text-cream font-poppins text-2xl'>{item.title}</h2>
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
