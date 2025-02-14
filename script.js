// Get references to the buttons
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const gif = document.getElementById("gif");
const gifWrapper = document.getElementById("gif-wrapper");

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

// Event listener for the "No" button (Make it move when hovered)
noBtn.addEventListener("mouseenter", () => {
    // Randomize the "No" button's position when hovered
    noBtn.style.position = "absolute";
    noBtn.style.top = Math.random() * 80 + "%";  // Randomize the vertical position
    noBtn.style.left = Math.random() * 80 + "%"; // Randomize the horizontal position
});

// Disable the "No" button from being clicked
noBtn.setAttribute("disabled", true);


