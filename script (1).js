 // Registration
document.getElementById('registerForm').onsubmit = function(e) {
    e.preventDefault();
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;
    if (localStorage.getItem(username)) {
        alert('Username already exists!');
    } else {
        localStorage.setItem(username, password);
        alert('Registration successful!');
    }
};

// Login
document.getElementById('loginForm').onsubmit = function(e) {
    e.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    const storedPassword = localStorage.getItem(username);
    if (storedPassword && storedPassword === password) {
        alert('Login successful!');
        // Redirect to secured page or show secured content
        window.location.href = 'secured.html';
    } else {
        alert('Invalid credentials!');
    }
};