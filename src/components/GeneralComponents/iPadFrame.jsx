import React from 'react'
import BaileyWebVid from '../WorkPage/NFT/assets/Timelapse_Bailey.webm'
import ipad from '../GeneralComponents/assets/ipad-frame.png'

function IPadFrame() {
  return (

      <div className='relative w-[40em] border-lavender border-2'>
       <img className='absolute z-20 border-red-600 border-2 left-[1.25em] top-[1.5em] w-[21.4em]' src={ipad} alt='iPad'/>
       <video className='absolute z-10 border-green-500 border-2 left-[1.25em] top-[1.5em] w-[21.4em]' src={BaileyWebVid} loop="loop" autoplay="autoplay"></video>
      </div>

   
  )
}

export default IPadFrame