import React from 'react';
import IPadFrame from '../../GeneralComponents/AppleiPadFrame';
import BaileyWebVid from './assets/Timelapse_Bailey.mp4';
import BaileyGeneration from './assets/ExportingVideo.mp4';
import Footer from '../../GeneralComponents/Footer.jsx'

function NFTContainer() {
  return (<>
    <div className='flex flex-col justify-center items-center pb-20'>
      
      <div className='selection:bg-salmon selection:text-flint max-w-screen-lg'>
        <h3 className='font-poppins text-3xl md:px-32 px-20 pb-3 pt-20 dark:text-cream'>What is an NFT?</h3>
        <p className='font-poppins text-sm md:px-32 px-20 leading-relaxed dark:text-cream'>
          Put simply, NFT's (Non-Fungible Token) are currently most know for digital art that a person who buys an NFT art piece is actually buying the only verifiable version of that piece as minted by the artist. When an artist mints a work, it's at that point that all other copies are just that, copies. The monetary value of that work is attached to the actual NFT connected to the blockchain. NFT's a whole is a technology still in its infancy and I personally believe it will become a pivotal tool in verifying products and licencing.
        </p>
        <h3 className='font-poppins text-3xl md:px-32 px-20 pb-3 pt-20 dark:text-cream'>How Do NFTs Work?</h3>
        <p className='font-poppins text-sm md:px-32 px-20 leading-relaxed dark:text-cream'>
          NFTs are powered by smart contracts, most commonly on the Ethereum blockchain. NFTs are created by the process of “minting”. This is when a digital file is transformed into a digital asset. The asset is given a unique fingerprint (hash), token name, and token symbol. Once minted, this asset can then be stored on the blockchain, traded, or sold. Like other cryptocurrency transactions, records of ownership and transfers of digital assets will be stored on the blockchain for all to see.
        </p>
      </div>

      <IPadFrame content={BaileyWebVid}/>

      <div className='selection:bg-salmon selection:text-flint max-w-screen-lg'>
        <p className='font-poppins text-sm md:px-32 px-20 leading-relaxed dark:text-cream'>
          The first necessary part of my Project was to have illustration to use, so I drew my cat Bailey. From there to be able to I then drew a bunch of different variants for the eyes, mouth, body and accessories allowing me to layer and generate thousands of unique artworks using open source software by <a className="underline text-lavender" target="_Blank" rel="noreferrer" href="https://github.com/hashlips">Hashlips</a>.
        </p>


        <video className="p-12" playsInline src={BaileyGeneration} loop="loop" autoPlay="autoplay"></video>

        <p className='font-poppins text-sm md:px-32 px-20 leading-relaxed dark:text-cream'>
          NFTs do not actually store images on the blockchain because of file size constraints. Instead, they store a hash of the image. This hash is called the NFT’s content ID (CID)  and is typically hosted on <a className="underline text-lavender" target="_Blank" rel="noreferrer" href="https://ipfs.io/">IPFS</a>. Once content is uploaded, it cannot be modified without changing the CID.
          I have used <a className="underline text-lavender" target="_Blank" rel="noreferrer" href="https://www.pinata.cloud/">Pinata</a> to simplify   the process of uploading my artwork on IPFS.
        </p>
        
      </div>
    </div>
    <Footer />
    </>
    

)
}

export default NFTContainer;
