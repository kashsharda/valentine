// Get references to the buttons and image
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const gif = document.getElementById("gif");

// Add event listener for "Yes" button
yesBtn.addEventListener("click", () => {
    // Replace with your own image file (e.g., 'my-cute-image.jpg')
    gif.src = "cute.jpg";  // Update to the image you uploaded
    gif.style.display = "block";    // Display the image
});

// Add event listener for "No" button (makes "Yes" button grow bigger with each click)
noBtn.addEventListener("click", () => {
    // Randomly move the "No" button and enlarge the "Yes" button
    noBtn.style.position = "absolute";
    noBtn.style.top = Math.random() * 400 + "px";
    noBtn.style.left = Math.random() * 600 + "px";
    yesBtn.style.fontSize = parseInt(window.getComputedStyle(yesBtn).fontSize) + 2 + "px";
});
