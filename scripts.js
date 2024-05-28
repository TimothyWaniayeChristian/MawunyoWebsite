// JavaScript file to handle interactivity (if any) on the Mawunyo World website

// Example function to handle form submission
document.addEventListener('DOMContentLoaded', (event) => {
    // Form submission handling
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Collect form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        // Log form data to console (for demonstration purposes)
        console.log(data);

        // TODO: Implement form submission logic (e.g., AJAX request to server)
        alert('Form submitted successfully!');
    });
});
