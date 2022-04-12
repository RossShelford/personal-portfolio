import logoMorph from "./Imagineear/assets/LogoMorph.mp4"
import nftvideo from "./NFT/assets/myCatBaileyNFT-Showcase.mp4"
import accordionVideo from "./Accordion/accordionVid.mp4"
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
        tb: nftvideo,
        category: ['All', 'Design', 'Development'],
        title: 'NFT Project',
        tools: [procreate, ]
    },
    {
        id: 'accordion',
        tb: accordionVideo,
        category: ['All', 'Development'],
        title: 'Instructions Accordion',
        tools: [figma, react],
    },
]

export default menuItems;