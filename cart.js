// Define a cart object to hold the cart items
let cart = [];

function updateCartUI() {
  // Update the cart UI based on the cart array
  const cartContainer = document.querySelector('.cartcontainer .contant');
  cartContainer.innerHTML = ''; // Clear previous content

  cart.forEach((item) => {
    const cartItemDiv = document.createElement('div');
    cartItemDiv.classList.add('cart_item');

    cartItemDiv.innerHTML = `
      <div class="img_box">
        <img src="${item.Img}" alt="${item.Title}">
      </div>
      <div class="detail">
        <div class="info">
          <h4>${item.Cat}</h4>
          <h3>${item.Title}</h3>
          <p>Price: $${item.Price}</p>
          <div class="qty">
            <button class="incqty" onclick="incQty(${item.id})">+</button>
            <input type="text" value="${item.qty}">
            <button class="decqty" onclick="decQty(${item.id})">-</button>
          </div>
          <h4 class="subtotal">Subtotal: $${item.Price * item.qty}</h4>
        </div>
        <div class="close">
          <button onclick="removeProduct(${item.id})"><AiOutlineClose /></button>
        </div>
      </div>
    `;

    cartContainer.appendChild(cartItemDiv);
  });

  const totalPriceElement = document.querySelector('.totalprice');
  totalPriceElement.textContent = `Total: $${calculateTotalPrice()}`;
}

function calculateTotalPrice() {
  // Calculate the total price of items in the cart
  return cart.reduce((total, item) => total + item.qty * item.Price, 0);
}

function incQty(itemId) {
  // Increase quantity of an item in the cart
  const item = cart.find((x) => x.id === itemId);
  if (item) {
    item.qty += 1;
    updateCartUI();
  }
}

function decQty(itemId) {
  // Decrease quantity of an item in the cart
  const item = cart.find((x) => x.id === itemId);
  if (item && item.qty > 0) {
    item.qty -= 1;
    updateCartUI();
  }
}

function removeProduct(itemId) {
  // Remove an item from the cart
  cart = cart.filter((x) => x.id !== itemId);
  updateCartUI();
}

// Example usage
const sampleProduct = {
  id: 1,
  Img: 'path/to/image.jpg',
  Cat: 'Category',
  Title: 'Product Title',
  Price: 10,
  qty: 1
};

// Add a product to the cart
cart.push(sampleProduct);

// Update the cart UI
updateCartUI();



    // Function to handle checkout
    function proceedToCheckout() {
        // Check if the user is logged in (replace with your login check)
        const isLoggedIn = true; // Example: Change this to your login check

        if (isLoggedIn) {
            // Redirect to the checkout page (replace with your checkout page URL)
            window.location.href = '/checkout';
        } else {
            // If not logged in, show a message or redirect to login/signup (replace with your logic)
            alert('You need to log in or sign up to proceed to checkout.');
            // Redirect to login/signup (replace with your login/signup page URL)
            // window.location.href = '/login'; 
        }
    }
