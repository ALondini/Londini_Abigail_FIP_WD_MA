// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Select all flavour images
const flavourImages = document.querySelectorAll('.flavour-image');

// Check visibility on scroll
function checkVisibility() {
    flavourImages.forEach(image => {
        if (isInViewport(image)) {
            image.classList.add('is-visible');
        }
    });
}

// Event listener for scroll event
window.addEventListener('scroll', checkVisibility);

// Initial check if images are already in view when the page loads
checkVisibility();

// JavaScript to detect images going out of viewport
const images = document.querySelectorAll('.flavour-image');

const fadeOutObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            // If image is out of the viewport, add fade-out class
            entry.target.classList.add('fade-out');
        } else {
            // If image is in the viewport, ensure it's visible again
            entry.target.classList.remove('fade-out');
        }
    });
}, { threshold: 0.1 }); // Trigger when 10% of the image is visible

// Observe each image
images.forEach(image => {
    fadeOutObserver.observe(image);
});


// Contact Form Submit Message

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent actual submission

        // Show a simple thank-you message
        alert('Thank you for your message! We’ll be in touch soon.');

        // Reset the form fields
        contactForm.reset();
    });
}