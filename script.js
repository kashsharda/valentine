const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const gif = document.getElementById("gif");

let yesSize = 20;

yesBtn.addEventListener("click", () => {
    gif.src = "https://media.giphy.com/media/l0HlNQ03J5JxX6lva/giphy.gif"; // Cute GIF
    gif.style.display = "block";
});

noBtn.addEventListener("mouseover", () => {
    let x = Math.random() * window.innerWidth - 100;
    let y = Math.random() * window.innerHeight - 50;
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
    
    yesSize += 10;
    yesBtn.style.fontSize = `${yesSize}px`;
});
