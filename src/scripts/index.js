// toggle password mechanism
function togglePassword() {
  const passwordInput = document.getElementById("password");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}

// show error msg
function validateInput() {
  const passwordInput = document.getElementById("password");
  const emailInput = document.getElementById("email");
  const errorBox = document.getElementsByClassName("error-msg-box")[0];
  const inputContainer = document.getElementsByClassName("inputs-container")[0];
  const hidePasswordIcon = document.getElementById("hide-password-icon");
  const errorIcon = document.querySelectorAll(".error-x");

  if ((passwordInput.value === "") | (emailInput.value === "")) {
    errorBox.classList.add("show");
    inputContainer.classList.add("error");
    hidePasswordIcon.classList.add("error");
    errorIcon.forEach((e) => {
      e.classList.add("show");
    });
  }
}
