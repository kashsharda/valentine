// Get references to the buttons and the image
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const gif = document.getElementById("gif");

// Track how many times the "No" button is clicked
let noClickCount = 0;

// Event listener for the "Yes" button
yesBtn.addEventListener("click", () => {
    // Set the image source
    gif.src = "cute.jpg";  // Replace with the actual path to your image or GIF
    gif.style.display = "block";       // Show the image

    // Increase the image size
    gif.style.width = "500px";         // Change this value to increase or decrease image size
    gif.style.height = "500px";        // Change this value to increase or decrease image size

    // Hide the buttons after "Yes" is clicked
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
});

// Event listener for the "No" button
noBtn.addEventListener("mouseover", () => {
    // Change the "No" button position randomly on hover
    noBtn.style.position = "absolute";
    noBtn.style.top = Math.random() * 80 + "%";  // Randomize the vertical position
    noBtn.style.left = Math.random() * 80 + "%"; // Randomize the horizontal position

    // Make the "Yes" button bigger each time "No" is hovered
    noClickCount++;  // Increase the click count

    // Scale the "Yes" button larger each time "No" is hovered
    yesBtn.style.transform = `scale(${1 + noClickCount * 0.1})`; // Increase the scale factor with each hover
});

