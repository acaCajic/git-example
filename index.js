var numbers = [1, 2, 3, 4, 5, 6];
var array = [];
var secondArray = [1, 2, 3, 4, 5];

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
console.log("new version");
