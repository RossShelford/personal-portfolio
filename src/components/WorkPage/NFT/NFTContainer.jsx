import React from 'react';
import IPadFrame from '../../GeneralComponents/AppleiPadFrame';
import BaileyWebVid from './assets/Timelapse_Bailey.webm';

function NFTContainer() {
  return (
    <div className='flex flex-col justify-center items-center'>
      
      <div className='selection:bg-salmon selection:text-flint max-w-screen-lg'>
        <h3 className='font-poppins text-3xl md:px-32 px-20 pb-3 pt-20 dark:text-cream'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente</h3>
        <p className='font-poppins text-sm md:px-32 px-20 leading-relaxed dark:text-cream'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, minima quidem vitae at repellendus sint nesciunt nemo optio ipsam, esse ut maxime consectetur adipisci dicta vel libero error nobis mollitia unde eos. Doloribus id nesciunt veritatis eius nisi sit veniam a omnis blanditiis eum, vel quam ad natus adipisci ex consequatur non corporis iste inventore optio. Quidem totam quos veniam minus iste maiores provident sapiente nihil amet! Voluptatum impedit totam error, non, voluptatem ipsa a beatae sed illo itaque corrupti dignissimos? Quasi itaque expedita qui dolorem earum. Libero vel reprehenderit voluptates qui, placeat similique delectus nisi in officiis, sint provident.</p>
      </div>
      <IPadFrame content={BaileyWebVid}/>

    </div>

)
}

export default NFTContainer;
