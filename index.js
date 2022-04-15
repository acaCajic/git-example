var numbers = [1, 2, 3, 4, 5, 6];
var array = [];

const button = document.getElementsByClassName(".btn");
const countParagraph = document.getElementsByClassName(".counter");

let counter = 0;

button.addEventListener("click", () => {
  console.log(counter++);
  counter++;
  countParagraph.innerHTML = counter;
});

numbers.forEach((number) => {
  if (number > 2) {
    console.log(number);
  }
});
