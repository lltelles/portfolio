function smoothScroll(event, targetId) {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: "smooth" });
  }

  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    const logo = document.querySelector(".logo");
    const navLinks = document.querySelectorAll(".nav-link");
    const scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
      header.classList.add("scrolled");
      logo.classList.add("scrolled");
      navLinks.forEach(function (navLink) {
        navLink.classList.add("scrolled");
      });
    } else {
      header.classList.remove("scrolled");
      logo.classList.remove("scrolled");
      navLinks.forEach(function (navLink) {
        navLink.classList.remove("scrolled");
      });
    }
  });

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  window.addEventListener("scroll", function () {
    const backToTopButton = document.getElementById("back-to-top");
    const scrollPosition = window.scrollY;

    if (scrollPosition > 300) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });

  emailjs.init("bymbzo6rR0cAG5B9W"); // Replace with your EmailJS user ID
window.onload = function () {
  document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get the form data
    var formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };

    // Send the form data using EmailJS
    emailjs.send("service_wf5vjft", "template_6klr8rl", formData).then(
      function () {
        location.reload();
        console.log("SUCCESS!");
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  });
};



  