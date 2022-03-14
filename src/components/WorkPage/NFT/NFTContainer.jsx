import React from 'react';
import IPadFrame from '../../GeneralComponents/AppleiPadFrame';
import BaileyWebVid from './assets/Timelapse_Bailey.mp4';

function NFTContainer() {
  return (
    <div className='flex flex-col justify-center items-center'>
      
      <div className='selection:bg-salmon selection:text-flint max-w-screen-lg'>
        <h3 className='font-poppins text-3xl md:px-32 px-20 pb-3 pt-20 dark:text-cream'>What is an NFT?</h3>
        <p className='font-poppins text-sm md:px-32 px-20 leading-relaxed dark:text-cream'>
          Put simply, NFT's (Non-Fungible Token) are currently most know for digital art that a person who buys an NFT art piece is actually buying the only verifiable version of that piece as minted by the artist. When an artist mints a work, it's at that point that all other copies are just that, copies. The monetary value of that work is attached to the actual NFT connected to the blockchain. NFT's a whole is a technology still in it's infancy and I believe it will become a pivotal tool in verifying products and licencing.
        </p>
      </div>
      <IPadFrame content={BaileyWebVid}/>

    </div>

)
}

export default NFTContainer;
