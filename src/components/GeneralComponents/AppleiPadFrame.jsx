import React from 'react'
import ipad from '../GeneralComponents/assets/ipad-frame.png'

function IPadFrame(props) {
  return (
    <div className='m-0 relative flex justify-center items-center h-[40rem] w-[40rem]'>
      <img className='absolute z-20' src={ipad} alt='iPad'/>
      <video className='absolute z-10 scale-[0.93]' src={props.content} loop="loop" autoplay="autoplay"></video>
    </div>
  )
}

export default IPadFrame