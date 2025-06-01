const densities = [
  "Ñ@#W$9876543210?!abc;:+=-,._    ",
  "       .:-i|=+%O#@",
  "      .:░▒▓█",
  "@%#*+=-:. ",
  " .,:;irsXA253hMHGS#9B&@",
  "MWN8$O0ZC1?!+><:~`     ",
  " ░▒▓█",
  " .:-=+*#%@█",
  "⣿⣷⣯⣟⡿⣿⠿⠛⠉  ",
  "▁▂▃▄▅▆▇█",
  "⠁⠂⠄⡀⣀⣤⣶⣿",
  " .oO0#",
  "   .oO0█",
  "▖▘▝▗▚▞▙▛▜▟█",
];


let densityIndex = 0;
let video;
let asciiDiv;

function setup() {
  asciiDiv = createDiv();
  noCanvas();
  video = createCapture(VIDEO);
  video.size(64, 48);
}

function draw() {
  video.loadPixels();
  let asciiImage = "";
  const density = densities[densityIndex];

  for (let j = 0; j < video.height; j++) {
    for (let i = 0; i < video.width; i++) {
      const pixelIndex = (i + j * video.width) * 4;
      const r = video.pixels[pixelIndex + 0];
      const g = video.pixels[pixelIndex + 1];
      const b = video.pixels[pixelIndex + 2];
      const avg = (r + g + b) / 3;
      const len = density.length;
      const charIndex = floor(map(avg, 0, 255, len, 0));
      const c = density.charAt(charIndex);
      asciiImage += (c === " ") ? "&nbsp;" : c;
    }
    asciiImage += "<br/>";
  }

  asciiDiv.html(asciiImage);
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    densityIndex = (densityIndex + 1) % densities.length;
  } else if (keyCode === LEFT_ARROW) {
    densityIndex = (densityIndex - 1 + densities.length) % densities.length;
  }
}