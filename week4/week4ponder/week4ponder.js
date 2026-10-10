
const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

// Event listener for opening the modal
gallery.addEventListener('click', openModal);

function openModal(e) {
    // Only open the modal if an image was clicked
    if (e.target.tagName === 'IMG') {

        // Get the image that was clicked
        const clickedImage = e.target;

        // Change the small image filename to the large version
        const largeImage = clickedImage.src.replace('-sm.jpg', '-full.jpg');

        // Set the modal image
        modalImage.src = largeImage;
        modalImage.alt = clickedImage.alt;

        // Open the modal
        modal.showModal();
    }
}

// Close modal on button click
closeButton.addEventListener('click', () => {
    modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});
