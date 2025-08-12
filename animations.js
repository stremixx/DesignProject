document.addEventListener('DOMContentLoaded', () => {
    // Select all elements you want to animate
    const animatedElements = document.querySelectorAll('.product-showcase');

    if (animatedElements.length > 0) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                // If the element is intersecting the viewport
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    // Stop observing the element once it's visible to prevent re-animation
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1 // Trigger when 10% of the element is visible
        });

        // Observe each of the selected elements
        animatedElements.forEach(element => {
            observer.observe(element);
        });
    }
});