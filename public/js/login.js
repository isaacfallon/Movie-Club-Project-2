const loginForm = async (event) => {
    event.preventDefault();
    const username = document.querySelector('#usernameLogin').value.trim();
    const password = document.querySelector('#passwordLogin').value.trim();
    if (username && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-Type': 'application/json'}
        });
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Falied to log in');
        }
    }
};

document
    .querySelector('.login-form')
    .addEventListener('submit', loginForm);