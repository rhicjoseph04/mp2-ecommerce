function showModal(title, text) {
  var modal = document.getElementById("myModal");
  var modalTitle = document.getElementById("modalTitle");
  var modalText = document.getElementById("modalText");

  modal.style.display = "block";
  modalTitle.innerHTML = "<h2>" + title + "</h2>";
  modalText.innerHTML = "<p>" + text + "</p>";
}

function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

function toggleModal() {
  $('#loginModal').modal('toggle');
}

function toggleResetPasswordModal() {
  // Close all open modals
  $('.modal').modal('hide');
  $('#resetPasswordModal').modal('toggle');
}

function updateIcons() {
  const userIcon = document.getElementById('userIcon');
  const cartIcon = document.getElementById('cartIcon');
  const username = document.getElementById('username');
  const cartCount = document.getElementById('cartCount');

  if (isLoggedIn) {
    userIcon.href = '#'; // Replace with the user's profile page
    username.innerText = 'John Doe'; // Replace with the actual username
  } else {
    userIcon.href = '#'; // Replace with the login/signup page
    username.innerText = ''; // Hide the username if not logged in
  }

  cartIcon.href = '/checkout'; // Link to the checkout page
  cartCount.innerText = cartItemCount; // Update cart item count
}

// Call this function to update icons based on login and cart status
updateIcons();

const users = [
  { username: 'user1', email: 'user1@example.com', password: 'password1', displayName: 'John Doe' },
  { username: 'user2', email: 'user2@example.com', password: 'password2', displayName: 'Jane Smith' }
];

function login(event) {
  event.preventDefault();

  const enteredUsername = document.getElementById('loginUsername').value;
  const enteredPassword = document.getElementById('loginPassword').value;
  
  // Check if the entered credentials are valid (replace with your actual login logic)
  const user = users.find(user => (user.username === enteredUsername || user.email === enteredUsername) && user.password === enteredPassword);
  
  if (user) {
      successfulLogin(user.displayName);
  } else {
      alert('Invalid credentials. Please try again.');
  }
}
function signup(event) {
  event.preventDefault();

  const signupEmail = document.getElementById('signupEmail').value;
  const signupUsername = document.getElementById('signupUsername').value;
  const signupPassword = document.getElementById('signupPassword').value;

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(signupEmail)) {
      alert('Invalid email format. Please enter a valid email address.');
      return;
  }

 // Validate password
 const passwordRegex = /^(?=.*[A-Z])(?=.*\W)(?=.{10,})/;
 if (!passwordRegex.test(signupPassword)) {
     alert('Password must contain at least 10 characters, one capital letter, and one special character.');
     return;
 }

 // Signup logic (replace with actual signup functionality)
 alert('Signup successful! You can now login.');
 // Here you can add code to store the signup information or redirect to a confirmation page.

 // Automatically switch to the login tab after successful signup
 toggleModal();  // Close signup modal
 $('#loginModal').modal('toggle');
}


function toggleModal() {
  $('#loginModal').modal('toggle');
}

// Additional function to toggle signup modal
function toggleSignupModal() {
  $('#loginModal').modal('hide');  // Close login modal
  $('#signupModal').modal('show');  // Open signup modal
}

function toggleLoginModal() {
  $('#signupModal').modal('hide');  // Close signup modal
  $('#loginModal').modal('show');  // Open login modal
}

function successfulLogin(username) {
  const userDisplay = document.getElementById('userDisplay');
  const loggedInUsername = document.getElementById('loggedInUsername');
  loggedInUsername.innerText = username;
  userDisplay.style.display = 'block';
  toggleModal(); // Close the login modal upon successful login
}


    // Function to handle signup
    function signup(event) {
      event.preventDefault();

      const signupEmail = document.getElementById('signupEmail').value;
      const signupPassword = document.getElementById('signupPassword').value;

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(signupEmail)) {
          alert('Invalid email format. Please enter a valid email address.');
          return;
      }

      // Validate password
      const passwordRegex = /^(?=.*[A-Z])(?=.*\W)(?=.{10,})/;
      if (!passwordRegex.test(signupPassword)) {
          alert('Password must contain at least 10 characters, one capital letter, and one special character.');
          return;
      }

      // Signup logic (replace with actual signup functionality)
      alert('Signup successful!');
      // Here you can add code to store the signup information or redirect to a confirmation page.
  }

  





