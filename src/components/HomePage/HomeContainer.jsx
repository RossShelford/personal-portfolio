import React from 'react'
import HeroText from './HeroText'
import dribbblelogo from './dribbble-logo.svg'
import gitHublogo from './gitHub-logo.svg'

function HomeContainer() {
  return (
    <div>
      <HeroText text={`HELLO WORLD`}/>
      <div className='flex items-center justify-center mt-20'>
        <a href="https://dribbble.com/RossShelford" rel="noreferrer" target="_blank" >
            <img className="h-20 m-10" src={dribbblelogo} alt="Dribbble"/>
        </a>
        <a href="https://github.com/RossShelford" rel="noreferrer" target="_blank">
            <img className="h-20 m-10" src={gitHublogo} alt="gitHub"/>
        </a>
      </div>
    </div>

    
  )
}

export default HomeContainer