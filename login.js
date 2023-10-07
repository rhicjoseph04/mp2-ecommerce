function toggleLoginSignup() {
    const loginContainer = document.getElementById('loginContainer');
    loginContainer.style.display = loginContainer.style.display === 'none' ? 'block' : 'none';
  }
  
  function login() {
    // Perform login logic here
    // For demonstration purposes, we'll simply log a message
    console.log('Login button clicked');
  }
  
  function signup() {
    // Perform signup logic here
    // For demonstration purposes, we'll simply log a message
    console.log('Sign Up button clicked');
  }
  
  function createNav() {
    // ... (existing code to create navigation elements)
  
    const loginButton = document.createElement('button');
    loginButton.textContent = 'Login';
    loginButton.classList.add('login-button');
    loginButton.addEventListener('click', toggleLoginSignup);
  
    const loginContainer = document.createElement('div');
    loginContainer.id = 'loginContainer';
    loginContainer.style.display = 'none';
  
    const loginButtonInContainer = document.createElement('button');
    loginButtonInContainer.textContent = 'Login';
    loginButtonInContainer.addEventListener('click', login);
  
    const signupButtonInContainer = document.createElement('button');
    signupButtonInContainer.textContent = 'Sign Up';
    signupButtonInContainer.addEventListener('click', signup);
  
    loginContainer.appendChild(loginButtonInContainer);
    loginContainer.appendChild(signupButtonInContainer);
  
    navContainer.appendChild(loginButton);
    navContainer.appendChild(loginContainer);
  
    return navContainer;
  }
  
  function renderNav() {
    // ... (existing code to render the navigation)
  }
  
  renderNav();
  