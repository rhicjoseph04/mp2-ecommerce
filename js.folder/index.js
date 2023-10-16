// cart.js

// Initialize cart and cartLength
let cart = [];
let cartLength = 0;

function updateCartDisplay() {
    const cartItemsDiv = document.getElementById('cart-items');
    cartItemsDiv.innerHTML = '';  // Clear previous content

    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.innerText = item;
        cartItemsDiv.appendChild(itemDiv);
    });
}

function updateOrderSummary() {
    const orderSummaryDiv = document.getElementById('order-summary-items');
    orderSummaryDiv.innerHTML = '';  // Clear previous content

    cart.forEach((item, index) => {
        const itemSummary = document.createElement('div');
        itemSummary.innerText = `${index + 1}. ${item}`;
        orderSummaryDiv.appendChild(itemSummary);
    });
}

// Function to add a product to the cart
function addToCart(product) {
  // Implement your logic to add the product to the cart
  // For now, let's just log a message
  console.log('Product added to cart:', product);
}

// Function to view product details
function viewProduct(product) {
  // Implement your logic to view the product details
  // For now, let's just log a message
  console.log('Viewing product:', product);
}

// Event listener for adding to cart
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
      const product = JSON.parse(button.dataset.product);
      addToCart(product);
  });
});

// Event listener for viewing product
document.querySelectorAll('.view-product').forEach(button => {
  button.addEventListener('click', () => {
      const product = JSON.parse(button.dataset.product);
      viewProduct(product);
  });
});




function closeModal() {
  const modal = document.getElementById("productModal");
  modal.style.display = "none";
}

function addToCart() {
  // Implement your "Add to Cart" functionality here
  alert("Product added to cart!");
}

function showModal(title, content) {
  const modalTitle = document.querySelector('.modal-title');
  const modalBody = document.querySelector('.modal-body');

  modalTitle.innerText = title;
  modalBody.innerText = content;

  $('#myModal').modal('show');  // Show Bootstrap modal
}



  