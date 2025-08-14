// Smooth scroll to projects section when button clicked
document.getElementById("projectsBtn").addEventListener("click", function () {
  const projects = document.getElementById("projects");
  if (projects) projects.scrollIntoView({ behavior: "smooth" });
});

// Simple contact form handler
const form = document.querySelector(".contact form");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("✅ Your message has been sent! Thank you.");
    form.reset();
  });
}
