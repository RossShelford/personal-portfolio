import placeHolder from "./placeholderimage.png";
import figma from "../../assets/toolsLogos/figma.svg";
import git from "../../assets/toolsLogos/git.svg";
import sketch from "../../assets/toolsLogos/sketch.svg"
import ai from "../../assets/toolsLogos/illustrator.svg"
import ps from "../../assets/toolsLogos/photoshop.svg"
import ae from "../../assets/toolsLogos/aftereffects.svg"

 const menuItems = [
    {
        id: 1,
        tb: placeHolder,
        category: ['All', 'Design'],
        title: 'Imagineear Rebrand',
        tools: [ai, ps, ae, sketch,],
    },
    {
        id: 2,
        tb: placeHolder,
        category: ['All', 'Design'],
        title: 'Pixtec',
        tools: [figma, git],
    },
    {
        id: 3,
        tb: placeHolder,
        category: ['Design'],
        title: 'Mixtec',
        tools: [figma, figma],
    },
]

export default menuItems;