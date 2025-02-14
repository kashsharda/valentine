// Get references to the buttons and the image
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const gif = document.getElementById("gif");

// Track how many times the "No" button is hovered
let noHoverCount = 0;

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

// Event listener for the "No" button hover
noBtn.addEventListener("mouseenter", () => {
    // Move the "No" button to a random position when hovered
    noBtn.style.position = "absolute";
    noBtn.style.top = Math.random() * 80 + "%";  // Randomize the vertical position
    noBtn.style.left = Math.random() * 80 + "%"; // Randomize the horizontal position

    // Increase the size of the "Yes" button each time "No" is hovered
    noHoverCount++;  // Increment the hover count

    // Scale the "Yes" button larger
    yesBtn.style.transform = `scale(${1 + noHoverCount * 0.1})`; // Increase the scale factor with each hover
});


