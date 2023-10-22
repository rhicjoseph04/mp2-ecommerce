let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity'); 

openShopping.addEventListener('click', () => {
    body.classList.add('active');
});
closeShopping.addEventListener('click', () => {
    body.classList.remove('active');
});

let products = 


[
       
    {
        id:1,
        Title:"TT COURSE – RADIANCE",
        Cat: 'Full-face',
        price: '150',
        pricePHP: 150 * 50, // Assuming 1 USD = 50 PHP
        image: '../img/kythelmet1.png'
    },
    {
        id:2,
        Title:"NF-R – Hyper Fluo Yellow",
        Cat: 'Full-face',
        price: '185',
        pricePHP: 185 * 50, // Assuming 1 USD = 50 PHP
        image: '../img/kythyperfluo.png'
    },
    {
        id:3,
        Title:"NF-R STEEL FLOWER RED",
        Cat: 'Full-face',
        price: '150',
        pricePHP: 150 * 50, // Assuming 1 USD = 50 PHP
        image: '../img/kythelmet7.png'
    },
    {
        id:4,
        Title:"KR-1 – Plain Matt Black",
        Cat: 'Full-face',
        price: '280',
        pricePHP: 280 * 50, // Assuming 1 USD = 50 PHP
        image: '../img/kytplainmatt.png'
    },
    {
        id:5,
        Title:"NF-J – BROC PARKES REPLICA",
        Cat: 'Half-face',
        price: '135',
        pricePHP: 135 * 50, // Assuming 1 USD = 50 PHP
        image: '../img/kythelmet9.png'
    },
    {
        id:6,
        Title:"NF-J – DENNIS FOGGIA LEOPARD REPLICA",
        Cat: 'Half-face',
        price: '135',
        pricePHP: 135 * 50, // Assuming 1 USD = 50 PHP
        image: '../img/kythelmet10.png'
    },
    {
        id:7,
        Title:"NF-J – ESPARGARO REPLICA 2020",
        Cat: 'Half-face',
        price: '135',
        pricePHP: 135 * 50, // Assuming 1 USD = 50 PHP
        image: '../img/kythelmet11.png'
    },
    {
        id:8,
        Title:"NF-J – JAUME MASIA REPLICA",
        Cat: 'Half-face',
        price: '135',
        pricePHP: 135 * 50, // Assuming 1 USD = 50 PHP
        image: '../img/kytJAUME-MASIA-REPLICA1.png'
    },
    {
        id:9,
        Title:"NF-J – RADAR AQUA BLUE",
        Cat: 'Half-face',
        price: '135',
        pricePHP: 135 * 50, // Assuming 1 USD = 50 PHP
        image: '../img/kythelmet13.png'
    },
    {
        id:10,
        Title:"Strike Eagle – Potion Yellow",
        Cat: 'Off-Road',
        price: '225',
        pricePHP: 225 * 50, // Assuming 1 USD = 50 PHP
        image: '../img/kytpotion.png'
    },
    {
        id:11,
        Title:"Strike Eagle – Simpson Replica Orange",
        Cat: 'Off-Road',
        price: '225',
        pricePHP: 225 * 50, // Assuming 1 USD = 50 PHP
        image: '../img/kythelmet15.png'
    },
    {
        id:12,
        Title:"Strike Eagle – Web Matt White/Blue",
        Cat: 'Off-Road',
        price: '225',
        pricePHP: 225 * 50, // Assuming 1 USD = 50 PHP
        image: '../img/kythelmet16.png'
    },
    {
        id:13,
        Title:"TT COURSE – Photochromic Visor",
        Cat: 'Accessories',
        price: '45',
        pricePHP: 45 * 50, // Assuming 1 USD = 50 PHP
        image: '../img/kytacceso.png'
    },
    {
        id:14,
        Title:"YG DESIGN – Wireless Charging Phone Mount",
        Cat: 'Accessories',
        price: '40',
        pricePHP: 40 * 50, // Assuming 1 USD = 50 PHP
        image: '../img/kythelmetaccesso2.jpeg'
    },
    {
        id:14,
        Title:"Espargo Replica 2017",
        Cat: 'Full-Face',
        price: '280',
        pricePHP: 40 * 50, // Assuming 1 USD = 50 PHP
        image: '../img/kytespargo2017.png'
    },

       
]


// Function to calculate the total price in PHP
function calculateTotalPHP() {
    let totalPHP = 0;
    products.forEach(product => {
      totalPHP += product.pricePHP * product.quantity;
    });
    return totalPHP;
  }
// Function to handle adding a product to the cart
  

let listCards = [];

function initApp() {
    products.forEach((value, key) => {
      let newDiv = document.createElement('div');
      newDiv.classList.add('item');
      newDiv.innerHTML = `
        <img src="image/${value.image}"/>
        <div class="title">${value.Title}</div>
        <div class="categories">${value.Cat}</div> 
        <div class="price">₱ ${value.pricePHP.toLocaleString()}</div>
        <button onclick="addToCart(${value.id})">Add to Cart</button> 
        
      `;
      list.appendChild(newDiv);
    });

}

function cancelOrder() {
    clearCartFromSessionStorage();

    Swal.fire({
        icon: 'info',
        title: 'Order has been canceled.',
        showConfirmButton: false,
        timer: 1500,
        customClass: {
            popup: 'custom-swal-popup',
            title: 'custom-swal-title'
        }
    });
}


