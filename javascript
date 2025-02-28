// Function to validate the form
document.getElementById("orderForm").addEventListener("submit", function(event) {
    // Clear any previous errors
    let errors = document.querySelectorAll(".error");
    errors.forEach(function(error) {
        error.remove();
    });

    let isValid = true;

    // Check if all fields are filled
    const product = document.getElementById("product").value;
    const quantity = document.getElementById("quantity").value;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const payment = document.getElementById("payment").value;

    // Validate product selection
    if (!product) {
        showError("product", "Please select a product.");
        isValid = false;
    }

    // Validate quantity
    if (quantity < 1) {
        showError("quantity", "Quantity must be at least 1.");
        isValid = false;
    }

    // Validate name
    if (!name) {
        showError("name", "Please enter your full name.");
        isValid = false;
    }

    // Validate email
    if (!email || !validateEmail(email)) {
        showError("email", "Please enter a valid email address.");
        isValid = false;
    }

    // Validate address
    if (!address) {
        showError("address", "Please enter your shipping address.");
        isValid = false;
    }

    // Validate payment method
    if (!payment) {
        showError("payment", "Please select a payment method.");
        isValid = false;
    }

    // If form is invalid, prevent form submission
    if (!isValid) {
        event.preventDefault();
    }
});

// Function to display error messages
function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorMessage = document.createElement("div");
    errorMessage.classList.add("error");
    errorMessage.textContent = message;
    field.parentNode.appendChild(errorMessage);
}

// Function to validate email format
function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}
