document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.story-section');

    // Intersection Observer for fade-in effect
    const observerOptions = {
        root: null, // Use the viewport
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% is visible (adjust as needed)
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Unobserve after fade-in to save resources
                // observer.unobserve(entry.target);
            }
            // Optional: Add fade-out effect if needed
            // else {
            //     entry.target.classList.remove('visible');
            // }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // --- Additional Potential JS Enhancements (Optional) ---

    // 1. Parallax effect on background? (Requires more complex CSS/JS)
    // window.addEventListener('scroll', () => {
    //     const scrolled = window.pageYOffset;
    //     document.body.style.backgroundPositionY = -(scrolled * 0.1) + 'px'; // Example
    // });

    // 2. Trigger animations within sections as they become visible?
    // Example: If you add a class 'animate-on-visible' to an element inside a section
    // inside the observerCallback, when entry.isIntersecting is true:
    // const animatableElement = entry.target.querySelector('.animate-on-visible');
    // if (animatableElement) {
    //    animatableElement.classList.add('start-animation');
    // }

    // 3. Code Highlighting (using a library like Highlight.js)
    // If you included the Highlight.js library and CSS in the HTML <head>:
    // try {
    //    hljs.highlightAll();
    // } catch (e) {
    //    console.error("Highlight.js failed to initialize:", e);
    // }

    console.log("The stage is set for a Silicon Tragedy...");
});