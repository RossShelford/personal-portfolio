import { ai, ae, ps, sketch, git, figma, react, tailwindcss, trello, procreate } from "../../assets/assetsIndex.js";



function AboutPageContainer() {
  return (
  <div>
    <div className="flex flex-col justify-center">
      <p className="
      mt-20 mx-20
      max-w-xl
      text-2xl font-poppins 
      dark:text-cream 
      whitespace-pre-line
      text-center
    selection:bg-salmon selection:text-charcoal
      sm:text-left
      sm:text-3xl">

      {`Hello, I’m Ross. 
      
      I’m currently focused on becoming a front-end web developer and I have been a Graphic Designer for 5 years. 
      

      These are my tools:`}
      </p> 
      <div className="flex flex-wrap items-center
      mx-16
      pt-6 justify-center 
      sm:justify-start
      selection:bg-salmon selection:text-charcoal">
        <a href="https://reactjs.org/" rel="noreferrer" target="_blank">
          <img className="h-20 m-2" src={react} alt="React"/>
        </a>
        <a href="https://tailwindcss.com/" rel="noreferrer" target="_blank">
          <img className="h-14 m-2" src={tailwindcss} alt="Tailwind CSS" />
        </a>
        <a href="https://git-scm.com/" rel="noreferrer" target="_blank">
          <img className="h-16 m-2" src={git} alt="Git" />
        </a>
        <a href="https://www.figma.com/" rel="noreferrer" target="_blank">
          <img className="h-14 m-4" src={figma} alt="Figma" />
        </a>
        <a href="https://www.sketch.com/" rel="noreferrer" target="_blank">
          <img className="h-14 m-3" src={sketch} alt="Sketch 3" />
        </a>
        <a href="https://procreate.art/" rel="noreferrer" target="_blank">
          <img className="h-[4.3rem] m-3" src={procreate} alt="Procreate" />
        </a>
        <a href="https://www.adobe.com/uk/products/illustrator.html" rel="noreferrer" target="_blank">
          <img className="h-14 m-2 dark:border-2 dark:border-amber-900 dark rounded-xl" src={ai} alt="Illustrator" />
        </a>
        <a href="https://www.adobe.com/uk/products/photoshop.html" rel="noreferrer" target="_blank">
          <img className="h-14 m-2 dark:border-2 dark:border-sky-900 dark rounded-xl" src={ps} alt="Photoshop" />
        </a>
        <a href="https://www.adobe.com/uk/products/aftereffects.html" rel="noreferrer" target="_blank">
          <img className="h-14 m-2 mr-4 dark:border-2 dark:border-violet-800 dark rounded-xl" src={ae} alt="After Effects" />
        </a>
        <a href="https://trello.com/" rel="noreferrer" target="_blank">
          <img className="h-14 m-2" src={trello} alt="Trello" />
        </a>
      </div>
    </div>
  </div>
  )
}

export default AboutPageContainer;
