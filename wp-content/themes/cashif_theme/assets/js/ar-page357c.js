// AOS animation
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("load", function () {
    document.body.style.overflowY = "auto";

    var loadingElement = document.getElementById("loading");
    if (loadingElement) {
      setTimeout(function () {
        loadingElement.style.display = "none";
      }, 5000);
    }
  });

  AOS.init({
    once: true,
  });
});

// Hide WhatsApp Btn
const whatsappBtn = document.getElementById("whatsapp-btn");
// Hide Call Btn
// const callBtn = document.getElementById("call-btn");

window.addEventListener("scroll", function () {
  let scrollPosition = window.scrollY || window.pageYOffset;
  let documentHeight =
    document.documentElement.scrollHeight - window.innerHeight;

  if (scrollPosition >= documentHeight) {
    whatsappBtn.classList.add("hide-btn");
    // callBtn.classList.add("hide-btn");
  } else {
    whatsappBtn.classList.remove("hide-btn");
    // callBtn.classList.remove("hide-btn");
  }
});

// Submit form to google sheets
const form = document.forms["submit-to-google-sheet"];
const overlay = document.getElementById("form_overlay");
const btn = document.getElementById("btn");

// const scriptURL =
//   "https://script.google.com/macros/s/AKfycbwJC8IQU595yg-BAOGCHSJ0Ql9g30w81645F0eOgOKmrDD9hC6kEFG3RCy7RZ2qzcNwwA/exec";

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  btn.innerHTML =
    '<span class="spinner-border spinner-border-sm" aria-hidden="true"></span>';

  //
  let name = document.getElementById("name").value;
  //
  let email = document.getElementById("email").value;
  //
  let subject = document.getElementById("subject").innerHTML;
  //
  let note = document.getElementById("note").value;

  try {
    const res = await fetch("https", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        subject: subject,
        note: note,
      }),
    });

    if (res.ok) {
      overlay.style.height = "100%";
      btn.innerHTML = "تم الارسال";
      btn.disabled = true;
      btn.style.background = "#777";
    }
  } catch (error) {
    console.error("Error!", error.message);
    btn.innerHTML = "ارسال";
    alert(error);
  }
});
