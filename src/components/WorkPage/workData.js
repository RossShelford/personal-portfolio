import logoMorph from "./Imagineear/assets/LogoMorph.webm"
import { ai, ae, ps, sketch, figma, react } from "../../assets/assetsIndex.js"


 const menuItems = [
    {
        id: 'imagineear',
        tb: logoMorph,
        category: ['All', 'Design'],
        title: 'Imagineear Rebrand',
        tools: [ai, ps, ae, sketch],
    },
    {
        id: 'pixtec',
        tb: logoMorph,
        category: ['All', 'Design'],
        title: 'Pixtec Branding',
        tools: [figma, ai],
    },
    {
        id: 'accordion',
        tb: logoMorph,
        category: ['All', 'Development'],
        title: 'Instructions Accordion',
        tools: [figma, react],
    },
]

export default menuItems;