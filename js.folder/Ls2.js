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



$(document).ready(function() {
  // Initialize the carousel
  $('.carousel').carousel();
});


function toggleModal() {
  $('#loginModal').modal('toggle');
}


function login(event) {
  event.preventDefault(); // Prevent form submission
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Implement your login logic here

  // For this example, we'll just display an alert
  alert('Login successful!');
}

function toggleResetPasswordModal() {
  // Close all open modals
  $('.modal').modal('hide');
  $('#resetPasswordModal').modal('toggle');
}
function resetPassword(event) {
  event.preventDefault();
  const email = document.getElementById('resetEmail').value; // Use the correct ID

  alert('Password reset email sent to: ' + email);

  // Close the reset password modal after clicking "Send Email"
  $('#resetPasswordModal').modal('hide');
}