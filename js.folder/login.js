const registeredEmails = ['example@example.com'];
const registeredUsernames = ['exampleuser'];
let isSignupSuccessful = false;
let isResetPasswordVisible = false;

$(document).ready(function () {
  toggleLoginForm();
    
  
    $("#resetPasswordForm").submit(function (event) {
      event.preventDefault();
      resetPassword(event);
    });
  

  $("#forgotPasswordLink").click(function () {
    toggleResetPasswordForm();
  });

  $("#loginForm").submit(function (event) {
    event.preventDefault();
    login();
  });

  $("#signupForm").submit(function (event) {
    event.preventDefault();
    signup();
  });
});

function toggleLoginForm() {
  $('#signupForm').hide();
  $('#loginForm').show();
  isResetPasswordVisible = false;
  $('#resetPasswordForm').hide();
  $('#forgotPasswordLink').show();
  $('#loginSignupModal').modal('show');
}

function toggleSignupForm() {
  $('#loginForm').hide();
  $('#signupForm').show();
  isResetPasswordVisible = false;
  $('#resetPasswordForm').hide();
  $('#forgotPasswordLink').hide();
  $('#loginSignupModal').modal('show');
}

function toggleResetPasswordForm() {
  $('#loginForm').hide();
  $('#signupForm').hide();
  $('#resetPasswordForm').show();
  $('#forgotPasswordLink').hide();
}


function resetPassword(event) {
  event.preventDefault();

  const resetEmail = $("#resetPasswordEmail").val();


  Swal.fire({
    title: "Password Reset Email Sent",
    text: "Password reset email sent to: " + resetEmail,
    icon: "success",
    timer: 3000,
    showConfirmButton: false
  });
}

function login(event) {
  event.preventDefault();
  const email = $("#loginUsername").val();
  const loginPassword = $("#loginPassword").val();

  if (!isSignupSuccessful) {
    showModal("Signup Required", "Please sign up first before logging in.", "danger");
    return;
  }

  if (!validateEmail(email) || !validatePassword(loginPassword)) {
    showModal("Invalid Email or Password", "Please enter a valid email and password.", "danger");
    return;
  }

  const signupPassword = $("#signupPassword").val();
  if (loginPassword !== signupPassword) {
    showModal("Password Mismatch", "The entered password does not match the password used during signup.", "danger");
    return;
  }

  // Check if login is successful
  // For simplicity, assuming login is always successful
  // Replace this with actual login logic (e.g., AJAX request to server for authentication)

  // Redirect to cart.html after successful login
  window.location.href = 'cart2.html';

  showModal("Login Successful", "Welcome! You can now freely use the checkout functionalities.", "success");
}



function signup(event) {
  event.preventDefault();
  const email = $("#signupEmail").val();
  const username = $("#signupUsername").val();
  const password = $("#signupPassword").val();

  if (!validateEmail(email) || !validateUsername(username) || !validatePassword(password)) {
    showModal("Invalid Information", "Please enter valid email, username, and password.", "danger");
    return;
  }

  if (isResetPasswordVisible) {

    sendResetEmail();
  } else {

    if (registeredEmails.includes(email)) {
      showModal("Email Already Registered", "The provided email is already registered.", "danger");
      return;
    }

    if (registeredUsernames.includes(username)) {
      showModal("Username Already Taken", "The provided username is already taken.", "danger");
      return;
    }

   
    isSignupSuccessful = true;

    $("#loginUsername").val(email);
    $("#loginPassword").val(password);

    showModal("Signup Successful", "You can now proceed to login.", "success");


    toggleLoginForm();
  }
}


function showModal(title, text, alertType) {
  Swal.fire({
    title: `<span class="modal-title">${title}</span>`,
    html: `<div class="modal-text">${text}</div>`,
    icon: alertType,
    width: 'auto', 
    showConfirmButton: false,
    timer: 5000
  });
}


function validateUsername(username) {
  return username.length >= 3;
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePassword(password) {
  return password.length >= 6;
}

function sendResetEmail() {
  const resetEmail = $("#resetPasswordEmail").val();
  alert("Reset email sent to: " + resetEmail);
}

function toggleLoginForm() {
  $('#signupForm').hide();
  $('#loginForm').show();
  isResetPasswordVisible = false;
  $('#resetPasswordForm').hide();
  $('#forgotPasswordLink').show();
  $('#loginSignupModal').modal('show');
}

function showModal(title, text, alertType) {
  const alertDiv = $("#alertDiv");
  alertDiv.html(`
    <div class="alert alert-${alertType} alert-dismissible fade show" role="alert">
      <strong>${title}</strong> ${text}
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  `);
}