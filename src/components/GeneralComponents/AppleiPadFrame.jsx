import React from 'react'
import ipad from '../GeneralComponents/assets/ipad-frame.png'

function IPadFrame(props) {
  return (
    <div className='m-0 relative flex justify-center items-center h-[25rem] w-[25rem] sm:h-[37rem] sm:w-[40rem] lg:w-[60rem] lg:h-[50rem]'>
      <img className='absolute z-20' src={ipad} alt='iPad'/>
      <video playsInline className='absolute z-10 scale-[0.93]' src={props.content} loop="loop" autoPlay="autoplay"></video>
    </div>
  )
}

export default IPadFrame