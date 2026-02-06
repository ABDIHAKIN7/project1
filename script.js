let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  nav.classList.toggle('active');
}




document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();

    const errorMsg = document.getElementById("errorMsg");

    const name = document.querySelector('input[placeholder="name"]').value.trim();
    const email = document.querySelector('input[placeholder="email"]').value.trim();
    const subject = document.querySelector('input[placeholder="subject"]').value.trim();
    const message = document.querySelector('textarea').value.trim();

    errorMsg.textContent = "";
    errorMsg.style.color = "red";

    // ✔ NAME VALIDATION
    // - Kaliya xarfo (A–Z)
    // - Waa inuu noqdaa labo ama saddex magac
    const namePattern = /^[A-Za-z]+( [A-Za-z]+){1,2}$/;
    if (!namePattern.test(name)) {
        errorMsg.textContent =
          "❌ Geli labo ama saddex magac (numbers lama ogola)";
        return;
    }

    // ✔ EMAIL VALIDATION
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorMsg.textContent = "❌ Fadlan geli email sax ah";
        return;
    }

    // ✔ SUBJECT VALIDATION
    if (subject === "") {
        errorMsg.textContent = "❌ Fadlan geli subject";
        return;
    }

    // ✔ MESSAGE VALIDATION
    if (message.length < 10) {
        errorMsg.textContent = "❌ Message-ku ha noqdo ugu yaraan 10 xaraf";
        return;
    }

    // ✅ SUCCESS
    errorMsg.style.color = "green";
    errorMsg.textContent = "✅ Message waa la diray si guul leh";
    this.reset();
});

