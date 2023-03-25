// Get a reference to the form and all input elements
const form = document.querySelector(".right-section form");
const inputs = document.querySelectorAll(".right-section form input");

// Listen for the form to be submitted
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent the form from submitting
  inputs.forEach((input) => {
    // Loop through each input element
    if (!input.value) {
      // If the input value is empty
      input.parentElement.classList.add("error"); // Add an "error" class to the input's parent element
    } else {
      input.parentElement.classList.remove("error"); // Remove the "error" class from the input's parent element
      if (input.type == "email") {
        // If the input is an email input
        if (validateEmail(input.value)) {
          // If the email is valid
          input.parentElement.classList.remove("error"); // Remove the "error" class from the input's parent element
        } else {
          input.parentElement.classList.add("error"); // Add an "error" class to the input's parent element
        }
      }
    }
  });
});
// Function to validate email addresses using a regular expression
function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
