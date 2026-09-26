const themeSelect = document.querySelector('#theme-select');
const logo = document.querySelector('img');

themeSelect.addEventListener('change', changeTheme);

function changeTheme() {
    if (themeSelect.value === 'dark') {
        document.body.classList.add('dark');
        logo.src = 'byui-logo-white.png';
    } else {
        document.body.classList.remove('dark');
        logo.src = 'byui-logo-blue.webp';
    }
}