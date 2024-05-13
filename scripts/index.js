// DropDown toggle
function toggleDropdown() {
  // Query all list items and links within the navigation list
  const listItem = document.querySelectorAll(".nav-container .nav-list li");
  const listLink = [
    ...document.querySelectorAll(".nav-container .nav-list li a"),
  ];

  // Check if listItem and listLink are not empty
  if (listItem.length === 0 || listLink.length === 0) {
    console.error("Navigation list items or links not found.");
    return;
  }

  listLink.forEach((link, index) => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent the default link action

      // Toggle the 'active' class for the corresponding list item
      listItem[index].classList.toggle("active");
    });
  });
}
function toggleToolTipMenuOnTable(e) {
  // Ensure the event and tooltip container exist
  if (!e) {
    console.error("Event object is not provided.");
    return;
  }

  const toolTipContainer = document.getElementById("tooltip");
  if (!toolTipContainer) {
    console.error("Tooltip container not found.");
    return;
  }

  // Update tooltip position and make it active
  toolTipContainer.classList.toggle("active");

  // Ensure the target element (related to the event) exists
  const target = e;
  if (!target) {
    console.error("Target element not found.");
    return;
  }

  // Increase the offset based on the current top position
  const currentTop = parseInt(toolTipContainer.style.top) || 0;
  let offsetIncrease = 10; // You can adjust the amount by which the offset increases

  offsetIncrease++;

  toolTipContainer.style.top = target.offsetTop * offsetIncrease + "px";
}

function togglePassword() {
  const passwordInput = document.getElementById("password");
  // Ensure the password input element exists before attempting to use it
  if (!passwordInput) {
    console.error("Password input element not found.");
    return;
  }

  // Safe-guard against possible incorrect 'type' property values
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else if (passwordInput.type === "text") {
    passwordInput.type = "password";
  } else {
    console.error("Password input type is neither 'text' nor 'password'.");
  }
}

function validateInput() {
  // Selectors should be specific enough to ensure elements exist
  const passwordInput = document.getElementById("password");
  const emailInput = document.getElementById("email");
  const errorBox = document.querySelector(".error-msg-box");
  const inputContainer = document.querySelector(".inputs-container");
  const hidePasswordIcon = document.getElementById("hide-password-icon");
  const errorIcons = document.querySelectorAll(".error-x");

  // Check if all elements are present
  if (
    !passwordInput ||
    !emailInput ||
    !errorBox ||
    !inputContainer ||
    !hidePasswordIcon ||
    errorIcons.length === 0
  ) {
    console.error("One or more required elements are missing in the DOM.");
    return; // Exit the function if elements are missing
  }

  // Use logical OR '||' instead of bitwise OR '|'
  if (passwordInput.value === "" || emailInput.value === "") {
    errorBox.classList.add("show");
    inputContainer.classList.add("error");
    hidePasswordIcon.classList.add("error");

    errorIcons.forEach((icon) => {
      icon.classList.add("show");
    });
  }
}

function forgotPasswordValidation() {
  // Ensure the email input and invalid message container are present in the DOM
  const emailInput = document.getElementById("email");
  const invalidMessage = document.querySelector(".invalid-container");

  if (!emailInput || !invalidMessage) {
    console.error(
      "Email input or invalid message container is missing in the DOM."
    );
    return; // Exit the function if elements are missing
  }

  const emailValue = emailInput.value;
  let isValid = false;

  // Simplified and more robust email validation check
  isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);

  if (isValid) {
    emailInput.classList.remove("active");
    invalidMessage.style.display = "none";
  } else {
    emailInput.classList.add("active");
    invalidMessage.style.display = "flex";
  }
}

function otpTransition() {
  const otpInputs = document.querySelectorAll(".otp-input");

  // Focus on the first input when the function is called, no need to do this in the loop
  if (otpInputs.length > 0) {
    otpInputs[0].focus();
  }

  otpInputs.forEach((input, index) => {
    // Removed redundant check for input as querySelectorAll will only return non-null elements
    // Changed from textContent to value to correctly handle input fields
    if (input.value.length <= 0) {
      input.value = "-";
    }

    input.addEventListener("keyup", (e) => {
      // Check the key and input value before deciding to focus on the next or previous input
      if (e.key === "Backspace" && input.value.length <= 0) {
        // Use index to access previous input safely
        if (index > 0) otpInputs[index - 1].focus();
      } else if (input.value.length >= 1) {
        // Use index to access next input safely
        if (index < otpInputs.length - 1) otpInputs[index + 1].focus();
      }
    });
  });
}

// reset password validation
function resetPassword() {
  // Check if the container with class 'inputs-container' exists
  const inputContainer = document.querySelector(".inputs-container");
  if (!inputContainer) {
    console.error("Reset password failed: inputs-container not found.");
    return; // Exit the function if the container doesn't exist
  }

  // It's safer to use querySelectorAll and check for empty NodeList than relying on getElementsByClassName
  const errorIcons = document.querySelectorAll(".error-x");
  const checkIcons = document.querySelectorAll(".check-icon"); // Assuming IDs are unique, use class if multiple icons
  const validateBoxes = document.querySelectorAll(".validate-box"); // Same assumption as checkIcon

  // Add error class to input container
  inputContainer.classList.add("error");

  // Iterate over NodeList even if it's empty, no errors will occur
  errorIcons.forEach((icon) => {
    icon.classList.add("show");
  });

  checkIcons.forEach((icon) => {
    icon.classList.add("hide");
  });

  validateBoxes.forEach((box) => {
    box.classList.remove("hide");
  });
}

