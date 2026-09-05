const sidebar = document.querySelector("#sidebar");
const overlay = document.querySelector("#sidebar-overlay");
const openButton = document.querySelector("#open-sidebar");
const closeButton = document.querySelector("#close-sidebar");

function setSidebarOpen(isOpen) {
  sidebar.classList.toggle("is-open", isOpen);
  overlay.classList.toggle("is-visible", isOpen);
  openButton.setAttribute("aria-expanded", String(isOpen));
}

openButton.addEventListener("click", () => setSidebarOpen(true));
closeButton.addEventListener("click", () => setSidebarOpen(false));
overlay.addEventListener("click", () => setSidebarOpen(false));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setSidebarOpen(false);
});

document.querySelectorAll(".nav__link").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelectorAll(".nav__link").forEach((item) => {
      item.classList.remove("nav__link--active");
      item.removeAttribute("aria-current");
    });

    link.classList.add("nav__link--active");
    link.setAttribute("aria-current", "page");
    setSidebarOpen(false);
  });
});
