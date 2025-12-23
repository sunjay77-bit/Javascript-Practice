const product = {
    title: "Ball pen",
    rating: 4,
    offer: 5,
    rice: 270,
     
};

console.log(product);


const btn = document.getElementById("prompt-btn");
const output = document.getElementById("output");
btn.addEventListener("click", () => {
  const userName = prompt("What is your name?", "Guest");
  output.textContent = "Hello, " + userName + "!";
});