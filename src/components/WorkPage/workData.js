import placeHolder from "./placeholderimage.png";
import { ai, ae, ps, sketch, git, figma, react } from "../../assets/assetsIndex.js"


 const menuItems = [
    {
        id: 1,
        tb: placeHolder,
        category: ['All', 'Design'],
        title: 'Imagineear Rebrand',
        tools: [ai, ps, ae, sketch],
    },
    {
        id: 2,
        tb: placeHolder,
        category: ['All', 'Design'],
        title: 'Pixtec',
        tools: [figma, ai],
    },
    {
        id: 3,
        tb: placeHolder,
        category: ['All', 'Development'],
        title: 'Instructions Accordion',
        tools: [figma, react, git],
    },
]

export default menuItems;