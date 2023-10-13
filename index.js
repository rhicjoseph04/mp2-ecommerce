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

function addToCart(product) {
  // Parse the product JSON if it's a string
  if (typeof product === 'string') {
    product = JSON.parse(product);
  }

  // Check if the product is already in the cart
  const existingProduct = cart.find((item) => item.id === product.id);

  if (existingProduct) {
    // If the product is already in the cart, increase its quantity
    existingProduct.qty += 1;
  } else {
    // If the product is not in the cart, add it
    product.qty = 1;
    cart.push(product);
  }

  // Update cart length
  cartLength = cart.reduce((total, item) => total + item.qty, 0);

  // Update the cart length in the HTML
  document.getElementById('cart-length').innerText = cartLength;

  // Update the cart UI
  updateCartDisplay();

  // Show a modal or message to confirm that the product was added to the cart
  showModal('Product Added to Cart', `${product.Title} has been added to your cart.`);
}


// Other functions like calculateTotalPrice, incQty, decQty, and removeProduct remain the same.



function viewProduct(productId) {
  alert('View product details. Product ID: ' + productId);
}

// Sample product data (replace with your actual data)
const productData = {
  title: "Product 1",
  category: "Category 1",
  price: "$100",
  image: "product1.jpg"
};
function viewProduct(product) {
  // Parse the product JSON if it's a string
  if (typeof product === 'string') {
      product = JSON.parse(product);
  }

  const modalImage = document.getElementById('modalImage');
  const modalDetail = document.getElementById('modalDetail');

  // Set the modal image and details based on the clicked product
  modalImage.src = product.Img;
  modalImage.alt = product.Title;

  modalDetail.innerHTML = `
      <p>${product.Cat}</p>
      <h3>${product.Title}</h3>
      <h4>${product.Price}</h4>
  `;

  // Show the modal
  const productModal = document.getElementById('productModal');
  productModal.style.display = 'block';
}

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



  