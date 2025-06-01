# AsciiVideo

# 🎥 ASCII Video Stream with Density Mapping

This project uses [p5.js](https://p5js.org/) to convert your webcam feed into live **ASCII art**. It maps pixel brightness to a series of character "densities" to create dynamic, text-based visualizations.

[Live Demo](https://editor.p5js.org/Usman_Ali/full/R56-Mu1EN)

## 🧠 Concept

Each frame of the webcam video is analyzed pixel by pixel. The brightness of each pixel is then mapped to a character from a selected density string. Characters with more visual weight represent brighter or darker areas accordingly. The result is a real-time ASCII representation of your video feed.

## 🚀 Features

- 🎞️ Real-time ASCII rendering of webcam feed  
- 🧩 Switch between **14 different density presets** using arrow keys  
- 🧮 Responsive layout: adjusts to window size with defined width/height percentages  
- 💻 Uses monospace font and preformatted text for consistent character spacing  
- 🖤 Dark mode aesthetic with centered output  
- 🔁 Automatically resizes when window is resized  

## 🎯 Controls

- ➡️ Press **Right Arrow** to cycle to the next density pattern  
- ⬅️ Press **Left Arrow** to go back to the previous density  

## 🔧 Configuration

You can tweak the visual appearance by adjusting these variables:

```javascript
let widthPercent = 0.5;   // % of total window width used (0.0 to 1.0)
let heightPercent = 0.9;  // % of total window height used (0.0 to 1.0)

const charW = 7;          // Approximate character width in pixels
const charH = 14;         // Approximate character height in pixels
```

Changing `widthPercent` and `heightPercent` allows you to modify the effective "resolution" of the ASCII output while maintaining a consistent character ratio.

## 📦 Dependencies

- [p5.js](https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.0/p5.min.js)  
- [p5.dom.js](https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.0/addons/p5.dom.min.js) (for `createCapture()` and DOM manipulation)

## 📁 How to Use

1. Clone or download the project
2. Make sure you include the `p5.js` and `p5.dom.js` libraries
3. Open the HTML file in a modern browser
4. Grant webcam access when prompted
5. Watch your face (or anything) turn into ASCII art in real time!

## 🧱 Density Strings

You can customize the visual style by modifying the `densities` array. Each string represents a different mapping of brightness to characters:

```javascript
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
```

Feel free to add your own character sets for unique styles.

## 🧪 Preview

Here's a sample snapshot of how the ASCII might look:

```
@%#%**+==--::::....                  
##@@%%%%%**+==---:::....             
@@####%%%%**+==---::::.....         
```

## 👤 Author

**Usman**
Student of BS Software Engineering  
[FAST-NUCES, Lahore, Pakistan]

## 🪪 License

This project is licensed under the **MIT License**.  
You are free to use, modify, and distribute it with proper attribution.