initApp();

let isLoggedIn = false;  


function loginSuccess() {
    isLoggedIn = true; 
   
    window.location.href = 'cart2.html';
}

function addToCart(key) {
    console.log('isLoggedIn:', isLoggedIn);

   
    if (!isLoggedIn) {
    
        Swal.fire({
            icon: 'warning',
            title: 'You need to log in before proceeding to checkout.',
            text: 'Click the button to log in.',
            showCancelButton: true,
            confirmButtonText: 'Login',
            cancelButtonText: 'Cancel',
            customClass: {
                container: 'custom-swal-container',
                popup: 'custom-swal-popup',
                title: 'custom-swal-title',
                cancelButton: 'custom-swal-button',
                confirmButton: 'custom-swal-button'
            }
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = 'login.html';
            }
        });
    
    } else {
       
        localStorage.setItem('username', 'exampleUser'); 

        window.location.href = 'cart2.html';
    }

   
    Swal.fire({
        icon: 'success',
        title: `${product.Title} added to cart.`,
        showConfirmButton: false,
        timer: 1500,
        customClass: {
            popup: 'custom-swal-popup',
            title: 'custom-swal-title'
        }
    });
}


function setLoginStatus() {
    localStorage.setItem('isLoggedIn', 'true');
}

function loginSuccess() {
    isLoggedIn = true;  
    setLoginStatus();  
  
    window.location.href = 'cart2.html';
}

function checkLoginStatus() {
    const loginStatus = localStorage.getItem('isLoggedIn');
    if (loginStatus === 'true') {
       
        openShopping.removeEventListener('click', showLoginAlert);
        openShopping.addEventListener('click', () => {
            body.classList.add('active');
        });
    }
}

                  
function showLoginAlert() {
    alert('You need to log in before proceeding to checkout.');
    window.location.href = '../login.html';  
}

openShopping.addEventListener('click', () => {
    checkLoginStatus(); 
    body.classList.add('active');
});


checkLoginStatus();

function removeFromCart(key) {
    const product = products.find(item => item.id === key);
    if (listCards[product.id]) {
        listCards[product.id].quantity--;
        if (listCards[product.id].quantity === 0) {
            delete listCards[product.id];
        }
    }
    reloadCart();

    Swal.fire({
        icon: 'info',
        title: `${product.Title} removed from cart.`,
        showConfirmButton: false,
        timer: 1500,
        customClass: {
            popup: 'custom-swal-popup',
            title: 'custom-swal-title'
        }
    });
}


function reloadCart() {
    listCard.innerHTML = '';

    if (Object.keys(listCards).length === 0) {
        let emptyCartMessage = document.createElement('div');
        emptyCartMessage.classList.add('empty-cart-message');
        emptyCartMessage.innerText = 'Cart is empty.';
        listCard.appendChild(emptyCartMessage);
        total.innerText = '₱ 0';
        quantity.innerText = '0';
    } else {
        let totalCount = 0;
        let totalPHP = 0;

        for (const productId in listCards) {
            const product = listCards[productId];
            const { id, image, Title, Cat, pricePHP, quantity } = product;
            totalCount += quantity;
            totalPHP += pricePHP * quantity;

            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${image}"/></div>
                <div>${Title}</div>
                <div>${Cat}</div>
                <div>₱ ${pricePHP.toLocaleString()}</div>
                <div>
                    <button onclick="removeFromCart(${id})">-</button>
                    <div class="count">${quantity}</div>
                    <button onclick="addToCart(${id})" ${quantity === 0 ? 'disabled' : ''}>+</button>
                </div>`;
            listCard.appendChild(newDiv);
        }

        total.innerText = `₱ ${totalPHP.toLocaleString('en-PH', { minimumFractionDigits: 2 })}`;
        quantity.innerText = totalCount;
        saveCartToSessionStorage();

      
        listCard.style.overflowY = 'auto';
        listCard.style.maxHeight = '400px';  
    }
}


function allProducts() {
    const allProductBoxes = document.querySelectorAll('.box');
    allProductBoxes.forEach(box => {
      box.style.display = 'inline-block';
    });
  }



document.getElementById('productDetailModal').addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-primary')) {
    
        addToCart(selectedProductId);
        $('#productDetailModal').modal('hide');
    }
});



function proceedToCheckout() {

    if (!isLoggedIn) {
        alert('You need to log in before proceeding to checkout.');
        window.location.href = '../login.html';  
        return;
    }
    
    if (Object.keys(listCards).length === 0) {
        alert('Cart is empty. Please add items to your cart before proceeding to checkout.');
    } else {
       
        Swal.fire({
            icon: 'info',
            title: 'Proceeding to checkout. Please choose your payment method.',
            showConfirmButton: false,
            timer: 2000,
            customClass: {
                popup: 'custom-swal-popup',
                title: 'custom-swal-title'
            }
        });
    }
}

function saveCartToSessionStorage() {
    sessionStorage.setItem('cart', JSON.stringify(listCards));
}

function loadCartFromSessionStorage() {
    const savedCart = sessionStorage.getItem('cart');
    if (savedCart) {
        listCards = JSON.parse(savedCart);
        reloadCart();
    }
}

function clearCartFromSessionStorage() {
    sessionStorage.removeItem('cart');
    listCards = [];
    reloadCart();
}

loadCartFromSessionStorage();


window.addEventListener('unload', saveCartToSessionStorage);