// const curElm = [
//     {
//         "id":"1",
//         "Title":"TT Course Radiance[S-XL].",
//         "Cat": "Fullface Helmet",
//         "Price": "150",
//         "Img": "./img/kythelmettop1.png"
//     },
//     {
//         id:2,
//         Title:"KR-1 – Espargaro Replica 2017.",
//         Cat: 'Fullface Helmet',
//         Price: '280',
//         Img: './img/kythelmetstop2.png'
//     },
//     {
//         id:3,
//         Title:"NX-RACE – Carbon Race-D Red Fluo.",
//         Cat: 'Fullface Helmet',
//         Price: '345',
//         Img: './img/kythelmettop3.png'
//     },
//     {
//         id:4,
//         Title:"KYT Strike Eagle – NEW YORK YELLOW FLUO.",
//         Cat: 'Off-Road',
//         Price: '225',
//         Img: './img/kythelmettop4.webp'
//     },
//     {
//         id:5,
//         Title:"NF-J – BROC PARKES REPLICA",
//         Cat: 'Half-face',
//         Price: '135',
//         Img: './img/kyttp5.png'
//     },
//     {
//         id:6,
//         Title:"NF-J – Motion Matt Yellow Fluo",
//         Cat: 'Half-face',
//         Price: '135',
//         Img: './img/kyttp6.png'
//     },
//     {
//         id:7,
//         Title:"Strike Eagle – Plain White",
//         Cat: 'Off-Road',
//         Price: '225',
//         Img: './img/kyttp7.png'
//     },
//     {
//         id:8,
//         Title:"Strike Eagle – Plain White",
//         Cat: 'Off-Road',
//         Price: '225',
//         Img: './img/kyttp8.png'
        
//     },
    
//     {
//         id:9,
//         Title:"Strike Eagle – Wings White/Blue",
//         Cat: 'Off-Road',
//         Price: '225',
//         Img: './img/kyttp9.png'
//     }

// ]

//  // Create an img element
//  const imgElement = document.createElement('img');

//  // Set the src and alt attributes based on curElm properties
//  imgElement.src = curElm.Img;
//  imgElement.alt = curElm.Title;

//  // Append the img element to the image container
//  const imageContainer = document.getElementById('imageContainer');
//  imageContainer.appendChild(imgElement);

    
//   const addToCart = (product) => {
//     console.log("Added to cart:", product);
//   };
  
//   const viewProduct = (product) => {
//     console.log("View product:", product);
//   };
  
//   const Home = ({ detail, view, close, setClose, addtocart }) => {
//     // Your Home component logic
  
//     const root = document.getElementById("root");
//     if (root) {
//       root.innerHTML = `
//         <!-- Your HTML content for Home component here -->
//       `;
//     }
//   };
  
//   const api = {
//     getItem: (key) => JSON.parse(sessionStorage.getItem(key)),
//     setItem: (key, value) => sessionStorage.setItem(key, JSON.stringify(value)),
//   };
  
//   let cartLength = api.getItem("cartLength") || 0;
  
//   const setCloseProductDetail = (isOpen) => {
//     console.log("Product detail is open:", isOpen);
//   };
  
//   Home(Homeproduct, viewProduct, false, setCloseProductDetail, addToCart);

//   function viewProduct(curElm) {
//     const productDetailContent = document.getElementById('productDetailContent');
//     productDetailContent.innerHTML = `
//       <div class="productbox">
//         <div class="img-box">
//           <img src="${curElm.Img}" alt="${curElm.Title}">
//         </div>
//         <div class="detail">
//           <h4>${curElm.Cat}</h4>
//           <h2>${curElm.Title}</h2>
//           <h3>${curElm.Price}</h3>
//           <button>Add To Cart</button>
//         </div>
//       </div>`;
    
//     const productDetail = document.getElementById('productDetail');
//     productDetail.style.display = 'block';
//   }

//    // Function to display product detail
//    function viewProduct(curElm) {
//     const productDetailContent = document.getElementById('productDetailContent');
//     productDetailContent.innerHTML = `
//       <div class="productbox">
//         <div class="img-box">
//           <img src="${curElm.Img}" alt="${curElm.Title}">
//         </div>
//         <div class="detail">
//           <h4>${curElm.Cat}</h4>
//           <h2>${curElm.Title}</h2>
//           <h3>${curElm.Price}</h3>
//           <button onclick="addToCart('${curElm.Title}')">Add To Cart</button>
//         </div>
//       </div>`;
    
//     const productDetail = document.getElementById('productDetail');
//     productDetail.style.display = 'block';
//   }

//     // Function to add item to cart
//     function addToCart(item) {
//         cart.push(item);
//         alert(`${item} added to cart!`);
//       }

//   // Function to close product detail
//   function closeProductDetail() {
//     const productDetail = document.getElementById('productDetail');
//     productDetail.style.display = 'none';
//   }

//   function showModal(title, description) {
//     const modal = document.getElementById('modal');
//     const modalTitle = document.getElementById('modalTitle');
//     const modalDescription = document.getElementById('modalDescription');
  
//     modal.style.display = 'block';
//     modalTitle.innerText = title;
//     modalDescription.innerText = description;
//   }
  
//   function closeModal() {
//     const modal = document.getElementById('modal');
//     modal.style.display = 'none';
//   }
  
  
//   $(document).ready(function() {
//     // Initialize the carousel
//     $('.carousel').carousel();
//   });
  