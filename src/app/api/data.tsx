import { getImgPath } from "../../utils/image";

export const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#01about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Blog", href: "/#blog" },
];

// icon , value , description


export const Progress = [
    { title: 'UX Research and Testing', Progress: 90 },
    { title: 'Product Management', Progress: 84 },
    { title: 'Debug & OOP', Progress: 94 },
    { title: 'Fast SEO', Progress: 100 }
];

type portfolioinfo ={
id : number;
image : string;
}

export const portfolioinfo = [
    {
        image: getImgPath('https://i.ibb.co/VpLXdZPn/tumb01-shop.png'),
        link: 'https://aqil-react-shop.vercel.app/',
        alt: 'Portfolio',
        title: 'E-commerce Product Catalog & Cart System',
        slug: 'Cozycasa',
        info: 'React , TypeScript , tailwind',
        id:10,
        gitLink : "https://github.com/MrAqil123/Aqil_Shop_React"
    },
    {
        image: getImgPath('https://i.ibb.co/tMWtcwNb/tumb02-abr.png'),
        link : 'https://www.figma.com/design/Tn86kc9i92W906Y2TQ9liy/Untitled?node-id=0-1&m=dev&t=muZxXep0ktfe2u32-1', 
        figma_prototype:'https://www.figma.com/proto/Tn86kc9i92W906Y2TQ9liy/Untitled?node-id=0-1&t=mbJTIdDGb5sM6Bld-1',
       
        alt: 'Portfolio',
        title: 'Login & signup page',
        slug: 'Mars',
        info: 'Figma | UI/UX',
        id:104
    },
    {
        image: getImgPath('https://i.ibb.co/sddSGNwY/tumb03-pizza.png'),
        link:'https://www.figma.com/design/ak3P6V9syYsQpmhsSa7epk/Untitled?node-id=54-93&m=dev&t=AtwxicFtbQfrUn2P-1',
        figma_prototype : 'https://www.figma.com/proto/ak3P6V9syYsQpmhsSa7epk/Untitled?node-id=54-93&t=AtwxicFtbQfrUn2P-1',
        alt: 'Portfolio',
        title: 'Restaurant',
        slug: 'everyday-humans',
        info: 'Figma | UI/UX',
        id:213
    },
    {
        image: getImgPath('https://i.ibb.co/k6H38ZvR/tumb04-Saas-Ali.png'),
        link: 'https://www.figma.com/design/cs8UCpHfJuvUUXyRgV4acT/Untitled?node-id=1-2&m=dev&t=FViE3DaC3GOndhCj-1',
        figma_prototype:'https://www.figma.com/proto/cs8UCpHfJuvUUXyRgV4acT/Untitled?node-id=1-2&t=FViE3DaC3GOndhCj-1',
        alt: 'Portfolio',
        title: 'trip planner site',
        slug: 'rocket-squared',
        info: 'Figma | UI/UX',
        id:2
    }
    
]