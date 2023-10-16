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
            Img: './img/kythyperfluo.png'
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
            Img: './img/kytplainmatt.png'
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
            Img: './img/kytJAUME-MASIA-REPLICA1.png'
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
            Img: './img/kytpotion.png'
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
            Img: './img/kythyperfluo.png'
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
            Img: './img/kytplainmatt.png'
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
            Img: './img/kytJAUME-MASIA-REPLICA1.png'
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
            Img: './img/kytpotion.png'
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

document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.getElementById('app');

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

      const icons = document.createElement('div');
      icons.classList.add('icons');
      
      const cartIcon = document.createElement('button');
      cartIcon.classList.add('icon', 'cart-icon');
      cartIcon.innerHTML = '<i class="fas fa-shopping-cart"></i>';
      cartIcon.addEventListener('click', () => {
        addToCart(product);
        updateCartCount();
        alert('Product added to cart!');
      });
      
      function addToCart(product) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
      }
      
      function updateCartCount() {
        const cartCountElement = document.getElementById('cartCount');
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cartCountElement.textContent = cart.length;
      }
      

      const viewIcon = document.createElement('button');
      viewIcon.classList.add('icon', 'view-icon');
      viewIcon.innerHTML = '<i class="far fa-eye"></i>';
      viewIcon.addEventListener('click', () => {
        openProductDetail(product);
      });

const heartIcon = document.createElement('button');
heartIcon.classList.add('icon', 'heart-icon');
heartIcon.innerHTML = '<i class="far fa-heart"></i>';
let isHearted = false;  // Flag to track if hearted

heartIcon.addEventListener('click', () => {
  if (isHearted) {
    // If already hearted, remove the highlight
    heartIcon.innerHTML = '<i class="far fa-heart"></i>';
    isHearted = false;
  } else {
    // If not hearted, add the highlight
    heartIcon.innerHTML = '<i class="fas fa-heart"></i>';
    isHearted = true;
  }
});

icons.appendChild(cartIcon);
icons.appendChild(viewIcon);
icons.appendChild(heartIcon);
imgBox.appendChild(icons);
      productBox.appendChild(imgBox);

      const detail = document.createElement('div');
      detail.classList.add('detail');

      const category = document.createElement('p');
      category.textContent = product.Cat;

      const title = document.createElement('h3');
      title.textContent = product.Title;

      const pesoPrice = product.Price * 50.0;

      const price = document.createElement('h4');
      price.textContent = `₱${pesoPrice.toFixed(2)}`;

      detail.appendChild(category);
      detail.appendChild(title);
      detail.appendChild(price);
      productBox.appendChild(detail);

      productBox.addEventListener('click', (e) => {
        if (!e.target.classList.contains('icon')) {
          openProductDetail(product);
        }
      });

      productsContainer.appendChild(productBox);
    });

    allProducts(); // Display all products initially
  });

  function openProductDetail(product) {
    const productDetailContent = document.getElementById('productDetailContent');

    // Set up the product detail content based on the selected product
    productDetailContent.innerHTML = `
        <h2>${product.Title}</h2>
        <p>Category: ${product.Cat}</p>
        <img src="${product.Img}" alt="${product.Title}" class="modal-product-image">
        <h4>Price: ₱${(parseFloat(product.Price) * 50.0).toFixed(2)}</h4>
    `;

    $('#productDetailModal').modal('show');  // Show the modal
  }

  function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to cart!');
    updateCartCount();  // Update the cart count
    renderCart();       // Update the cart display
  }

  function updateCartCount() {
    const cartCountElement = document.getElementById('cartCount');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartCountElement.textContent = cart.length;
  }

  function allProducts() {
    const allProductBoxes = document.querySelectorAll('.box');
    allProductBoxes.forEach(box => {
      box.style.display = 'inline-block';
    });
  }

function filterBrandMain(brand) {
    const allProductBoxes = document.querySelectorAll('.productbox .box');
    allProductBoxes.forEach(box => {
        const boxBrand = box.getAttribute('data-brand');
        if (brand === 'All Brands' || boxBrand === brand) {
            box.style.display = 'inline-block';
        } else {
            box.style.display = 'none';
        }
    });
}

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
 
  function addToCart(product) {
    console.log('Added to cart:', product.Title);
}


   
    const category = 'All Products'; 
const filteredProductBoxes = document.querySelectorAll(`.productbox .box[data-category="${category}"]`);
filteredProductBoxes.forEach(box => {
    box.style.display = 'inline-block';
});


    filteredProductBoxes.forEach(box => {
        box.style.display = 'inline-block';
      });



      const itemsPerPage = 4; // Number of items to display per page
      let currentPage = 1;
      
      function paginateProductBoxes() {
          const startIndex = (currentPage - 1) * itemsPerPage;
          const endIndex = startIndex + itemsPerPage;
          const productsToDisplay = productDetail.slice(startIndex, endIndex);
      
          const productBox = document.getElementById('productBox');
          productBox.innerHTML = ''; // Clear previous content
      
          productsToDisplay.forEach(product => {
              const productBoxItem = document.createElement('div');
              productBoxItem.classList.add('box');
              productBoxItem.setAttribute('data-category', product.Cat);
      
              // Create elements for product details (image, title, category, price)
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
      
              // Add event listener for cart icon
              cartIcon.addEventListener('click', () => {
                  console.log('Clicked cart icon for product:', product);
              });
      
              icon.appendChild(cartIcon);
              imgBox.appendChild(icon);
              productBoxItem.appendChild(imgBox);
      
              const detail = document.createElement('div');
              detail.classList.add('detail');
      
              const category = document.createElement('p');
              category.textContent = product.Cat;
      
              const title = document.createElement('h3');
              title.textContent = product.Title;
      
              const price = document.createElement('h4');
              price.textContent = `₱${parseFloat(product.Price) * 50.0}`;
      
              detail.appendChild(category);
              detail.appendChild(title);
              detail.appendChild(price);
              productBoxItem.appendChild(detail);
      
              productBox.appendChild(productBoxItem);
          });
      }

            // Get the pagination buttons
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

// Add event listeners to the pagination buttons
prevButton.addEventListener('click', prevPage);
nextButton.addEventListener('click', nextPage);
      
      function nextPage() {
          const maxPages = Math.ceil(productDetail.length / itemsPerPage);
          if (currentPage < maxPages) {
              currentPage++;
              paginateProductBoxes();
          }
      }
      
      function prevPage() {
          if (currentPage > 1) {
              currentPage--;
              paginateProductBoxes();
          }
      }
      
      // Call this function initially to display the first page of items
      paginateProductBoxes();



      