const validUsername = "user123";
const validPassword = "password123";

function showModal(title, text) {
  var modal = $("#myModal");
  var modalTitle = $("#modalTitle");
  var modalText = $("#modalText");

  modal.modal("show");
  modalTitle.html("<h2>" + title + "</h2>");
  modalText.html("<p>" + text + "</p>");
}

function closeModal() {
  var modal = $("#myModal");
  modal.modal("hide");
}

function toggleModal() {
  $("#loginModal").modal("toggle");
}

function toggleResetPasswordModal() {
  // Close all open modals
  $(".modal").modal("hide");
  $("#resetPasswordModal").modal("toggle");
}

function toggleLoginForm() {
  $('#signupModal').modal('hide');
  $('#loginModal').modal('show');
}

function toggleSignupForm() {
  $('#loginModal').modal('hide');
  $('#signupModal').modal('show');
}

function login(event) {
  event.preventDefault();  // Prevents the default form submission behavior

  // Add your login authentication logic here
  var email = document.getElementById("loginUsername").value;
  var password = document.getElementById("loginPassword").value;

  // Check if email is valid
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    showModal("Invalid Email", "Please enter a valid email address.");
    return;
  }

  // Check if password is valid
  var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!passwordPattern.test(password)) {
    showModal("Invalid Password", "Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one number, and one special character.");
    return;
  }

  // Authentication successful
  // Add code here to proceed after successful login
  // For now, let's display a success message
  showModal("Login Successful", "Welcome! You can now freely use the checkout functionalities.");
}

function signup(event) {
  event.preventDefault();  // Prevents the default form submission behavior

  var email = document.getElementById("signupEmail").value;
  var username = document.getElementById("signupUsername").value;
  var password = document.getElementById("signupPassword").value;

  // Check if email is valid
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    showModal("Invalid Email", "Please enter a valid email address.");
    return;
  }

  // Check if password is valid
  var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!passwordPattern.test(password)) {
    showModal("Invalid Password", "Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one number, and one special character.");
    return;
  }

  // Registration successful
  toggleSignupModal(); // Close the signup modal
  // Show a success message for now
  alert("Registration Successful. Welcome, " + username + "! You can now freely use the checkout functionalities.");
}

