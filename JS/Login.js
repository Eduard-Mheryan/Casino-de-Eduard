const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');
    const signUpButton = document.getElementById('register');
    const signInButton = document.getElementById('login');

    const signUpForm = document.querySelector('.sign-up form');
    const signInForm = document.querySelector('.sign-in form');

    signUpButton.addEventListener('click', () => {
        container.classList.add("right-panel-active");
    });

    signInButton.addEventListener('click', () => {
        container.classList.remove("right-panel-active");
    });

    signUpForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = signUpForm.querySelector('input[placeholder="Name"]').value;
        const email = signUpForm.querySelector('input[placeholder="Email"]').value;
        const password = signUpForm.querySelector('input[placeholder="Password"]').value;

        if (name && email && password) {
            localStorage.setItem('user', JSON.stringify({ name, email, password }));
            container.classList.remove("right-panel-active");
        } else {
            displayMessage('Bitte füllen sie alle lücken', 'error');
        }
    });

    signInForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = signInForm.querySelector('input[placeholder="Email"]').value;
        const password = signInForm.querySelector('input[placeholder="Password"]').value;
        const storedUser = JSON.parse(localStorage.getItem('user'));

        if (storedUser && storedUser.email === email && storedUser.password === password) {
            window.location.href = 'index.html';
        } else {
            displayMessage('Email oder Passwort ist nicht korrekt', 'error');
        }
    });

    function displayMessage(message, type) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}`;
        messageDiv.textContent = message;
        document.body.appendChild(messageDiv);
        setTimeout(() => {
            document.body.removeChild(messageDiv);
        }, 2000);
    }
});
