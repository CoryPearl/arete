function scrollToSection() {
  const targetSection = document.getElementById("type");
  if (targetSection) {
    targetSection.scrollIntoView({ behavior: "smooth" });
  }
}

function scrollToSectionAbout() {
  const targetSection = document.getElementById("about");
  if (targetSection) {
    targetSection.scrollIntoView({ behavior: "smooth" });
  }
}
