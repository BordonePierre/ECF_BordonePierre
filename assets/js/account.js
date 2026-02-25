const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", function () {

    const email = document.getElementById("emailUser").value;
    const password = document.getElementById("pwdUser").value;

    if (email === "admin" && password === "admin") {
        window.location.href = "account-login.html";
    } else {
        alert("Identifiants incorrects");
    }

});