// Define the products array
const products = [

  
    {
        id:1,
        Title:"TT COURSE – RADIANCE",
        Cat: 'Full-face',
        Price: '150',
        Img: '../img/kythelmet1.png'
    },
    {
        id:2,
        Title:"NF-R – Hyper Fluo Yellow",
        Cat: 'Full-face',
        Price: '185',
        Img: '../img/kythyperfluo.png'
    },
    {
        id:3,
        Title:"NF-R STEEL FLOWER RED",
        Cat: 'Full-face',
        Price: '150',
        Img: '../img/kythelmet7.png'
    },
    {
        id:4,
        Title:"KR-1 – Plain Matt Black",
        Cat: 'Full-face',
        Price: '280',
        Img: '../img/kytplainmatt.png'
    },
    {
        id:5,
        Title:"NF-J – BROC PARKES REPLICA",
        Cat: 'Half-face',
        Price: '135',
        Img: '../img/kythelmet9.png'
    },
    {
        id:6,
        Title:"NF-J – DENNIS FOGGIA LEOPARD REPLICA",
        Cat: 'Half-face',
        Price: '135',
        Img: '../img/kythelmet10.png'
    },
    {
        id:7,
        Title:"NF-J – ESPARGARO REPLICA 2020",
        Cat: 'Half-face',
        Price: '135',
        Img: '../img/kythelmet11.png'
    },
    {
        id:8,
        Title:"NF-J – JAUME MASIA REPLICA",
        Cat: 'Half-face',
        Price: '135',
        Img: '../img/kytJAUME-MASIA-REPLICA1.png'
    },
    {
        id:9,
        Title:"NF-J – RADAR AQUA BLUE",
        Cat: 'Half-face',
        Price: '135',
        Img: '../img/kythelmet13.png'
    },
    {
        id:10,
        Title:"Strike Eagle – Potion Yellow",
        Cat: 'Off-Road',
        Price: '225',
        Img: '../img/kytpotion.png'
    },
    {
        id:11,
        Title:"Strike Eagle – Simpson Replica Orange",
        Cat: 'Off-Road',
        Price: '225',
        Img: '../img/kythelmet15.png'
    },
    {
        id:12,
        Title:"Strike Eagle – Web Matt White/Blue",
        Cat: 'Off-Road',
        Price: '225',
        Img: '../img/kythelmet16.png'
    },
    {
        id:13,
        Title:"TT COURSE – Photochromic Visor",
        Cat: 'Accessories',
        Price: '45',
        Img: '../img/kytacceso.png'
    },
    {
        id:14,
        Title:"YG DESIGN – Wireless Charging Phone Mount",
        Cat: 'Accessories',
        Price: '40',
        Img: '../img/kythelmetaccesso2.jpeg'
    },
       
    
       
]

// Include the list.js script
// Export the products array
export { products };

// Import the initList function and the products array
import { initList } from './product.js';
import { products } from './product.js';

const productListContainer = document.querySelector('.product-list');

// Call the initList function to display the products
initList(products, productListContainer);
