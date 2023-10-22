const isAuthenticated = true; // Set to true or false as needed

const Productdetail = [
  {
                id:1,
                Title:"TT COURSE – RADIANCE",
                Cat: 'Full-face',
                Brand: 'KYT',
                Price: '150',
                Img: '../img/kythelmet1.png'
            },
            {
                id:2,
                Title:"NF-R – Hyper Fluo Yellow",
                Cat: 'Full-face',
                Brand: 'KYT',
                Price: '185',
                Img: '../img/kythyperfluo.png'
            },
            {
                id:3,
                Title:"NF-R STEEL FLOWER RED",
                Cat: 'Full-face',
                Brand: 'KYT',
                Price: '150',
                Img: '../img/kythelmet7.png'
            },
            {
                id:4,
                Title:"KR-1 – Plain Matt Black",
                Cat: 'Full-face',
                Brand: 'KYT',
                Price: '280',
                Img: '../img/kytplainmatt.png'
            },
            {
                id:5,
                Title:"NF-J – BROC PARKES REPLICA",
                Cat: 'Half-face',
                Brand: 'KYT',
                Price: '135',
                Img: '../img/kythelmet9.png'
            },
            {
                id:6,
                Title:"NF-J – DENNIS FOGGIA LEOPARD REPLICA",
                Cat: 'Half-face',
                Brand: 'KYT',
                Price: '135',
                Img: '../img/kythelmet10.png'
            },
            {
                id:7,
                Title:"NF-J – ESPARGARO REPLICA 2020",
                Cat: 'Half-face',
                Brand: 'KYT',
                Price: '135',
                Img: '../img/kythelmet11.png'
            },
            {
                id:8,
                Title:"NF-J – JAUME MASIA REPLICA",
                Cat: 'Half-face',
                Brand: 'KYT',
                Price: '135',
                Img: '../img/kytJAUME-MASIA-REPLICA1.png'
            },
            {
                id:9,
                Title:"NF-J – RADAR AQUA BLUE",
                Cat: 'Half-face',
                Brand: 'KYT',
                Price: '135',
                Img: '../img/kythelmet13.png'
            },
            {
                id:10,
                Title:"Strike Eagle – Potion Yellow",
                Cat: 'Off-Road',
                Brand: 'KYT',
                Price: '225',
                Img: '../img/kytpotion.png'
            },
            {
                id:11,
                Title:"Strike Eagle – Simpson Replica Orange",
                Cat: 'Off-Road',
                Brand: 'KYT',
                Price: '225',
                Img: '../img/kythelmet15.png'
            },
            {
                id:12,
                Title:"Strike Eagle – Web Matt White/Blue",
                Cat: 'Off-Road',
                Brand: 'KYT',
                Price: '225',
                Img: '../img/kythelmet16.png'
            },
            {
                id:13,
                Title:"TT COURSE – Photochromic Visor",
                Cat: 'Accessories',
                Brand: 'KYT',
                Price: '45',
                Img: '../img/kytacceso.png'
            },
            {
                id:14,
                Title:"YG DESIGN – Wireless Charging Phone Mount",
                Cat: 'Accessories',
                Brand: 'KYT',
                Price: '40',
                Img: '../img/kythelmetaccesso2.jpeg'
            },
               
];

const productContainer = document.getElementById("productContainer");

function filtterproduct(product) {
    const update = Productdetail.filter((x) => {
        return x.Cat === product;
    });
    setProduct(update);
}

function AllProducts() {
    setProduct(Productdetail);
}

function addtocart(curElm) {
    // Define your add to cart logic here
}

function view(curElm) {
    // Define your view logic here
}

