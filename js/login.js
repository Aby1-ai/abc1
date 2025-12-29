//login
document.addEventListener("DOMContentLoaded", () => {

    const loginPopup = document.getElementById("loginPopup");
    const loginPassword = document.getElementById("loginPassword");
    const loginError = document.getElementById("loginError");

    window.openLogin = function () {
        loginPopup.style.display = "flex";
    };

    window.closeLogin = function (e) {
        if (!e || e.target === loginPopup) {
            loginPopup.style.display = "none";
            loginError.textContent = "";
        }
    };

    window.loginUser = function () {

        const password = loginPassword.value.trim();

        if (password.length < 6) {
            loginError.textContent = "Password must be at least 6 characters";
            return;
        }

        loginError.textContent = "";
        alert("Login successful (frontend demo)");
        window.location.href = "after_login.html";
    };

//signup
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

    window.signupUser = function () {
        const name = signupName.value.trim();
        const email = signupEmail.value.trim();
        const password = signupPassword.value.trim();

        if (name === "" || email === "" || password === "") {
            signupError.textContent = "All fields are required";
            return;
        }

        if (password.length < 6) {
            signupError.textContent = "Password must be at least 6 characters";
            return;
        }

        signupError.textContent = "";
        alert("Signup successful! Please login.");
        closeSignup();
        openLogin(); // open login after signup
    };
});