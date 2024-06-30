function loader() {
  window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");

    // Check if loader element exists before attempting to use it
    if (loader) {
      loader.classList.add("loader-hidden");

      loader.addEventListener("transitionend", function () {
        // Ensure the loader is still part of the document before removal
        if (loader.parentNode) {
          loader.parentNode.removeChild(loader);
        }
      });
    } else {
      console.warn("Loader element not found.");
    }
  });
}

// Checkbox toggle
function toggleCheckbox() {
  $(".checkbox-container input").click(function () {
    $(this).parent().toggleClass("checked");
  });
}

toggleCheckbox();

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
function toggleToolTipMenuOnTable() {
  const optionsColumns = document.querySelectorAll(".options-column");
  optionsColumns.forEach(function (column) {
    column.addEventListener("click", function (event) {
      const activeMenu = document.querySelector(".options-column.active");
      if (activeMenu && activeMenu !== this) {
        activeMenu.classList.remove("active");
      }
      this.classList.toggle("active");
      event.stopPropagation(); // Prevent click event from bubbling to parent elements
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", function (event) {
    const isOptionsMenu = event.target.closest(".options-menu");
    if (!isOptionsMenu) {
      const activeMenu = document.querySelector(".options-column.active");
      if (activeMenu) {
        activeMenu.classList.remove("active");
      }
    }
  });
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
  const checkboxes = document.getElementById("selectAllCheckbox");

  if (!checkboxes) {
    return;
  } else {
    checkboxes.addEventListener("change", function () {
      const checkboxes = document.getElementsByClassName("userCheckbox");
      for (const i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = this.checked;
      }
    });
  }
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

function updateActiveClassItem() {
  // Side menu toggle
  const menuActiveClass = "active-nav";

  const sideMenuItem = Array.from(
    document.querySelectorAll(".nav-list li:not(.sub-item)")
  ).filter((item) => !item.classList.contains(menuActiveClass));

  sideMenuItem.forEach((item) => {
    if (item.classList.contains(menuActiveClass)) {
      item.classList.remove(menuActiveClass);
    }
    item.addEventListener("click", (e) => {
      e.preventDefault();
      e.target.classList.toggle(menuActiveClass);
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

function toggleTabs() {
  const activeTab = "active-tab";
  const tabs = document.querySelectorAll(".tabs-container span");

  tabs.forEach((tab) => {
    // Add event listener to each tab
    tab.addEventListener("click", (e) => {
      // Remove 'active' class from all tabs
      tabs.forEach((tab) => {
        tab.classList.remove(activeTab);
      });

      // Add 'active' class to clicked tab
      e.target.classList.add(activeTab);
    });
  });
}

function toggleAccordion() {
  const activeAccordion = "active-accordion";
  const accordions = document.querySelectorAll(".accordion");
  const accordionHeaders = [...document.querySelectorAll(".accordion-header")];

  accordionHeaders.forEach((header) => {
    // Add event listener to each accordion header
    header.addEventListener("click", (e) => {
      // Remove 'active' class from all accordion headers
      let index = accordionHeaders.indexOf(e.currentTarget);
      accordions[index].classList.toggle(activeAccordion);
    });
  });
}

function passwordValidationCheck() {
  const colors = ["#f8394a", "#f8a839", "#58bf96"];
  const passwordInput = document.querySelector(".authenticationPassword");
  const passwordStrength = document.querySelector(".password-strength");
  const passwordStrengthText = document.querySelector(
    ".password-strength-text"
  );

  if (!passwordInput) {
    console.error("Password input not found in the document.");
    return;
  }

  passwordInput.addEventListener("input", (e) => {
    const password = e.target.value;

    if (!password) {
      return;
    }

    if (password.length < 8) {
      passwordStrength.style.backgroundColor = colors[0];
      passwordStrength.style.width = "20%";
      passwordStrengthText.textContent = "Weak";
      passwordStrengthText.style.color = colors[0];
    } else if (password.length < 12) {
      passwordStrength.style.backgroundColor = colors[1];
      passwordStrength.style.width = "40%";
      passwordStrengthText.textContent = "Medium";
      passwordStrengthText.style.color = colors[1];
    } else {
      passwordStrength.style.backgroundColor = colors[2];
      passwordStrength.style.width = "100%";
      passwordStrengthText.textContent = "Strong";
      passwordStrengthText.style.color = colors[2];
    }
  });
}

function uploadListener(fileInputId) {
  const fileInput = document.getElementById(fileInputId);

  if (!fileInput) {
    console.error("File input not found in the document.");
    return;
  }

  fileInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) {
      return;
    } else {
      document.querySelector(".no-file-chosen").classList.remove("uploaded");
    }

    alert(`File name: ${file.name} has been uploaded`);
    document.querySelector(".no-file-chosen").classList.add("uploaded");
  });
}

function selectorListener() {
  document.querySelectorAll(".input-container.selector").forEach((el) => {
    el.addEventListener("click", (e) => {
      const select = el.querySelector("select").value;
      if (select === "date") {
        el.querySelector("input").type = "date";
        el.querySelector("input").placeholder = "YYYY-MM-DD";
      }

      if (select === "phone") {
        el.querySelector("input").type = "tel";
        el.querySelector("input").placeholder = "+966 XX XXX XXXX";
      }
    });
  });
}
selectorListener();

function subFilterListener() {
  $(".filter-btn").on("click", function () {
    $(".table-filters").toggleClass("active");
  });
}

subFilterListener();

/**
 * This function is responsible for resetting the filter inputs in the table.
 *
 * It attaches a click event listener to all elements with the class 'reset-btn'.
 * When a 'reset-btn' is clicked, it finds all input elements inside the table-filters
 * container and sets their values to an empty string.
 */
function resetFilters() {
  // Attach a click event listener to all elements with the class 'reset-btn'
  $(".reset-btn").on("click", function () {
    // Find all input elements inside the table-filters container
    $(".table-filters input").val("");
  });
}
resetFilters();

// This function toggles the visibility of the team list in the workload section.
//
// It first selects all span elements inside the workloadTeamList list, and attaches
// a click event listener to each of them. When a span is clicked, it toggles the
// 'active' class and the 'bg-main' and 'text-white' classes. It also toggles the
// 'd-none' class on the siblings of the clicked span.
//
// The siblings are the ul elements that are siblings of the clicked span's parent
// li element. If the clicked span has the 'active' class, it removes the 'd-none'
// class from the siblings, and if it doesn't have the 'active' class, it adds the
// 'd-none' class to the siblings.
//
// Finally, it selects all ul elements inside the workloadTeamList list's siblings'
// children, and adds the 'd-none' class to them.
function toggleWorkloadList() {
  const el = $("#workloadTeamList li span").on("click", function () {
    $(this).toggleClass("active");

    if ($(this).hasClass("active")) {
      $(this).siblings().removeClass("d-none");
    } else {
      $(this).siblings().addClass("d-none");
    }
  });

  // Select all ul elements inside the workloadTeamList list's siblings' children,
  // and add the 'd-none' class to them.
  const sibling = el.parent().siblings().find("ul").addClass("d-none");
}
toggleWorkloadList();
// Invoke function
loader();
passwordValidationCheck();
toggleAccordion();
toggleTabs();
toggleToolTipMenuOnTable();
otpTransition();
toggleDropdown();
toggleToolTipMenu();
updateActiveClassItem();
paginate();
selectItemsOnTable();
displayResults();
uploadListener("avatar");
