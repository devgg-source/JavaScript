const colorInput = document.getElementById("color");

colorInput.addEventListener("input", colorDetect);

function colorDetect(event) {
  const color = event.target.value;
  const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

  if (color.match(hexColorRegex)) {
    colorInput.style.borderColor = color;
  } else {
    colorInput.style.borderColor = "rgb(226,226,226)";
  }
}
