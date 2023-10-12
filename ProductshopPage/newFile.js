document.addEventListener('DOMContentLoaded', () => {
    allProducts();
});

function allProducts() {
    const allProductBoxes = document.querySelectorAll('.box');
    allProductBoxes.forEach(box => {
        box.style.display = 'inline-block';
    });
}

function filterProduct(category) {
    const allProductBoxes = document.querySelectorAll('.box');
    allProductBoxes.forEach(box => {
        const boxCategory = box.getAttribute('data-category');
        if (category === 'All Products' || boxCategory === category) {
            box.style.display = 'inline-block';
        } else {
            box.style.display = 'none';
        }
    });
}

filterProduct('Full-face');  // Example: Filtering by Full-face category initially

// Handle modal close button
const closeModalButton = document.getElementById('closeModalBtn');
closeModalButton.addEventListener('click', () => {
    closeModal();
});

