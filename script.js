const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

const navLinks = document.querySelectorAll(".nav-link");
document.getElementById("year").textContent = new Date().getFullYear();

function openMenu(){
  sidebar.classList.add("open");
  overlay.classList.add("show");
}

function closeMenu(){
  sidebar.classList.remove("open");
  overlay.classList.remove("show");
}

menuBtn?.addEventListener("click", () => {
  sidebar.classList.contains("open") ? closeMenu() : openMenu();
});

overlay?.addEventListener("click", closeMenu);

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
    closeMenu();
  });
});
window.addEventListener("load", () => {
  if (window.location.hash) {
    history.replaceState(null, "", window.location.pathname);
  }
});
window.history.scrollRestoration = "manual";

window.addEventListener("load", () => {
  window.scrollTo(0, 0);
});

const sections = ["home","about","experience","projects","skills","education","contact"]
  .map(id => document.getElementById(id));

window.addEventListener("scroll", () => {
  let current = "home";

  sections.forEach(sec => {
    if(!sec) return;
    const rect = sec.getBoundingClientRect();
    if(rect.top <= 140 && rect.bottom >= 140){
      current = sec.id;
    }
  });

  navLinks.forEach(l => l.classList.remove("active"));
  document.querySelector(`.nav a[href="#${current}"]`)?.classList.add("active");
});
const modalBackdrop = document.getElementById("modalBackdrop");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalLive = document.getElementById("modalLive");
const modalGit = document.getElementById("modalGit");

const projectsData = [
  {
    title: "Growth Sphere",
    desc: "Developed a responsive e-learning platform to support student skill growth and study habits. Designed a modular UI for personalized content delivery and improved learning outcomes.",
    live: "https://fluffy-starlight-59cfc6.netlify.app/",
    git: "#"
  },
  {
    title: "House Price Prediction",
    desc: "Built an end-to-end ML model to predict California housing prices using regression techniques. Trained an XGBoost regression model and evaluated it using R² and MAE.",
    live: "#",
    git: "#"
  },
  {
    title: "Automatic Street Light System",
    desc: "Built a smart streetlight system that automatically activates lights and alarms using motion and light sensors. Presented at a national-level hackathon with a working prototype.",
    live: "#",
    git: "#"
  }
];

window.openProjectModal = function(index){
  const p = projectsData[index];
  modalTitle.textContent = p.title;
  modalDesc.textContent = p.desc;

  modalLive.href = p.live;
  modalGit.href = p.git;

  if(p.live === "#"){
    modalLive.style.pointerEvents = "none";
    modalLive.style.opacity = "0.55";
    modalLive.textContent = "Live (Coming Soon)";
  } else {
    modalLive.style.pointerEvents = "auto";
    modalLive.style.opacity = "1";
    modalLive.textContent = "Live";
  }

  if(p.git === "#"){
    modalGit.style.pointerEvents = "none";
    modalGit.style.opacity = "0.55";
    modalGit.textContent = "GitHub (Coming Soon)";
  } else {
    modalGit.style.pointerEvents = "auto";
    modalGit.style.opacity = "1";
    modalGit.textContent = "GitHub";
  }

  modalBackdrop.classList.add("show");
}

window.closeProjectModal = function(){
  modalBackdrop.classList.remove("show");
}

window.addEventListener("keydown", (e) => {
  if(e.key === "Escape") closeProjectModal();
});

const themeToggle = document.getElementById("themeToggle");

function setTheme(mode){
  if(mode === "light"){
    document.body.classList.add("light");
    themeToggle.textContent = "🌙 Dark"; 
    localStorage.setItem("theme", "light");
  } else {
    document.body.classList.remove("light");
    themeToggle.textContent = "☀️ Light";
    localStorage.setItem("theme", "dark");
  }
}
localStorage.removeItem("theme");
const savedTheme = localStorage.getItem("theme");
if(savedTheme === "dark") setTheme("dark");
else setTheme("light");


themeToggle?.addEventListener("click", () => {
  const isLight = document.body.classList.contains("light");
  setTheme(isLight ? "dark" : "light");
});
const revealEls = document.querySelectorAll(".reveal-item");

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => revealObserver.observe(el));

window.history.scrollRestoration = "manual";

window.addEventListener("load", () => {
  window.scrollTo(0, 0);

  if (window.location.hash) {
    history.replaceState(null, "", window.location.pathname);
  }

  const splash = document.getElementById("splashLoader");

  setTimeout(() => splash?.classList.add("hide"), 900);
  setTimeout(() => splash?.remove(), 1500);
});

