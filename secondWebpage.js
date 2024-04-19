function validateForm() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var errorElement = document.getElementById("error");


    errorElement.innerHTML = "";

    if (username.trim() === "") {
        showError("Username is required");
        return false;
    }

    if (email.trim() === "") {
        showError("Email is required");
        return false;
    }

    if (password.trim() === "") {
        showError("Password is required");
        return false;
    }

    if (confirmPassword.trim() === "") {
        showError("Confirm Password is required");
        return false;
    }

    if (password !== confirmPassword) {
        showError("Passwords do not match");
        return false;
    }

    return true;
}

function showError(message) {
    var errorElement = document.getElementById("error");
    var p = document.createElement("p");
    p.className = "error";
    p.textContent = message;
    errorElement.appendChild(p);
}

function registerUser() {



    document.getElementById("registrationForm").style.display = "none";
    document.getElementById("successMessage").style.display = "block";


    return false;
}