document.getElementById("eventForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let department = document.getElementById("department").value;
    let event = document.getElementById("event").value;
    let gender = document.querySelector('input[name="gender"]:checked');

    let message = document.getElementById("message");

    if(name === "" || email === "" || phone === "" || department === "" || event === "" || !gender) {
        message.style.color = "red";
        message.innerText = "Please fill all fields correctly!";
        return;
    }

    if(phone.length !== 10 || isNaN(phone)) {
        message.style.color = "red";
        message.innerText = "Enter valid 10-digit phone number!";
        return;
    }

    message.style.color = "green";
    message.innerText = "Registration Successful 🎉";
});