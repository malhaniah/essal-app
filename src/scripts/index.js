// toggle password mechanism
function togglePassword() {
  const passwordInput = document.getElementById("password");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}

function forgotPasswordValidation() {
  const emailValue = document.getElementById("email").value;
  const invalidMessage = document.querySelector(".invalid-container");
  const email = document.getElementById("email");

  let isValid = false;

  if (
    emailValue.length > 0 &&
    emailValue.includes("@") &&
    emailValue.includes(".com")
  ) {
    isValid = true;
  }

  if (isValid) {
    email.classList.remove("active");
    invalidMessage.style.display = "none";
  } else {
    email.classList.add("active");
    invalidMessage.style.display = "flex";
  }

  console.log(isValid);
}
