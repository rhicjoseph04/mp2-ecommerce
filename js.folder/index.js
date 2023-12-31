let items = document.querySelectorAll('.slider .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let active = 3;

function loadShow() {
    let stt = 0;
    items[active].style.transform = 'none';
    items[active].style.zIndex = 1;
    items[active].style.filter = 'blur(0)';
    items[active].style.opacity = 1;

    for (let i = 0; i < items.length; i++) {
        if (i !== active) {
            stt++;
            let blurValue = stt > 2 ? 5 : 1 + stt; // Adjust blur based on position
            items[i].style.transform = `translateX(${(i - active) * -120}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(${(active - i) * -1}deg)`;
            items[i].style.zIndex = -stt;
            items[i].style.filter = `blur(${blurValue}px)`;
            items[i].style.opacity = stt > 2 ? 0 : 0.6;
        }
    }
}

function nextSlide() {
    active = (active + 1) % items.length;
    loadShow();
}

function prevSlide() {
    active = (active - 1 + items.length) % items.length;
    loadShow();
}

next.onclick = nextSlide;
prev.onclick = prevSlide;

// Automatically advance slides every 1000 milliseconds (1 second)
setInterval(nextSlide, 1000);

// Initially show the first slide
loadShow();





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

function loginWithFacebook() {
  // Add your Facebook login logic here
  console.log('Logging in with Facebook...');
}

function loginWithGoogle() {
  // Add your Google login logic here
  console.log('Logging in with Google...');
}

function loginWithMicrosoft() {
  // Add your Microsoft login logic here
  console.log('Logging in with Microsoft...');
}

function showModal(title, content) {
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-content').textContent = content;
  document.getElementById('modal').style.display = 'block';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}
function getLocation() {
  // Check if the geolocation API is available in the browser
  if ("geolocation" in navigator) {
      const latitudeSpan = document.getElementById("latitude");
      const longitudeSpan = document.getElementById("longitude");
      const getLocationButton = document.getElementById("getLocation");

      // Request the user's geolocation
      navigator.geolocation.getCurrentPosition(function (position) {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          // Update the HTML elements with latitude and longitude
          latitudeSpan.textContent = latitude;
          longitudeSpan.textContent = longitude;
      }, function (error) {
          // Handle errors (e.g., user denied location access)
          console.error("Error getting location:", error);
      });

      // Show the geolocation button when hovering over the body
      document.body.addEventListener("mouseover", function (e) {
          if (e.target.tagName === "BODY") {
              getLocationButton.style.display = "block";
          }
      });

      // Hide the geolocation button when mouse leaves the button
      getLocationButton.addEventListener("mouseleave", function () {
          getLocationButton.style.display = "none";
      });
  } else {
      alert("Geolocation is not available in this browser.");
  }
}



  