function setProduct(update) {
    productContainer.innerHTML = ''; // Clear the existing product list
    update.forEach((curElm) => {
        const productBox = document.createElement("div");
        productBox.className = "box";

        const imgBox = document.createElement("div");
        imgBox.className = "img_box";
        const img = document.createElement("img");
        img.src = curElm.Img;
        img.alt = curElm.Title;
        const icon = document.createElement("div");
        icon.className = "icon";
        const cartIcon = document.createElement("li");
        cartIcon.onclick = () => {
            isAuthenticated ? addtocart(curElm) : loginWithRedirect();
        };
        const cartIconContent = document.createElement("i");
        cartIconContent.className = "fa fa-shopping-cart"; // You may need to define your cart icon class
        cartIcon.appendChild(cartIconContent);
        const viewIcon = document.createElement("li");
        viewIcon.onclick = () => view(curElm);
        const viewIconContent = document.createElement("i");
        viewIconContent.className = "fa fa-eye"; // You may need to define your view icon class
        viewIcon.appendChild(viewIconContent);
        const heartIcon = document.createElement("li");
        const heartIconContent = document.createElement("i");
        heartIconContent.className = "fa fa-heart"; // You may need to define your heart icon class
        heartIcon.appendChild(heartIconContent);
        icon.appendChild(cartIcon);
        icon.appendChild(viewIcon);
        icon.appendChild(heartIcon);
        imgBox.appendChild(img);
        imgBox.appendChild(icon);

        const detail = document.createElement("div");
        detail.className = "detail";
        const cat = document.createElement("p");
        cat.textContent = curElm.Cat;
        const title = document.createElement("h3");
        title.textContent = curElm.Title;
        const price = document.createElement("h4");
        price.textContent = "$" + curElm.Price;
        detail.appendChild(cat);
        detail.appendChild(title);
        detail.appendChild(price);

        productBox.appendChild(imgBox);
        productBox.appendChild(detail);
        productContainer.appendChild(productBox);
    });
}

function loginWithRedirect() {
    // Define your login logic here
}

// Initialize with all products
setProduct(Productdetail);




// const url = 'http://127.0.0.1:5500/productdetails.js';

//  fetch(url)
//  .then (response => response.json()) //object
//  .then (result => {
//    console.log(result)//array

//    let a = [];
//    a = result;
  
//    let div_area = document.getElementById("products");

//    let show ="";

//       a.forEach(
//         function(item){

//         show += 
//         `<div class="card d-inline-flex" style="width: 18rem;">
//             <img src="${item.img}" class="card-img-top" alt"...">
//             <div class="card-body">
//             <p class="card-text" id="p${item.id} hidden>${item.id}</p>
//             <h5 class="card-text" id="prod${item.id}"> ${item.product}</h5>
//             <p class="card-text" id="pri${item.id}">${item.price}</p>
//             <a href="#"  class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Buy</a>

//         //  Modal
//         <div class="modal fade" id="exampleModal" tabindex"-1" aria-labelledby="exampleModalLabel" aria-hidden>
//         <div class="modal-dialog">
//         <div class="modal-content">
//         <div class="modal-header">
//           <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
//           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//         </div>
//         <div class="modal-body">
//         <p class="card-text" id="p${item.id} hidden>${item.id}</p>
//         <h5 class="card-text" id="prod${item.id}"> ${item.product}</h5>
//         <p class="card-text" id="pri${item.id}">${item.price}</p>
//         </div>
//         <div class="modal-footer">
//           <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//           <button type="button" class="btn btn-primary"Save changes</button>
//           </div>
//           </div>
//         <div>
//         </div>
//         `;

//       });

//       div_area.innerHTML = show;
// })
   

// function addOrder(id){
//   let array = localStorage.getItem("order");
//   console.log(array);

//   if (array == null){
//     let orderlist = [];
//     let new_id = document.getElementById("p"+id).innerText;
//     let new_prod = document.getElementById("prod"+id).innerText;
//     let new_price = document.getElementById("prod"+id).innerText;
//     orderlist.push({id: new_id, product: new_prod, price: new_price});
//     localStorage.setItem("order,",JSON.stringify(orderlist));
//   }

// }





// const productDetail = [
    
