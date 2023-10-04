

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
    // Implement what happens when you click on a product
    console.log('Clicked on product:', product);
    const productDetailModal = document.getElementById('productDetailModal');
  const productDetailContent = document.getElementById('productDetailContent');

    // Clear previous content
    productDetailContent.innerHTML = '';

    
  // Render product details
  const productImage = document.createElement('img');
  productImage.src = product.Img;
  productImage.alt = product.Title;

  const productTitle = document.createElement('h3');
  productTitle.textContent = product.Title;

  const productCategory = document.createElement('p');
  productCategory.textContent = `Category: ${product.Cat}`;

  const productPrice = document.createElement('h4');
  productPrice.textContent = `Price: $${product.Price}`;

  productDetailContent.appendChild(productImage);
  productDetailContent.appendChild(productTitle);
  productDetailContent.appendChild(productCategory);
  productDetailContent.appendChild(productPrice);

  productDetailModal.style.display = 'block';
}

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

        const price = document.createElement('h4');
        price.textContent = `$${product.Price}`;

        detail.appendChild(category);
        detail.appendChild(title);
        detail.appendChild(price);

        productBox.appendChild(detail);

        productBox.addEventListener('click', () => openProductDetail(product));

        productsContainer.appendChild(productBox);
    });

    productContainer.appendChild(productsContainer);
    app.appendChild(productContainer);

   // Call allProducts() initially to display all products
   allProducts();
});

function allProducts() {
    const allProductBoxes = document.querySelectorAll('.productbox .box');
    allProductBoxes.forEach(box => {
        box.style.display = 'inline-block';
    });
}

// Call allProducts() initially to display all products
allProducts();


   // Functions to handle opening/closing modal and filtering products


// ... other code ...

function filterProduct(category) {
    const allProductBoxes = document.querySelectorAll('.productbox .box');
    allProductBoxes.forEach(box => {
        if (category === 'All Products' || category === 'Full-face' || box.getAttribute('data-category') === category) {
            box.style.display = 'inline-block';
        } else {
            box.style.display = 'none';
        }
    });
}


// ... other code ...

   function openModal() {
    document.getElementById('productDetailModal').style.display = 'block';
  }

// Function to close product detail modal
function closeModal() {
    const productDetailModal = document.getElementById('productDetailModal');
    productDetailModal.style.display = 'none';
  }
  
  // Function to add the product to the cart
  function addToCart() {
    // Your logic to add the product to the cart goes here
    console.log('Product added to cart');
  }

    // Show products matching the selected category
    const category = 'All Products'; // Assuming you want to initially show all products
const filteredProductBoxes = document.querySelectorAll(`.productbox .box[data-category="${category}"]`);
filteredProductBoxes.forEach(box => {
    box.style.display = 'inline-block';
});


    filteredProductBoxes.forEach(box => {
        box.style.display = 'inline-block';
      });
      
  