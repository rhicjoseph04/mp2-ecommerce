const registeredEmails = ['example@example.com'];
const registeredUsernames = ['exampleuser'];
let isSignupSuccessful = false;

$(document).ready(function() {
  toggleLoginForm();

  $("#forgotPasswordLink").click(function() {
    $('#resetPasswordModal').modal('show'); // Show reset password modal on link click
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

function toggleLoginForm() {
  $('#loginSignupModal').modal('show');
}

function toggleSignupForm() {
  $('#loginSignupModal').modal('show');
}

function login() {
  const email = $("#loginUsername").val();
  const password = $("#loginPassword").val();

  if (!isSignupSuccessful) {
    showModal("Signup Required", "Please sign up first before logging in.", "danger");
    return;
  }

  const loginSuccessful = true;

  if (loginSuccessful) {
    showModal("Login Successful", "Welcome! You can now freely use the checkout functionalities.", "success");
    window.location.href = "index.html";
    $('#loginSignupModal').modal('hide');
  }
}

function signup() {
  const email = $("#signupEmail").val();
  const username = $("#signupUsername").val();
  const password = $("#signupPassword").val();

  if (registeredEmails.includes(email)) {
    showModal("Email Already Registered", "The provided email is already registered.");
    return;
  }

  if (registeredUsernames.includes(username)) {
    showModal("Username Already Taken", "The provided username is already taken.");
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.(gmail\.com|hotmail\.com|rocketmail\.com)$/;
  if (!emailPattern.test(email)) {
    showModal("Invalid Email", "Please enter a valid email address.");
    return;
  }

  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*_?&])[A-Za-z\d@$!%*_?&]{8,}$/;
  if (!passwordPattern.test(password)) {
    showModal("Invalid Password", "Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one number, and one special character.");
    return;
  }

  isSignupSuccessful = true;
  showModal("Signup Successful", "You can now proceed to login.", "success");
  $('#signupForm')[0].reset();
  $('#signupForm').hide();
  $('#loginForm').show();
}

function sendResetEmail() {
  const resetEmail = $("#resetPasswordEmail").val();
  // Implement email sending logic here
  // For demonstration, we'll just show an alert
  alert("Reset email sent to: " + resetEmail);
}

function toggleModal() {
  $('#loginSignupModal').modal('hide');
}