//         {
//             id:1,
//             Title:"TT COURSE – RADIANCE",
//             Cat: 'Full-face',
//             Brand: 'KYT',
//             Price: '150',
//             Img: '../img/kythelmet1.png'
//         },
//         {
//             id:2,
//             Title:"NF-R – Hyper Fluo Yellow",
//             Cat: 'Full-face',
//             Brand: 'KYT',
//             Price: '185',
//             Img: '../img/kythyperfluo.png'
//         },
//         {
//             id:3,
//             Title:"NF-R STEEL FLOWER RED",
//             Cat: 'Full-face',
//             Brand: 'KYT',
//             Price: '150',
//             Img: '../img/kythelmet7.png'
//         },
//         {
//             id:4,
//             Title:"KR-1 – Plain Matt Black",
//             Cat: 'Full-face',
//             Brand: 'KYT',
//             Price: '280',
//             Img: '../img/kytplainmatt.png'
//         },
//         {
//             id:5,
//             Title:"NF-J – BROC PARKES REPLICA",
//             Cat: 'Half-face',
//             Brand: 'KYT',
//             Price: '135',
//             Img: '../img/kythelmet9.png'
//         },
//         {
//             id:6,
//             Title:"NF-J – DENNIS FOGGIA LEOPARD REPLICA",
//             Cat: 'Half-face',
//             Brand: 'KYT',
//             Price: '135',
//             Img: '../img/kythelmet10.png'
//         },
//         {
//             id:7,
//             Title:"NF-J – ESPARGARO REPLICA 2020",
//             Cat: 'Half-face',
//             Brand: 'KYT',
//             Price: '135',
//             Img: '../img/kythelmet11.png'
//         },
//         {
//             id:8,
//             Title:"NF-J – JAUME MASIA REPLICA",
//             Cat: 'Half-face',
//             Brand: 'KYT',
//             Price: '135',
//             Img: '../img/kytJAUME-MASIA-REPLICA1.png'
//         },
//         {
//             id:9,
//             Title:"NF-J – RADAR AQUA BLUE",
//             Cat: 'Half-face',
//             Brand: 'KYT',
//             Price: '135',
//             Img: '../img/kythelmet13.png'
//         },
//         {
//             id:10,
//             Title:"Strike Eagle – Potion Yellow",
//             Cat: 'Off-Road',
//             Brand: 'KYT',
//             Price: '225',
//             Img: '../img/kytpotion.png'
//         },
//         {
//             id:11,
//             Title:"Strike Eagle – Simpson Replica Orange",
//             Cat: 'Off-Road',
//             Brand: 'KYT',
//             Price: '225',
//             Img: '../img/kythelmet15.png'
//         },
//         {
//             id:12,
//             Title:"Strike Eagle – Web Matt White/Blue",
//             Cat: 'Off-Road',
//             Brand: 'KYT',
//             Price: '225',
//             Img: '../img/kythelmet16.png'
//         },
//         {
//             id:13,
//             Title:"TT COURSE – Photochromic Visor",
//             Cat: 'Accessories',
//             Brand: 'KYT',
//             Price: '45',
//             Img: '../img/kytacceso.png'
//         },
//         {
//             id:14,
//             Title:"YG DESIGN – Wireless Charging Phone Mount",
//             Cat: 'Accessories',
//             Brand: 'KYT',
//             Price: '40',
//             Img: '../img/kythelmetaccesso2.jpeg'
//         },
           
    
// ];

// let cart = [];

// function calculateTotalPHP() {
//     let totalPHP = 0;
//     products.forEach(product => {
//       totalPHP += product.pricePHP * product.quantity;
//     });
//     return totalPHP;
//   }

// document.addEventListener('DOMContentLoaded', () => {
//     const productsContainer = document.getElementById('app');

//     productDetail.sort((a, b) => a.id - b.id);

//     productDetail.forEach((product) => {
//       // Create a product box element and populate it with data
//       const productBox = document.createElement("div");
//       productBox.classList.add("box");
//       productBox.setAttribute("data-category", `${product.Cat} ${product.Brand}`);
    


//       // Create the content for the product box
//   const imgBox = document.createElement("div");
//   imgBox.classList.add("img_box");


//       const productImage = document.createElement('img');
//       productImage.src = product.Img;
//       productImage.alt = product.Title;

//       imgBox.appendChild(productImage);

//       const icons = document.createElement('div');
//       icons.classList.add('icons');

      
//       const cartIcon = document.createElement('button');
//       cartIcon.classList.add('icon', 'cart-icon');
//       cartIcon.innerHTML = '<i class="fas fa-shopping-cart"></i>';
//       cartIcon.addEventListener('click', () => {
//         addToCartModal(product);
//         updateCartCount();
//         alert('Product added to cart!');
//     });

//     const viewIcon = document.createElement('button');
//     viewIcon.classList.add('icon', 'view-icon');
//     viewIcon.innerHTML = '<i class="far fa-eye"></i>';
//     viewIcon.addEventListener('click', () => {
//         openProductDetail(product);
//     });

//     const heartIcon = document.createElement('button');
//     heartIcon.classList.add('icon', 'heart-icon');
//     heartIcon.innerHTML = '<i class="far fa-heart"></i>';
//     let isHearted = false;

