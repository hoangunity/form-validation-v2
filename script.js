const form = document.getElementById("form");
const password1El = document.getElementById("password1");
const password2El = document.getElementById("password2");
const messageContainer = document.querySelector(".message-container");
const message = document.getElementById("message");

let isValid = false;
let passwordsMatch = false;

function resetFormInput() {
  form.name.value = "";
  form.phone.value = "";
  form.email.value = "";
  form.website.value = "";
  form.password1.value = "";
  form.password2.value = "";
}

function validateForm() {
  // Using constraint API
  isValid = form.checkValidity();
  // Style main message for an error
  if (!isValid) {
    message.textContent = "Please fill out all fields.";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
    return;
  }
  // Check to see if passwords match
  if (password1El.value === password2El.value) {
    passwordsMatch = true;
    password1El.style.borderColor = "green";
    password2El.style.borderColor = "green";
  } else {
    passwordsMatch = false;
    message.textContent = "Make sure passwords match.";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
    password1El.style.borderColor = "red";
    password2El.style.borderColor = "red";
    return;
  }
  // If form is valid and passwords match
  if (isValid && passwordsMatch) {
    message.textContent = "Successfully Registered!";
    message.style.color = "green";
    messageContainer.style.borderColor = "green";
    // setTimeout(function () {
    //   isValid = passwordsMatch = false;
    // }, 3000);
  }
}

function storeFormData() {
  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    website: form.website.value,
    password: form.password.value,
  };
  // Do something with user data
  console.log(user);
}

function processFormData(event) {
  event.preventDefault();
  // Validate Form
  validateForm();
  // Submit Data if valid
  if (isValid && passwordsMatch) {
    storeFormData();
    resetFormInput();
  }
}

// Event Listener
form.addEventListener("submit", processFormData);
