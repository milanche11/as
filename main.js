// Topbar nestaje na scroll, header ostaje sticky (CSS already handles)
(function(){
  const threshold = 10;
  window.addEventListener("scroll", () => {
    const y = window.scrollY || document.documentElement.scrollTop;
    if (y > threshold) document.body.classList.add("is-scrolled");
    else document.body.classList.remove("is-scrolled");
  }, { passive: true });
})();

// Mobile menu toggle (optional)
(function(){
  const burger = document.getElementById("hamburger");
  const menu = document.getElementById("mobileMenu");
  if(!burger || !menu) return;

  burger.addEventListener("click", () => {
    const isOpen = burger.getAttribute("aria-expanded") === "true";
    burger.setAttribute("aria-expanded", String(!isOpen));
    menu.hidden = isOpen;
  });
})();

// Footer year
(function(){
  const y = document.getElementById("year");
  if(y) y.textContent = new Date().getFullYear();
})();
