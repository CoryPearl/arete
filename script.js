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

function downloadMP3(name) {
  const mp3File = `resources/${name}.mp3`;

  const link = document.createElement("a");

  link.href = mp3File;
  link.download = "downloaded_audio.mp3";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
