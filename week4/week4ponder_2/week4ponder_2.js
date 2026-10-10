
const menuButton = document.querySelector('.menu-btn');
const navigation = document.querySelector('nav');

// Add click event listener to menu button
menuButton.addEventListener('click', toggleMenu);

function toggleMenu() {
    // Show or hide the navigation links
    navigation.classList.toggle('hide');

    // Change hamburger icon into an X
    menuButton.classList.toggle('change');

    // Update accessibility information
    const isOpen = !navigation.classList.contains('hide');
    menuButton.setAttribute('aria-expanded', isOpen);
}
