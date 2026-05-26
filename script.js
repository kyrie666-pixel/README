const WA_NUMBER = "66614152454";

const nav = document.querySelector(".nav");
const toggle = document.querySelector(".nav-toggle");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open menu");
    });
  });
}

document.getElementById("booking-form")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const form = e.target;
  const name = form.name.value.trim();
  const phone = form.phone.value.trim();
  const service = form.service.value;
  const message = form.message.value.trim();

  const lines = [
    "Hello, I would like to inquire about booking at Impressions Clinic.",
    "",
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Service: ${service}`,
  ];
  if (message) lines.push(`Message: ${message}`);

  const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
  window.open(url, "_blank", "noopener,noreferrer");
});
