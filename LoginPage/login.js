const registeredEmails = ['example@example.com'];
const registeredUsernames = ['exampleuser'];
let isSignupSuccessful = false;
let isResetPasswordVisible = false;

$(document).ready(function() {
  toggleLoginForm();

  $("#forgotPasswordLink").click(function() {
      toggleResetPasswordForm();
  });

  $("#loginForm").submit(function(event) {
      event.preventDefault();
      login();
  });

  $("#signupForm").submit(function(event) {
      event.preventDefault();
      signup();
  });
});

function toggleLoginForm() {
  $('#signupForm').hide();
  $('#loginForm').show();
  isResetPasswordVisible = false;
  $('#resetPasswordForm').hide();
  $('#forgotPasswordLink').show(); // Show the link in the login form
  $('#loginSignupModal').modal('show');
}

function toggleSignupForm() {
  $('#loginForm').hide();
  $('#signupForm').show();
  isResetPasswordVisible = false;
  $('#resetPasswordForm').hide();
  $('#forgotPasswordLink').hide(); // Hide the link in the signup form
  $('#loginSignupModal').modal('show');
}

function toggleResetPasswordForm() {
  $('#loginForm').hide();
  $('#signupForm').hide();
  $('#resetPasswordForm').show();
  $('#forgotPasswordLink').hide(); // Hide the "Did you forget your password?" link
}

// Handle the password reset form submission
function resetPassword(event) {
  event.preventDefault();

  const resetEmail = $("#resetPasswordEmail").val();
  // Implement password reset logic here

  // For demonstration, we'll just show an alert
  alert("Password reset email sent to: " + resetEmail);
}
  function login(event) {
    event.preventDefault();
    const email = $("#loginUsername").val();
    const loginPassword = $("#loginPassword").val();
  
    // Check if the user has signed up
    if (!isSignupSuccessful) {
      showModal("Signup Required", "Please sign up first before logging in.", "danger");
      return;
    }
  
    // Validate email and password
    if (!validateEmail(email) || !validatePassword(loginPassword)) {
      showModal("Invalid Email or Password", "Please enter valid email and password.", "danger");
      return;
    }
  
    // Check if the login password matches the signup password
    const signupPassword = $("#signupPassword").val();
    if (loginPassword !== signupPassword) {
      showModal("Password Mismatch", "The entered password does not match the password used during signup.", "danger");
      return;
    }
  
    // Implement login logic here
  
    // Redirect to index.html upon successful login
    window.location.href = '..//Landingpage/index.html';
  
    showModal("Login Successful", "Welcome! You can now freely use the checkout functionalities.", "success");
  }


function signup(event) {
  event.preventDefault();
  const email = $("#signupEmail").val();
  const username = $("#signupUsername").val();
  const password = $("#signupPassword").val();

  // Validate email, username, and password
  if (!validateEmail(email) || !validateUsername(username) || !validatePassword(password)) {
    showModal("Invalid Information", "Please enter valid email, username, and password.", "danger");
    return;
  }

  if (isResetPasswordVisible) {
    // If reset password form is visible, handle reset password functionality
    sendResetEmail();
  } else {
    // If reset password form is not visible, handle signup functionality
    if (registeredEmails.includes(email)) {
      showModal("Email Already Registered", "The provided email is already registered.", "danger");
      return;
    }

    if (registeredUsernames.includes(username)) {
      showModal("Username Already Taken", "The provided username is already taken.", "danger");
      return;
    }

    // Signup logic
    isSignupSuccessful = true;

    // Reset the login form with the signup information
    $("#loginUsername").val(email);
    $("#loginPassword").val(password);

    showModal("Signup Successful", "You can now proceed to login.", "success");

    // Automatically switch to login form after successful signup
    toggleLoginForm();
  }
}


// Validate username (at least 3 characters)
function validateUsername(username) {
 return username.length >= 3;
}

// Validate email format
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Validate password length (at least 6 characters)
function validatePassword(password) {
  return password.length >= 6;
}

function sendResetEmail() {
  const resetEmail = $("#resetPasswordEmail").val();
  // Implement email sending logic here
  // For demonstration, we'll just show an alert
  alert("Reset email sent to: " + resetEmail);
}

// Redirect to login form after successful signup
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
