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
// const overlay = document.getElementById("form_overlay");
const btn = document.getElementById("btn");

form.addEventListener("submit", async function () {
  btn.innerHTML =
    '<span class="spinner-border spinner-border-sm" aria-hidden="true"></span>';
});
