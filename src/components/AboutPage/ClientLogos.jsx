import React from 'react'
import clientLogos from '../../assets/clientLogoIndex.js'

function ClientLogos() {
  return (
    <div className='grid overflow-hidden lg:grid-cols-6 md:grid-cols-5 sm:grid-cols-4 grid-cols-2 gap-3.5 max-w-[70rem] bg-white m-5 p-5 rounded-3xl'>
      {clientLogos.map((item) => {
        return <img className={`justify-self-center self-center max-h-36 p-2 ${item.class}`} key={item.id} src={item.logo} alt={item.logo} />
      })}
    </div>
    
  )
}

export default ClientLogos