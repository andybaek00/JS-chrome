const images = ["0.jpeg", "IMG_2785.jpeg"];

const chosenImg = images[Math.floor(Math.random() * images.length)];

const img = document.createElement("img");
img.src = `img/${chosenImg}`;

document.body.appendChild(img);