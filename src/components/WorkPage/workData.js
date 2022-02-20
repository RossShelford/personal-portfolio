import logoMorph from "./Imagineear/assets/LogoMorph.webm"
import { ai, ae, ps, sketch, figma, react, procreate } from "../../assets/assetsIndex.js"


 const menuItems = [
    {
        id: 'imagineear',
        tb: logoMorph,
        category: ['All', 'Design'],
        title: 'Imagineear Rebrand',
        tools: [ai, ps, ae, sketch],
    },
    {
        id: 'nft',
        tb: logoMorph,
        category: ['All', 'Design', 'Development'],
        title: 'NFT Generation',
        tools: [ae, procreate, react, ]
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