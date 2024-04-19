function processPayment() {
    var creditCardNumber = document.getElementById("creditCardNumber").value;
    var cvv = document.getElementById("cvv").value;
    var expirationDate = document.getElementById("expirationDate").value;
    var address = document.getElementById("address").value;
    var errorElement = document.getElementById("paymentError");


    errorElement.innerHTML = "";

    if (creditCardNumber.trim() === "") {
        showError("Credit Card Number is required");
        return false;
    }

    if (cvv.trim() === "") {
        showError("CVV is required");
        return false;
    }

    if (expirationDate.trim() === "") {
        showError("Expiration Date is required");
        return false;
    }

    if (address.trim() === "") {
        showError("Address is required");
        return false;
    }


    document.getElementById("paymentForm").style.display = "none";
    document.getElementById("paymentSuccessMessage").style.display = "block";


    return false;
}

function showError(message) {
    var errorElement = document.getElementById("paymentError");
    var p = document.createElement("p");
    p.className = "error";
    p.textContent = message;
    errorElement.appendChild(p);
}
