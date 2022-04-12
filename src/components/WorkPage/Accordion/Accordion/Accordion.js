import React, { useState } from "react";


const Accordion = ({videosArray}) => {
    
    // Use state for accordion section
    const [activeIndex, setActiveIndex] = useState(null);

    // Handles onClick to show content checking if active already
    const onTitleClick = index => {
        index === activeIndex ? setActiveIndex(null) : setActiveIndex(index);
    }

    // Apply show or remove show class
    const renderedVideos = videosArray.map((video, index) => {
        const isActive = index === activeIndex ? 'show' : '';

        return <React.Fragment key={video.title}>
            <div className="accordion__list-item__header">
                <svg className={`accordion__list-item__icon ${isActive}`} onClick={() => {onTitleClick(index)}} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>
                <h2 className="accordion__list-item__header__subtitle" onClick={() => {onTitleClick(index)}}>{video.title}</h2>
            </div>
            <div className={`accordion__list-item__content__container ${isActive}`}>
                <p className={`accordion__list-item__content__paragraph ${isActive}`}>{video.text}</p>
                <a target="_blank" rel="noreferrer" href={video.videoURL} className={`accordion__list-item__content__button ${isActive}`}>{video.buttonText}
                    <span className="button__icon"><svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24"><path d="M21 12l-18 12v-24z"/></svg></span>
                </a>
            </div>
        </React.Fragment>
    })

    return renderedVideos
    
}

export default Accordion;