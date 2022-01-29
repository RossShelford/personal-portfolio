import React from 'react';
import menuItems from './filterData';


function WorkItems() {
  return (
    <div className='h-10 w10 bg-gray-500'>
      { menuItems.map((item) => {
            return( 
            <div key={item.id} className='h-80 w-80 bg-red-500'>
              <img src={item.tb}/>
              <h1>{item.title}</h1>
            </div>
            )
          }
        )
      }
    </div>
  );
}

export default WorkItems;