//     heartIcon.addEventListener('click', () => {
//         if (isHearted) {
//             heartIcon.innerHTML = '<i class="far fa-heart"></i>';
//             isHearted = false;
//         } else {
//             heartIcon.innerHTML = '<i class="fas fa-heart"></i>';
//             isHearted = true;
//         }
//     });

//     icons.appendChild(cartIcon);
//     icons.appendChild(viewIcon);
//     icons.appendChild(heartIcon);
//     imgBox.appendChild(icons);

//       productBox.appendChild(imgBox);

//       const detail = document.createElement('div');
//       detail.classList.add('detail');

//       const category = document.createElement('p');
//       category.textContent = product.Cat;

//       const title = document.createElement('h3');
//       title.textContent = product.Title;

//       const pesoPrice = product.Price * 50.0;

//       const price = document.createElement('h4');
//       price.textContent = `₱${pesoPrice.toFixed(2)}`;

//       detail.appendChild(category);
//       detail.appendChild(title);
//       detail.appendChild(price);
//       productBox.appendChild(detail);

//       productBox.addEventListener('click', (e) => {
//         if (!e.target.classList.contains('icon')) {
//           openProductDetail(product);
//         }
//       });

//       productsContainer.appendChild(productBox);
//     });

//     function addToCartModal(product) {
//         console.log('Added to cart:', product.Title);
//     }
    

//     allProducts();
//   });

//   function renderProduct(product) {
//     const productBox = document.createElement("div");
//     // ... (rest of the product rendering code)

//     productBox.addEventListener("click", e => {
//       if (!e.target.classList.contains("icon")) {
//         openProductDetail(product);
//       }
//     });

//     productsContainer.appendChild(productBox);
//   }

//   function openProductDetail(product) {
//     const productDetailContent = document.getElementById('productDetailContent');


//     productDetailContent.innerHTML = `
//         <h2>${product.Title}</h2>
//         <p>Category: ${product.Cat}</p>
//         <img src="${product.Img}" alt="${product.Title}" class="modal-product-image">
//         <h4>Price: ₱${(parseFloat(product.Price) * 50.0).toFixed(2)}</h4>
//     `;

//     $('#productDetailModal').modal('show');  // Show the modal
//   }


//   function addToCart(product) {
//     let existingItem = cart.find(x => x.id === product.id);
  
//     if (existingItem) {
//       existingItem.qty += 1;
//     } else {
//       const newItem = { ...product, qty: 1 };
//       cart.push(newItem);
//     }
  
//     updateCartUI();
//     alert("Product added to cart!");
//   }

//   function addToCart() {
//     console.log('isLoggedIn:', isLoggedIn);
//   }
//     // Check if the user is logged in
//     if (!isLoggedIn) {
//         // Use SweetAlert for the message
//         Swal.fire({
//             icon: 'warning',
//             title: 'You need to log in before proceeding to checkout.',
//             text: 'Click the button to log in.',
//             showCancelButton: true,
//             confirmButtonText: 'Login',
//             cancelButtonText: 'Cancel',
//             customClass: {
//                 container: 'custom-swal-container',
//                 popup: 'custom-swal-popup',
//                 title: 'custom-swal-title',
//                 cancelButton: 'custom-swal-button',
//                 confirmButton: 'custom-swal-button'
//             }
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 window.location.href = 'login.html';
//             }
//         });
      
    
//        } else {
       
//         localStorage.setItem('username', 'exampleUser'); 

//         // Redirect to the product page for making orders
//         window.location.href = 'cart2.html';
//        }
//   function updateCartUI() {
//     const cartContent = document.getElementById('cartContent');
//     cartContent.innerHTML = ''; // Clear previous content
  
//     cart.forEach(item => {
//       const cartItemDiv = document.createElement('div');
//       cartItemDiv.classList.add('cart_item');
  
