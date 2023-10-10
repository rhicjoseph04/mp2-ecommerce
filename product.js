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

const productDetail = [
    
        {
            id:1,
            Title:"TT COURSE – RADIANCE",
            Cat: 'Full-face',
            Price: '150',
            Img: './img/kythelmet1.png'
        },
        {
            id:2,
            Title:"NF-R – Hyper Fluo Yellow",
            Cat: 'Full-face',
            Price: '185',
            Img: './img/kythelmet6.jpg'
        },
        {
            id:3,
            Title:"NF-R STEEL FLOWER RED",
            Cat: 'Full-face',
            Price: '150',
            Img: './img/kythelmet7.png'
        },
        {
            id:4,
            Title:"KR-1 – Plain Matt Black",
            Cat: 'Full-face',
            Price: '280',
            Img: './img/kythelmet8.JPG'
        },
        {
            id:5,
            Title:"NF-J – BROC PARKES REPLICA",
            Cat: 'Half-face',
            Price: '135',
            Img: './img/kythelmet9.png'
        },
        {
            id:6,
            Title:"NF-J – DENNIS FOGGIA LEOPARD REPLICA",
            Cat: 'Half-face',
            Price: '135',
            Img: './img/kythelmet10.png'
        },
        {
            id:7,
            Title:"NF-J – ESPARGARO REPLICA 2020",
            Cat: 'Half-face',
            Price: '135',
            Img: './img/kythelmet11.png'
        },
        {
            id:8,
            Title:"NF-J – JAUME MASIA REPLICA",
            Cat: 'Half-face',
            Price: '135',
            Img: './img/kythelmet12.PNG'
        },
        {
            id:9,
            Title:"NF-J – RADAR AQUA BLUE",
            Cat: 'Half-face',
            Price: '135',
            Img: './img/kythelmet13.png'
        },
        {
            id:10,
            Title:"Strike Eagle – Potion Yellow",
            Cat: 'Off-Road',
            Price: '225',
            Img: './img/kythelmet14.JPG'
        },
        {
            id:11,
            Title:"Strike Eagle – Simpson Replica Orange",
            Cat: 'Off-Road',
            Price: '225',
            Img: './img/kythelmet15.png'
        },
        {
            id:12,
            Title:"Strike Eagle – Web Matt White/Blue",
            Cat: 'Off-Road',
            Price: '225',
            Img: './img/kythelmet16.png'
        },
        {
            id:13,
            Title:"TT COURSE – Photochromic Visor",
            Cat: 'Accessories',
            Price: '45',
            Img: './img/kytacceso.png'
        },
        {
            id:14,
            Title:"YG DESIGN – Wireless Charging Phone Mount",
            Cat: 'Accessories',
            Price: '40',
            Img: './img/kythelmetaccesso2.jpeg'
        },
    
];

function openProductDetail(product) {
    const productDetailModal = document.getElementById('productDetailModal');
    const productDetailContent = document.getElementById('productDetailContent');
    
    // Set up the product detail content based on the selected product
    // For example:
    productDetailContent.innerHTML = `<h2>${product.name}</h2><p>${product.description}</p>`;
  
    
    productDetailModal.style.display = 'block';

    function closeProductDetail() {
        const productDetailModal = document.getElementById('productDetailModal');
        productDetailModal.style.display = 'none';
      }
      
      closeProductDetail();


// Render product details
const productImage = document.createElement('img');
productImage.src = product.Img;
productImage.alt = product.Title;

const productTitle = document.createElement('h3');
productTitle.textContent = product.Title;

const productCategory = document.createElement('p');
productCategory.textContent = `Category: ${product.Cat}`;

// Convert the price to peso value
const usdPrice = parseFloat(product.Price);
const conversionRate = 50.0;  // Replace with your actual conversion rate
const pesoPrice = usdPrice * conversionRate;

const productPrice = document.createElement('h4');
productPrice.textContent = `Price: ₱${pesoPrice.toFixed(2)}`;

const addToCartButton = document.createElement('button');
addToCartButton.textContent = 'Add to Cart';

// Set event listener for "Add to Cart" button
addToCartButton.addEventListener('click', () => {
    addToCart(product);
});

    productDetailContent.appendChild(productImage);
    productDetailContent.appendChild(productTitle);
    productDetailContent.appendChild(productCategory);
    productDetailContent.appendChild(productPrice);
    productDetailContent.appendChild(addToCartButton);

    // Display the product detail modal
    openModal();
}

function addToCart(product) {
    // Implement your logic to add the product to the cart
    console.log('Added to cart:', product.Title);

    // Close the product detail modal after adding to cart
    closeModal();
}

// ... rest of your code ...

