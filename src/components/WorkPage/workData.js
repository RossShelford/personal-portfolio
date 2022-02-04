import placeHolder from "./placeholderimage.png";
import { ai, ae, ps, sketch, git, figma, react } from "../../assets/assetsIndex.js"


 const menuItems = [
    {
        id: 'imagineear',
        tb: placeHolder,
        category: ['All', 'Design'],
        title: 'Imagineear Rebrand',
        tools: [ai, ps, ae, sketch],
    },
    {
        id: 'pixtec',
        tb: placeHolder,
        category: ['All', 'Design'],
        title: 'Pixtec',
        tools: [figma, ai],
    },
    {
        id: 'accordion',
        tb: placeHolder,
        category: ['All', 'Development'],
        title: 'Instructions Accordion',
        tools: [figma, react, git],
    },
]

export default menuItems;