document.addEventListener("DOMContentLoaded", () => {

    const loginPopup = document.getElementById("loginPopup");
    const loginEmail = document.getElementById("loginEmail");
    const loginPassword = document.getElementById("loginPassword");
    const loginError = document.getElementById("loginError");

    // Email regex (basic + safe)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // ===== LOGIN =====
    window.openLogin = function () {
        loginPopup.style.display = "flex";
    };

    window.closeLogin = function (e) {
        if (!e || e.target === loginPopup) {
            loginPopup.style.display = "none";
            loginError.textContent = "";
        }
    };

    window.loginUser = function (e) {
        if (e) e.preventDefault();

        const email = loginEmail.value.trim();
        const password = loginPassword.value.trim();

        // Email validation
        if (!emailPattern.test(email)) {
            loginError.textContent = "Please enter a valid email address.";
            return;
        }

        // Password validation (simple)
        if (password === "") {
            loginError.textContent = "Password cannot be empty.";
            return;
        }

        loginError.textContent = "";
        alert("Login successful (frontend demo)");
        window.location.href = "after_login.html";
    };

    // ===== SIGNUP =====
    const signupPopup = document.getElementById("signupPopup");
    const signupName = document.getElementById("signupName");
    const signupEmail = document.getElementById("signupEmail");
    const signupPassword = document.getElementById("signupPassword");
    const signupError = document.getElementById("signupError");

    window.openSignup = function () {
        signupPopup.style.display = "flex";
    };

    window.closeSignup = function (e) {
        if (!e || e.target === signupPopup) {
            signupPopup.style.display = "none";
            signupError.textContent = "";
        }
    };

    window.signupUser = function (e) {
        if (e) e.preventDefault();

        const name = signupName.value.trim();
        const email = signupEmail.value.trim();
        const password = signupPassword.value.trim();

        if (name === "" || email === "" || password === "") {
            signupError.textContent = "All fields are required.";
            return;
        }

        // Email validation
        if (!emailPattern.test(email)) {
            signupError.textContent = "Please enter a valid email address.";
            return;
        }

        // Password validation (simple)
        if (password === "") {
            signupError.textContent = "Password cannot be empty.";
            return;
        }

        signupError.textContent = "";
        alert("Signup successful! Please login.");
        closeSignup();
        openLogin();
    };
});

function goBack() {
  if (document.referrer !== "") {
    history.back();
  } else {
    window.location.href = "after_login.html";
    // fallback if no history
  }
}