document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');

        // // Product Title (outside the loop)
        // const productsHeading = document.createElement('h2');
        // productsHeading.textContent = 'Products';
        // app.appendChild(productsHeading);
    

    // Render products
    const productContainer = document.createElement('div');
    productContainer.classList.add('products');


    const productsContainer = document.createElement('div');
    productsContainer.classList.add('container');

    
    // const productTitleContainer = document.createElement('div');
    // productTitleContainer.classList.add('product-title-container');
    // productTitleContainer.textContent = 'Products';

        // Display "All Products" category at the beginning
        const allProductsCategory = document.createElement('div');
        allProductsCategory.classList.add('box');
        allProductsCategory.setAttribute('data-category', 'All Products');

    productDetail.forEach(product => {
        const productBox = document.createElement('div');
        productBox.classList.add('box');
        productBox.setAttribute('data-category', product.Cat);

        const imgBox = document.createElement('div');
        imgBox.classList.add('img_box');

        const productImage = document.createElement('img');
        productImage.src = product.Img;
        productImage.alt = product.Title;
      

        imgBox.appendChild(productImage);

        const icon = document.createElement('div');
        icon.classList.add('icon');

        const cartIcon = document.createElement('li');
        cartIcon.innerHTML = '<i class="fas fa-shopping-cart"></i>';
        cartIcon.addEventListener('click', () => {
            console.log('Clicked cart icon for product:', product);
        });

        icon.appendChild(cartIcon);
        imgBox.appendChild(icon);
        productBox.appendChild(imgBox);

        const detail = document.createElement('div');
        detail.classList.add('detail');

        const category = document.createElement('p');
        category.textContent = product.Cat;

        const title = document.createElement('h3');
        title.textContent = product.Title;
        function convertToPeso(usdPrice, conversionRate) {
            return usdPrice * conversionRate;
        }
        
        const usdPrice = product.Price; 
        const conversionRate = 50.0; 
        
        const pesoPrice = convertToPeso(usdPrice, conversionRate);
        
        const price = document.createElement('h4');
        price.textContent = `₱${pesoPrice.toFixed(2)}`;
        
        detail.appendChild(category);
        detail.appendChild(title);
        detail.appendChild(price);

        productBox.appendChild(detail);

        productBox.addEventListener('click', () => openProductDetail(product));

        productsContainer.appendChild(productBox);
    });

    productContainer.appendChild(productsContainer);
    app.appendChild(productContainer);

   allProducts();
});

function allProducts() {
    const allProductBoxes = document.querySelectorAll('.productbox .box');
    allProductBoxes.forEach(box => {
        box.style.display = 'inline-block';
    });
}

allProducts();



function filterProduct(category) {
    const allProductBoxes = document.querySelectorAll('.productbox .box');
    allProductBoxes.forEach(box => {
        const boxCategory = box.getAttribute('data-category');
        if (category === 'All Products' || boxCategory === category) {
            box.style.display = 'inline-block';
        } else {
            box.style.display = 'none';
        }
    });
}

filterProduct('Full-face'); 




   function openModal() {
    document.getElementById('productDetailModal').style.display = 'block';
  }


function closeModal() {
    const productDetailModal = document.getElementById('productDetailModal');
    productDetailModal.style.display = 'none';
  }
 
  function addToCart() {
   
    console.log('Product added to cart');
  }

   
    const category = 'All Products'; 
const filteredProductBoxes = document.querySelectorAll(`.productbox .box[data-category="${category}"]`);
filteredProductBoxes.forEach(box => {
    box.style.display = 'inline-block';
});


    filteredProductBoxes.forEach(box => {
        box.style.display = 'inline-block';
      });

      function toggleForm(formType) {
        const loginContainer = document.getElementById('loginContainer');
        const signupContainer = document.getElementById('signupContainer');
    
        if (formType === 'login') {
            loginContainer.style.display = 'block';
            signupContainer.style.display = 'none';
        } else if (formType === 'signup') {
            loginContainer.style.display = 'none';
            signupContainer.style.display = 'block';
        }
    }
    
    document.getElementById('loginForm').addEventListener('submit', function (event) {
        event.preventDefault();
        // Handle login form submission
        const loginUsername = event.target.loginUsername.value;
        const loginPassword = event.target.loginPassword.value;
        // Handle login logic here
    });
    
    document.getElementById('signupForm').addEventListener('submit', function (event) {
        event.preventDefault();
        // Handle signup form submission
        const signupUsername = event.target.signupUsername.value;
        const signupPassword = event.target.signupPassword.value;
        // Handle signup logic here
    });
    
      
    function toggleModal() {
        $('#loginModal').modal('toggle');
      }
      
      
      
      function login(event) {
        event.preventDefault(); // Prevent form submission
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
      
        // Implement your login logic here
      
        // For this example, we'll just display an alert
        alert('Login successful!');
      }
      
      function toggleResetPasswordModal() {
        // Close all open modals
        $('.modal').modal('hide');
        $('#resetPasswordModal').modal('toggle');
      }
      function resetPassword(event) {
        event.preventDefault(); // Prevent form submission
        const email = document.getElementById('resetEmail').value; // Use the correct ID
      
        // Implement your reset password logic here
      
        // For this example, we'll just display an alert
        alert('Password reset email sent to: ' + email);
      
        // Close the reset password modal after clicking "Send Email"
        $('#resetPasswordModal').modal('hide');
      }