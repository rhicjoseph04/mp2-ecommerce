// Function to view product details
function viewProduct(product) {
  console.log('Viewing product:', product);
  // Update the modal with product details
  showModal(product.title, `Category: ${product.category}<br>Description: ${product.description}<br>Price: $${product.price}`);
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

// Add to cart functionality
function addToCart(product) {
  console.log('Adding to cart:', product);
  alert('Product added to cart!');
}

// Show modal with title and content
function showModal(title, content) {
  const modalTitle = document.querySelector('.modal-title');
  const modalBody = document.querySelector('.modal-body');

  modalTitle.innerText = title;
  modalBody.innerHTML = content;

  $('#myModal').modal('show');  // Show Bootstrap modal
}

// Close modal
function closeModal() {
  $('#myModal').modal('hide');  // Hide Bootstrap modal
}



  