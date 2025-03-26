document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    alert("Account Created Successfully!");
    window.location.href = "login.html"; // Redirect to login page
});