//       cartItemDiv.innerHTML = `
//         <div class="img_box">
//           <img src="${item.Img}" alt="${item.Title}">
//         </div>
//         <div class="detail">
//           <div class="info">
//             <h4>${item.Cat}</h4>
//             <h3>${item.Title}</h3>
//             <p>Price: ₱${parseFloat(item.Price) * 50.0}</p>
//             <div class="qty">
//               <button class="incqty" onclick="incQty(${item.id})">+</button>
//               <input type="text" value="${item.qty}" disabled>
//               <button class="decqty" onclick="decQty(${item.id})">-</button>
//             </div>
//             <h4 class="subtotal">Subtotal: ₱${parseFloat(item.Price) * item.qty * 50.0}</h4>
//           </div>
//           <div class="close">
//             <button onclick="removeProduct(${item.id})">Remove</button>
//           </div>
//         </div>
//       `;
  
//       cartContent.appendChild(cartItemDiv);
//     });
  
//     const totalPriceElement = document.querySelector(".totalprice");
//     totalPriceElement.textContent = `Total: ₱${calculateTotalPHP()}`;
//   }

//   function calculateTotalPHP() {
//     let totalPHP = 0;
//     cart.forEach(item => {
//       totalPHP += parseFloat(item.Price) * item.qty * 50.0;
//     });
//     return totalPHP.toFixed(2);
//   }
  
//   function incQty(itemId) {
//     const item = cart.find(x => x.id === itemId);
//     if (item) {
//       item.qty += 1;
//       updateCartUI();
//     }
//   }
  
//   function decQty(itemId) {
//     const item = cart.find(x => x.id === itemId);
//     if (item && item.qty > 0) {
//       item.qty -= 1;
//       updateCartUI();
//     }
//   }
  
//   function removeProduct(itemId) {
//     cart = cart.filter(x => x.id !== itemId);
//     updateCartUI();
//   }

//   function allProducts() {
//     const allProductBoxes = document.querySelectorAll('.box');
//     allProductBoxes.forEach(box => {
//       box.style.display = 'inline-block';
//     });
//   }

// function filterBrandMain(brand) {
//     const allProductBoxes = document.querySelectorAll('.productbox .box');
//     allProductBoxes.forEach(box => {
//         const boxBrand = box.getAttribute('data-brand');
//         if (brand === 'All Brands' || boxBrand === brand) {
//             box.style.display = 'inline-block';
//         } else {
//             box.style.display = 'none';
//         }
//     });
// }
// function filterProduct(category) {
//   const allProductBoxes = document.querySelectorAll('.productbox .box');
//   allProductBoxes.forEach(box => {
//       if (category === 'All Products' || category === 'Full-face' || box.getAttribute('data-category') === category) {
//           box.style.display = 'inline-block';
//       } else {
//           box.style.display = 'none';
//       }
//   });
// }





// filterProduct('Full-face'); 


// // Event listener for the "Add to Cart" button in the modal
// document.getElementById('productDetailModal').addEventListener('click', (event) => {
//     if (event.target.classList.contains('btn-primary')) {
//         // Add to Cart button was clicked
//         addToCart(selectedProductId);
//         $('#productDetailModal').modal('hide'); // Close the modal
//     }
// });


// function closeModal() {
//     const productDetailModal = document.getElementById('productDetailModal');
//     productDetailModal.style.display = 'none';
//   }
 
//   function addToCart(product) {
//     console.log('Added to cart:', product.Title);
// }

//     const category = 'All Products'; 
// const filteredProductBoxes = document.querySelectorAll(`.productbox .box[data-category="${category}"]`);
// filteredProductBoxes.forEach(box => {
//     box.style.display = 'inline-block';
// });

//     filteredProductBoxes.forEach(box => {
//         box.style.display = 'inline-block';
//       });

    
//       let openShopping = document.querySelector('.shopping');
//       let closeShopping = document.querySelector('.closeShopping');
      
//       openShopping.addEventListener('click', () => {
//           body.classList.add('active');
//       });
//       closeShopping.addEventListener('click', () => {
//           body.classList.remove('active');
//       });



//       function openProductDetail(product) {
//         // Implement what happens when you click on a product
//         console.log('Clicked on product:', product);
//         const productDetailModal = document.getElementById('productDetailModal');
//       const productDetailContent = document.getElementById('productDetailContent');
    
//         // Clear previous content
//         productDetailContent.innerHTML = '';
    
        
//       // Render product details
//       const productImage = document.createElement('img');
//       productImage.src = product.Img;
//       productImage.alt = product.Title;
    
//       const productTitle = document.createElement('h3');
//       productTitle.textContent = product.Title;
    
//       const productCategory = document.createElement('p');
//       productCategory.textContent = `Category: ${product.Cat}`;
    
