import React from 'react'
import clientLogos from '../../assets/clientLogoIndex.js'

function ClientLogos() {
  return (
    <div className='grid grid-cols-6 gap-6 max-w-[70rem] bg-white m-5 p-5 px-20 rounded-3xl'>
      {clientLogos.map((item) => {
        return <img className='self-center' key={item.id} src={item.logo} alt={item.logo} />
      })}
    </div>
    
  )
}

export default ClientLogos