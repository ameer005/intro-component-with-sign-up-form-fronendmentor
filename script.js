// Forms Elements
const firstNameEl = document.getElementById("first-name");
const lastNameEl = document.getElementById("last-name");
const emailEl = document.getElementById("email");
const passwordEl = document.getElementById("password");

// Buttons
const btnSubmit = document.querySelector(".btn-submit");

// HELPER FUNCTIONS

// checking if element value is empty
const empty = function (input, message) {
  const parent = input.parentNode;
  const errorIcon = parent.querySelector(".icon-error");
  const errorText = parent.querySelector(".error-text");

  input.style.border = "2px solid hsl(0, 100%, 74%)";
  errorText.textContent = message;
  errorIcon.style.display = "block";
  errorText.style.display = "block";
};

// if elements containing valur
const notEmpty = function (input) {
  const parent = input.parentNode;
  const errorIcon = parent.querySelector(".icon-error");
  const errorText = parent.querySelector(".error-text");

  input.style.border = "2px solid rgb(199, 199, 199)";
  errorIcon.style.display = "none";
  errorText.style.display = "none";
};

// checking if email is correct
const isValidEmail = function (email) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
    email.value.trim()
  );
};

// VALIDATING INPUT
const validateInput = function () {
  // Validating first name
  if (firstNameEl.value.trim() == "")
    empty(firstNameEl, "First Name Cannot be empty");
  else notEmpty(firstNameEl);

  // Validating Last Name
  if (lastNameEl.value.trim() == "")
    empty(lastNameEl, "Last Name Cannot be empty");
  else notEmpty(lastNameEl);

  // Validating Email
  if (emailEl.value.trim() == "") empty(emailEl, "Email Cannot be empty");
  else if (!isValidEmail(emailEl))
    empty(emailEl, "Looks like this is not an email");
  else notEmpty(emailEl);

  // validating password
  if (passwordEl.value.trim() == "")
    empty(passwordEl, "Password Cannot be empty");
  else notEmpty(passwordEl);
};

// handling form event
btnSubmit.addEventListener("click", function (e) {
  e.preventDefault();

  validateInput();
});
