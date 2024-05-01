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

function otpTransition() {
  const otpInputs = document.querySelectorAll(".otp-input");

  otpInputs.forEach((input) => {
    if (input) {
      otpInputs[0].focus();
    }

    if (input.value.length <= 0) {
      input.textContent = "-";
    }

    input.addEventListener("keyup", (e) => {
      if (e.key === "Backspace") {
        input.previousElementSibling?.focus();
      } else {
        input.nextElementSibling?.focus();
      }
    });
  });
}
otpTransition();

// reset password validation
function resetPassword() {
  const inputContainer = document.getElementsByClassName("inputs-container")[0];
  const errorIcon = document.querySelectorAll(".error-x");
  const checkIcon = document.querySelectorAll("#check-icon");
  const validateBox = document.querySelectorAll("#validate-box");
  inputContainer.classList.add("error");
  errorIcon.forEach((e) => {
    e.classList.add("show");
  });
  checkIcon.forEach((e) => {
    e.classList.add("hide");
  });
  validateBox.forEach((e) => {
    e.classList.remove("hide");
  });
}

// show menu in small screen

function showMenu() {
  const menuSideBar = document.querySelector(".menu-list-small");
  const bodyBg = document.querySelector(".body-bg");
  menuSideBar.classList.add("show");
  bodyBg.classList.add("show");
  console.log("test");
}

////////// hide side menu with click outside
window.addEventListener("click", function (e) {
  const menuSideBar = document.querySelector(".menu-list-small");
  const menuIcon = document.querySelector(".menu-icon");
  const bodyBg = document.querySelector(".body-bg");
  if (!menuSideBar.contains(e.target) && !menuIcon.contains(e.target)) {
    menuSideBar.classList.remove("show");
    bodyBg.classList.remove("show");
    menuIcon.classList.remove("hide");
  }
});

//////////////////////////////////////////
// sidebar menu toggle
const sidebar = document.getElementById("sidebar-open");
const collapsedSidebar = document.getElementById("sidebar-collapsed");
// const openSidebarIcon = document.getElementById("sidebar-collapsed-icon");
// const collapseSidebarIcon = document.getElementById("sidebar-open-icon");
function collapseSidebar() {
  sidebar.classList.add("hide");
  collapsedSidebar.classList.remove("hide");
}

function openSidebar() {
  sidebar.classList.remove("hide");
  collapsedSidebar.classList.add("hide");
}