// show menu in small screen

function showMenu() {
  const menuSideBar = document.querySelector(".menu-list-small");
  const bodyBg = document.querySelector(".body-bg");
  menuSideBar.classList.add("show");
  bodyBg.classList.add("show");
}

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

// JavaScript to handle select all checkbox functionality
function selectItemsOnTable() {
  document
    .getElementById("selectAllCheckbox")
    .addEventListener("change", function () {
      var checkboxes = document.getElementsByClassName("userCheckbox");
      for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = this.checked;
      }
    });
}

/* Pagination mechanism */

function paginate() {
  // Classes
  const classActive = "active";
  const classInactive = "inactive";
  const classDisabled = "disabled";

  // Components
  const paginationList = document.querySelectorAll(".pagination-pages .page");
  const previousButtons = Array.from(
    document.querySelectorAll(".pagination-pages .prev")
  );
  const nextButtons = Array.from(
    document.querySelectorAll(".pagination-pages .next")
  );
  const activePage = document.querySelector(".active-page");

  if (!paginationList.length) {
    console.error("Pagination list not found.");
    return;
  }

  if (!previousButtons.length || !nextButtons.length) {
    console.error("Previous/Next buttons not found.");
    return;
  }

  if (!activePage) {
    console.error("Active page element not found.");
    return;
  }

  // Set total pages
  const totalPages = document.querySelector(".total-pages");
  if (totalPages) {
    const lastPageNumber =
      paginationList.length > 0
        ? paginationList[paginationList.length - 1].textContent
        : "0";
    totalPages.textContent = lastPageNumber;
  } else {
    console.error("Total pages element not found.");
  }

  paginationList.forEach((page) => {
    page.addEventListener("click", (e) => {
      const pageValue = parseInt(e.target.textContent, 10);

      if (isNaN(pageValue)) {
        console.error("Clicked page number is not a valid number.");
        return;
      }

      paginationList.forEach((p) => {
        p.classList.remove(classActive);
        p.classList.add(classInactive);
      });

      e.target.classList.remove(classInactive);
      e.target.classList.add(classActive);

      previousButtons.forEach((button) => {
        button.classList.toggle(classDisabled, pageValue <= 1);
      });

      nextButtons.forEach((button) => {
        button.classList.toggle(
          classDisabled,
          pageValue >= paginationList.length
        );
      });

      // Set active page
      activePage.textContent = e.target.textContent;
    });
  });
}

// Display results with added null checks and error handling
function displayResults() {
  try {
    const activeResult = document.querySelector(".active-result");
    const displayCount = document.querySelector(".display-count");

    if (!activeResult || !displayCount) {
      console.error(
        "Element(s) not found. Make sure '.active-result' and '.display-count' exist on the page."
      );
      return;
    }

    displayCount.addEventListener("change", (e) => {
      activeResult.textContent = e.target.value;
    });
  } catch (error) {
    console.error("An error occurred in displayResults function:", error);
  }
}

function updateActiveItemBetweenTwoList() {
  // Side menu toggle
  const menuActiveClass = "active-nav";

  const sideMenuItem = Array.from(document.querySelectorAll(".nav-list a"));
  const collapsedSideBar = Array.from(
    document.querySelectorAll(".collapsed-sidebar a")
  );

  // Ensure that the length of the arrays are the same to prevent index out of bounds
  if (sideMenuItem.length !== collapsedSideBar.length) {
    console.error(
      "The number of items in the opened and closed lists are not equal."
    );
    return;
  }

  const openedList = sideMenuItem.slice(-7); // Get the last 7 items
  const closedList = collapsedSideBar;

  openedList.forEach((item, index) => {
    item.addEventListener("click", () => {
      // Clear active class from all items
      openedList.forEach((item) => item.classList.remove(menuActiveClass));
      closedList.forEach((item) => item.classList.remove(menuActiveClass));

      // Toggle active class on clicked items
      openedList[index].classList.add(menuActiveClass);
      closedList[index].classList.add(menuActiveClass);
    });
  });

  closedList.forEach((item, index) => {
    item.addEventListener("click", () => {
      // Clear active class from all items
      openedList.forEach((item) => item.classList.remove(menuActiveClass));
      closedList.forEach((item) => item.classList.remove(menuActiveClass));

      // Toggle active class on clicked items
      openedList[index].classList.add(menuActiveClass);
      closedList[index].classList.add(menuActiveClass);
    });
  });
}

function toggleToolTipMenu() {
  const tooltipButton = document.querySelector(".tooltip-btn");
  const tooltipMenu = document.querySelector(".tooltip-menu");

  // Check that both elements exist to avoid null reference errors
  if (!tooltipButton || !tooltipMenu) {
    console.error("Tooltip button or menu not found in the document.");
    return;
  }

  // Add event listener to button
  tooltipButton.addEventListener("click", (e) => {
    // Prevent any default action
    e.preventDefault();

    // Toggle 'active' class on tooltip menu
    tooltipMenu.classList.toggle("active");
  });
}

// Invoke function
otpTransition();
toggleDropdown();
toggleToolTipMenu();
updateActiveItemBetweenTwoList();
paginate();
selectItemsOnTable();
displayResults();
