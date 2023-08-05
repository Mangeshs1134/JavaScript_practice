// if else practice

let amit = 10;
let raj = 20;
let arpita = 30;

if (amit > raj || arpita % amit == 0) {
  console.log("Arpita loves Amit");
} else if (raj > amit && arpita % raj == 0) {
  console.log("Arpita loves Raj");
} else {
  console.log("Raj aur Amit both are asshole.");
}

console.log(
  amit > raj || raj > amit  ? "Amit and Raj Both are Asshohle"   : "Mangesh is Asshole"
);
console.log(amit);