function showMessage() {
    alert("Thank you for visiting our website!");
}

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Your message has been sent successfully!");
            form.reset();
        });
    }

});