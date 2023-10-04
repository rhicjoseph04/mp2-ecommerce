function showModal(title, description) {
  const modal = document.getElementById('modal');
  const modalTitle = document.getElementById('modalTitle');
  const modalDescription = document.getElementById('modalDescription');

  modal.style.display = 'block';
  modalTitle.innerText = title;
  modalDescription.innerText = description;
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
}


$(document).ready(function() {
  // Initialize the carousel
  $('.carousel').carousel();
});



// const cart = [];


// const curElm = [
//     {
//         "id":"1",
//         "Title":"TT Course Radiance[S-XL].",
//         "Cat": "Fullface Helmet",
//         "Price": "150",
//         "Img": "./img/kythelmettop1.png"
//     },
//     {
//         id:2,
//         Title:"KR-1 – Espargaro Replica 2017.",
//         Cat: 'Fullface Helmet',
//         Price: '280',
//         Img: './img/kythelmetstop2.png'
//     },
//     {
//         id:3,
//         Title:"NX-RACE – Carbon Race-D Red Fluo.",
//         Cat: 'Fullface Helmet',
//         Price: '345',
//         Img: './img/kythelmettop3.png'
//     },
//     {
//         id:4,
//         Title:"KYT Strike Eagle – NEW YORK YELLOW FLUO.",
//         Cat: 'Off-Road',
//         Price: '225',
//         Img: './img/kythelmettop4.webp'
//     },
//     {
//         id:5,
//         Title:"NF-J – BROC PARKES REPLICA",
//         Cat: 'Half-face',
//         Price: '135',
//         Img: './img/kyttp5.png'
//     },
//     {
//         id:6,
//         Title:"NF-J – Motion Matt Yellow Fluo",
//         Cat: 'Half-face',
//         Price: '135',
//         Img: './img/kyttp6.png'
//     },
//     {
//         id:7,
//         Title:"Strike Eagle – Plain White",
//         Cat: 'Off-Road',
//         Price: '225',
//         Img: './img/kyttp7.png'
//     },
//     {
//         id:8,
//         Title:"Strike Eagle – Plain White",
//         Cat: 'Off-Road',
//         Price: '225',
//         Img: './img/kyttp8.png'
        
//     },
    
//     {
//         id:9,
//         Title:"Strike Eagle – Wings White/Blue",
//         Cat: 'Off-Road',
//         Price: '225',
//         Img: './img/kyttp9.png'
//     }

// ]

//  // Create an img element
//  const imgElement = document.createElement('img');

//  // Set the src and alt attributes based on curElm properties
//  imgElement.src = curElm.Img;
//  imgElement.alt = curElm.Title;

//  // Append the img element to the image container
//  const imageContainer = document.getElementById('imageContainer');
//  imageContainer.appendChild(imgElement);

    
//   const addToCart = (product) => {
//     console.log("Added to cart:", product);
//   };
  
//   const viewProduct = (product) => {
//     console.log("View product:", product);
//   };
  
//   const Home = ({ detail, view, close, setClose, addtocart }) => {
//     // Your Home component logic
  
//     const root = document.getElementById("root");
//     if (root) {
//       root.innerHTML = `
//         <!-- Your HTML content for Home component here -->
//       `;
//     }
//   };
  
//   const api = {
//     getItem: (key) => JSON.parse(sessionStorage.getItem(key)),
//     setItem: (key, value) => sessionStorage.setItem(key, JSON.stringify(value)),
//   };
  
//   let cartLength = api.getItem("cartLength") || 0;
  
//   const setCloseProductDetail = (isOpen) => {
//     console.log("Product detail is open:", isOpen);
//   };
  
//   Home(Homeproduct, viewProduct, false, setCloseProductDetail, addToCart);

//   function viewProduct(curElm) {
//     const productDetailContent = document.getElementById('productDetailContent');
//     productDetailContent.innerHTML = `
//       <div class="productbox">
//         <div class="img-box">
//           <img src="${curElm.Img}" alt="${curElm.Title}">
//         </div>
//         <div class="detail">
//           <h4>${curElm.Cat}</h4>
//           <h2>${curElm.Title}</h2>
//           <h3>${curElm.Price}</h3>
//           <button>Add To Cart</button>
//         </div>
//       </div>`;
    
//     const productDetail = document.getElementById('productDetail');
//     productDetail.style.display = 'block';
//   }

//    // Function to display product detail
//    function viewProduct(curElm) {
//     const productDetailContent = document.getElementById('productDetailContent');
//     productDetailContent.innerHTML = `
//       <div class="productbox">
//         <div class="img-box">
//           <img src="${curElm.Img}" alt="${curElm.Title}">
//         </div>
//         <div class="detail">
//           <h4>${curElm.Cat}</h4>
//           <h2>${curElm.Title}</h2>
//           <h3>${curElm.Price}</h3>
//           <button onclick="addToCart('${curElm.Title}')">Add To Cart</button>
//         </div>
//       </div>`;
    
//     const productDetail = document.getElementById('productDetail');
//     productDetail.style.display = 'block';
//   }

//     // Function to add item to cart
//     function addToCart(item) {
//         cart.push(item);
//         alert(`${item} added to cart!`);
//       }

//   // Function to close product detail
//   function closeProductDetail() {
//     const productDetail = document.getElementById('productDetail');
//     productDetail.style.display = 'none';
//   }

//   function showModal(title, description) {
//     const modal = document.getElementById('modal');
//     const modalTitle = document.getElementById('modalTitle');
//     const modalDescription = document.getElementById('modalDescription');
  
//     modal.style.display = 'block';
//     modalTitle.innerText = title;
//     modalDescription.innerText = description;
//   }
  
//   function closeModal() {
//     const modal = document.getElementById('modal');
//     modal.style.display = 'none';
//   }
  
  
//   $(document).ready(function() {
//     // Initialize the carousel
//     $('.carousel').carousel();
//   });
  