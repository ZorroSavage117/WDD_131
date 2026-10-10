
/* Responsive Navigation Menu */

const menuButton = document.querySelector('.menu-btn');
const navigation = document.querySelector('nav');

// Open and close the mobile menu
menuButton.addEventListener('click', toggleMenu);

function toggleMenu() {
    navigation.classList.toggle('hide');

    const isOpen = !navigation.classList.contains('hide');
    menuButton.setAttribute('aria-expanded', isOpen);
}

// Handle window resizing
window.addEventListener('resize', handleResize);

function handleResize() {
    if (window.innerWidth >= 1000) {
        navigation.classList.remove('hide');
    } else {
        navigation.classList.add('hide');
        menuButton.setAttribute('aria-expanded', 'false');
    }
}


/* Image Viewer Modal */

const gallery = document.querySelector('.gallery');
const viewer = document.querySelector('.viewer');

// Create the HTML for the image viewer
function viewerTemplate(imageUrl, altText) {
    return `
        <img src="${imageUrl}" alt="${altText}">
        <button class="close-viewer" aria-label="Close image">X</button>
    `;
}

// Open the viewer when an image is clicked
gallery.addEventListener('click', viewHandler);

function viewHandler(event) {
    if (event.target.tagName === 'IMG') {
        const clickedImage = event.target;

        // Use the high-resolution Norris image
        const imageUrl =
            'https://wddbyui.github.io/wdd131/images/norris-full.jpg';

        const altText = clickedImage.alt;

        // Add the image and close button
        viewer.innerHTML = viewerTemplate(imageUrl, altText);

        // Display the modal
        viewer.showModal();
    }
}

// Close viewer using the X button
viewer.addEventListener('click', (event) => {
    if (event.target.classList.contains('close-viewer')) {
        viewer.close();
    }
});

// Close viewer when clicking outside the image
viewer.addEventListener('click', (event) => {
    if (event.target === viewer) {
        viewer.close();
    }
});

// The Escape key is handled automatically by the dialog element.
