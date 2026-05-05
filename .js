const form = document.getElementById('contact-form');
const statusMessage = document.getElementById('status-message');
const submitBtn = document.getElementById('submit-btn');

form.addEventListener('submit', async function(event) {
    // 1. Stop the page from refreshing
    event.preventDefault();

    // 2. Change button text to show it's loading
    submitBtn.textContent = 'Sending...';

    // 3. Try to send the data using JavaScript Fetch
    try {
        const response = await fetch(form.action, {
            method: 'POST',
            body: new FormData(form),
            headers: {
                'Accept': 'application/json'
            }
        });

        // 4. If successful
        if (response.ok) {
            statusMessage.textContent = "✓ Message sent successfully!";
            statusMessage.style.color = "#ffffff";
            form.reset(); // Clears the form
        } else {
            throw new Error('Failed to send');
        }
    } 
    // 5. If there is an error
    catch (error) {
        statusMessage.textContent = "✘ Oops! There was a problem sending your message.";
        statusMessage.style.color = "#ff4444"; // Kept red for errors so the user knows it failed
    } 
    // 6. Reset button text
    finally {
        submitBtn.textContent = 'Send Message';
    }
});