//       const productPrice = document.createElement('h4');
//       productPrice.textContent = `Price: $${product.Price}`;
    
//       productDetailContent.appendChild(productImage);
//       productDetailContent.appendChild(productTitle);
//       productDetailContent.appendChild(productCategory);
//       productDetailContent.appendChild(productPrice);
    
//       productDetailModal.style.display = 'block';
//     }
    
//     document.addEventListener('DOMContentLoaded', () => {
//         const app = document.getElementById('app');
    
//             // // Product Title (outside the loop)
//             // const productsHeading = document.createElement('h2');
//             // productsHeading.textContent = 'Products';
//             // app.appendChild(productsHeading);
        
    
//         // Render products
//         const productContainer = document.createElement('div');
//         productContainer.classList.add('products');
    
    
//         const productsContainer = document.createElement('div');
//         productsContainer.classList.add('container');
    
        
//         // const productTitleContainer = document.createElement('div');
//         // productTitleContainer.classList.add('product-title-container');
//         // productTitleContainer.textContent = 'Products';
    
//             // Display "All Products" category at the beginning
//             const allProductsCategory = document.createElement('div');
//             allProductsCategory.classList.add('box');
//             allProductsCategory.setAttribute('data-category', 'All Products');
    
//         productDetail.forEach(product => {
//             const productBox = document.createElement('div');
//             productBox.classList.add('box');
//             productBox.setAttribute('data-category', product.Cat);
    
//             const imgBox = document.createElement('div');
//             imgBox.classList.add('img_box');
    
//             const productImage = document.createElement('img');
//             productImage.src = product.Img;
//             productImage.alt = product.Title;
          
    
//             imgBox.appendChild(productImage);
    
//             const icon = document.createElement('div');
//             icon.classList.add('icon');
    
//             const cartIcon = document.createElement('li');
//             cartIcon.innerHTML = '<i class="fas fa-shopping-cart"></i>';
//             cartIcon.addEventListener('click', () => {
//                 console.log('Clicked cart icon for product:', product);
//             });
    
//             icon.appendChild(cartIcon);
//             imgBox.appendChild(icon);
//             productBox.appendChild(imgBox);
    
//             const detail = document.createElement('div');
//             detail.classList.add('detail');
    
//             const category = document.createElement('p');
//             category.textContent = product.Cat;
    
//             const title = document.createElement('h3');
//             title.textContent = product.Title;
    
//             const price = document.createElement('h4');
//             price.textContent = `$${product.Price}`;
    
//             detail.appendChild(category);
//             detail.appendChild(title);
//             detail.appendChild(price);
    
//             productBox.appendChild(detail);
    
//             productBox.addEventListener('click', () => openProductDetail(product));
    
//             productsContainer.appendChild(productBox);
//         });
    
//         productContainer.appendChild(productsContainer);
//         app.appendChild(productContainer);
    
//        // Call allProducts() initially to display all products
//        allProducts();
//     });
    
//     function allProducts() {
//         const allProductBoxes = document.querySelectorAll('.productbox .box');
//         allProductBoxes.forEach(box => {
//             box.style.display = 'inline-block';
//         });
//     }
    
//     // Call allProducts() initially to display all products
//     allProducts();
    
    
//        // Functions to handle opening/closing modal and filtering products
    
    
//     // ... other code ...
    
//     function filterProduct(category) {
//         const allProductBoxes = document.querySelectorAll('.productbox .box');
//         allProductBoxes.forEach(box => {
//             if (category === 'All Products' || category === 'Full-face' || box.getAttribute('data-category') === category) {
//                 box.style.display = 'inline-block';
//             } else {
//                 box.style.display = 'none';
//             }
//         });
//     }
    
    
//     // ... other code ...
    

//     function openModal() {
//       document.getElementById('productDetailModal').style.display = 'block';
//     }
  
//   // Function to close product detail modal
//   function closeModal() {
//       const productDetailModal = document.getElementById('productDetailModal');
//       productDetailModal.style.display = 'none';
//     }
    
//     // Function to add the product to the cart
//     function addToCart() {
//       // Your logic to add the product to the cart goes here
//       console.log('Product added to cart');
//     }
  
     
  
  
//       filteredProductBoxes.forEach(box => {
//           box.style.display = 'inline-block';
//         });
        


