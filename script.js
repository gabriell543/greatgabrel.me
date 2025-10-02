// ---------------- STAR BACKGROUND ----------------
const background = document.getElementById("background");
const numStars = 100;
for (let i = 0; i < numStars; i++) {
  const star = document.createElement("div");
  star.className = "star";
  star.style.top = Math.random() * 100 + "%";
  star.style.left = Math.random() * 100 + "%";
  star.style.animationDelay = Math.random() * 5 + "s";
  background.appendChild(star);
}

// ---------------- SKILL BAR ANIMATION ----------------
const skills = document.querySelectorAll(".skills__bar-inner");
const skillsSection = document.getElementById("skills");

function animateSkills() {
  const sectionPos = skillsSection.getBoundingClientRect().top;
  const screenPos = window.innerHeight;
  if (sectionPos < screenPos) {
    skills.forEach((skill) => {
      skill.style.width = skill.getAttribute("data-width");
    });
    window.removeEventListener("scroll", animateSkills);
  }
}

window.addEventListener("scroll", animateSkills);

// ---------------- ACTIVE LINK ON SCROLL ----------------
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".sidebar__nav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
