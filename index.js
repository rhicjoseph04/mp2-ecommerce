
function addToCart(productId) {
  alert('Product added to cart. Product ID: ' + productId);
}

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



  