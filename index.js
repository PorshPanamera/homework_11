let a = prompt("Пожалуйста введите 6 цифр через пробел:");
let num = a.split(" ");
let numbers = [];
if (num.length !== 6) {
  alert("Вы ввели неверное количество цифр");
} else {
  numbers = num.map(parseFloat);
  let b = numbers[0];
  let c = numbers[1];
  let x = numbers[2];
  let y = numbers[3];
  let q = numbers[4];
  let w = numbers[5];
  numbers.splice(2, 3);
  console.log(numbers);
}
