document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Assuming 'user1' and 'pass1' are the correct credentials
    if (username === 'divyasaini007' && password === 'divya@saini07') {
        localStorage.setItem('loggedIn', true);
        window.location.href = "./Home.html";
    } else {
        alert('Incorrect username or password. Please try again.');
    }
});