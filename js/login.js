document.addEventListener("DOMContentLoaded", () => {

    const loginPopup = document.getElementById("loginPopup");

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
        e.preventDefault();

        const password = loginPassword.value.trim();

        if (password.length < 6) {
            loginError.textContent = "Password must be at least 6 characters";
            return;
        }

        loginError.textContent = "";
        alert("Login successful (frontend demo)");
        closeLogin();
    };

});
