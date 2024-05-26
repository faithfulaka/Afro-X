$(document).ready(() => {
    // Navigation between login and registration pop-up
    $('#gotoRegister').click((event) => {
        event.preventDefault();
        $('#registerPopup').removeClass('hidden');
        $('#popupOverlay').removeClass('hidden');
    });

    $('#closeRegisterPopup').click((event) => {
        event.preventDefault();
        $('#registerPopup').addClass('hidden');
        $('#popupOverlay').addClass('hidden');
    });

    $('#popupOverlay').click(() => {
        $('#registerPopup').addClass('hidden');
        $('#popupOverlay').addClass('hidden');
    });

    // Registration form submission handling
    $('#registerForm').submit((event) => {
        event.preventDefault();
        const username = $('#registerUsername').val();
        const password = $('#registerPassword').val();

        if (!username || !password) {
            alert('Please enter both username and password.');
            return;
        }

        const users = JSON.parse(localStorage.getItem('users') || '[]');

        // Avoid duplicate usernames
        if (users.find(user => user.username === username)) {
            alert('Username already exists. Please choose another.');
            return;
        }

        // Save the new user
        users.push({ username, password });
        localStorage.setItem('users', JSON.stringify(users));
        alert('Registration successful! Please log in.');
        $('#closeRegisterPopup').click();
    });

    // Login form submission handling
    $('#loginButton').click((event) => {
        event.preventDefault();
        const username = $('#loginUsername').val();
        const password = $('#loginPassword').val();

        const users = JSON.parse(localStorage.getItem('users') || '[]');

        // Validate credentials
        const user = users.find(u => u.username === username && u.password === password);
        if (user) {
            localStorage.setItem('currentUser', username);
            window.location.href = '../HomePage/Homepage.html'; // Redirect to another page on successful login
        } else {
            alert('Invalid username or password. Please try again.');
        }
    });
});
