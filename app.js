let username_reg = /^[a-zA-Z0-9_]{3,20}$/;
let email_reg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let password_reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
let lower_case = /^(?=.*[a-z])/
let upper_case = /^(?=.*[A-Z])/
let digit = /^(?=.*\d)/
let special_char = /^(?=.*[\W_])/

function checkUserInfo() {
    let user = document.getElementById("user_name").value
    let muted_msg = document.getElementById("muted_msg")
    if (username_reg.test(user)) {
        muted_msg.innerText = ""
    } else if (user.length < 3 || user.length > 20) {
        muted_msg.innerText = "Username must be between 3 and 20 characters.";
        muted_msg.style.color = "red";
    }
    else {
        muted_msg.innerText = "username must only includes alphanumeric letters"
        muted_msg.style.color = "red"
    }
    document.getElementById("user_name").value = ""

    let email = document.getElementById("email").value
    let muted_msg_email = document.getElementById("muted_msg_email")
    if (email_reg.test(email)) {
        muted_msg_email.innerText = ""
    } else if (email.includes(" ")) {
        muted_msg_email.innerText = "Email cannot contain spaces.";
    }
    else {
        muted_msg_email.innerText = "Invalid email format. Example: example@mail.com"
        muted_msg_email.style.color = "red"
    }
    document.getElementById("email").value = ""

    let pass = document.getElementById("pass").value
    let muted_msg_pass = document.getElementById("muted_msg_pass")
    if (!lower_case.test(pass)) {
        muted_msg_pass.innerText = "password must have one lowercase letter"
        muted_msg_pass.style.color = "red"
    } else if (!upper_case.test(pass)) {
        muted_msg_pass.innerText = ""
        muted_msg_pass.innerText = "password must have one uppercase letter"
        muted_msg_pass.style.color = "red"
    } else if (!digit.test(pass)) {
        muted_msg_pass.innerText = ""
        muted_msg_pass.innerText = "password must have one digit"
        muted_msg_pass.style.color = "red"
    } else if (!special_char.test(pass)) {
        muted_msg_pass.innerText = ""
        muted_msg_pass.innerText = "password must have one special character"
        muted_msg_pass.style.color = "red"
    } else if (pass.length < 8) {
        muted_msg_pass.innerText = ""
        muted_msg_pass.innerText = "password must have minimum 8 letters"
        muted_msg_pass.style.color = "red"
    } else {
        muted_msg_pass.innerText = ""
    }
    document.getElementById("pass").value = ""

    let confirm_pass = document.getElementById("confirm_pass").value
    let muted_msg_con_pass = document.getElementById("muted_msg_con_pass")
    if (confirm_pass !== pass) {
        muted_msg_con_pass.innerText = "password is not same"
        muted_msg_con_pass.style.color = "red"
    } else {
        muted_msg_con_pass.innertext = ""
    }
    document.getElementById("confirm_pass").value = ""

    var email_storage = localStorage.setItem("email", email)
    let pass_storage = localStorage.setItem("pass", pass)
}

function logInInfo() {
    let muted_msg_log_email = document.getElementById("muted_msg_log_email")
    let log_email = document.getElementById("log_email").value
    let log_pass = document.getElementById("log_pass").value
    let stored_email = localStorage.getItem("email")
    let stored_pass = localStorage.getItem("pass")
    if (log_email === stored_email) {
        muted_msg_log_email.innerText = ""
    } else {
        muted_msg_log_email.innerText = "invalid email"
        muted_msg_log_email.style.color = "red"
    }
    document.getElementById("log_email").value = ""

    if (log_pass === stored_pass) {
        muted_msg_log_pass.innerText = ""
    } else {
        muted_msg_log_pass.innerText = "invalid password"
        muted_msg_log_pass.style.color = "red"
    }
    document.getElementById("log_pass").value = ""

}