import React from 'react'
import BaileyWebVid from '../WorkPage/NFT/assets/Timelapse_Bailey.webm'
import ipad from '../GeneralComponents/assets/ipad-frame.png'

function IPadFrame() {
  return (
    <div className='m-10 relative flex justify-center items-center'>
      <img className='absolute z-20' src={ipad} alt='iPad'/>
      <video className='absolute z-10 scale-[0.93]' src={BaileyWebVid} loop="loop" autoplay="autoplay"></video>
    </div>
  )
}

export default IPadFrame