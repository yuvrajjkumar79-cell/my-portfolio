const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.textContent = open ? "×" : "☰";
  });
}

// Front-end demo only: forms show feedback but do not send/store information.
document.querySelectorAll("[data-demo-form]").forEach(form => {
  form.addEventListener("submit", event => {
    event.preventDefault();
    const message = form.querySelector(".form-message");
    if (message) message.textContent = "Thanks! This demo form is working visually. Connect a backend to receive submissions.";
    form.reset();
  });
});

// Prevent selecting dates in the past on the reservation form.
const dateInput = document.querySelector('input[type="date"]');
if (dateInput) dateInput.min = new Date().toISOString().split("T")[0];
