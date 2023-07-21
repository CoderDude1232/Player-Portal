// Get the upload form
const uploadForm = document.querySelector('#upload-form');

// Handle form submission
uploadForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the form from being submitted normally

    alert('The form was submitted! However, without server-side programming, the file cannot actually be uploaded.');
});
