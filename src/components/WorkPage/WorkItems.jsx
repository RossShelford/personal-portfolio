import React from 'react';
import menuItems from './workData';
import { useNavigate } from 'react-router-dom';
          
function WorkItems({activeFilter}) {
  
  let navigate = useNavigate(); 
  
  return ( 

      <div className='select-none relative flex flex-col flex-grow items-center w-full sm:pt-16 pt-0'>

        {menuItems.map((item) => { return (item.category.includes(activeFilter)) ?
             

              <div onClick={()=>navigate(`/work/${item.id}`)} key={item.id} className='
              sm:w-4/5 md:w-3/5 xl:w-2/5
              m-0 sm:mb-14  
              transform-gpu transition ease-out duration-700
              hover:cursor-pointer sm:hover:scale-110
              overflow-hidden
              group'>
                  
                  <div className='sm:opacity-0 transition ease-in duration-200 group-hover:opacity-100 
                  absolute bottom-0 p-6 select-none'>
                    <div className='flex sm:visible invisible'>
                      {item.tools.map((icon) =>{
                        return <img key={icon} className='w-6 h-6 mr-4' src={icon} alt={icon} />
                        })}
                    </div>
                    <div className='flex items-end'>
                      <h2 key={item.id} className='pt-2 text-cream font-poppins text-2xl'>{item.title}</h2>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 ml-3 stroke-white visible sm:invisible" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                  <video playsInline muted autoplay="autoplay" loop="loop" key={item.id} src={item.tb} alt={item.title} className="-z-1 w-full object-cover"/>
                

              </div> 
              : null
              
            }
          )
        }

      </div>

  );
}

export default WorkItems;
