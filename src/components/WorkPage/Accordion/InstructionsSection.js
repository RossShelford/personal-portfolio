import React from "react";
import Accordion from './Accordion/Accordion'
import './index.css';

const InstructionsSection = ({data}) => {
    return <div className="accordion">
        <h1 className="accordion__title">{data.title}</h1>
        <Accordion videosArray={data.videos}/>
    </div>
}

export default InstructionsSection;