// loop
// 3.1 print the numbers from 1 to 100, print which are divisible by 3 or 5 but not both.
for (let i = 1; i <= 100; i++) {
    if ((i % 3 === 0 || i % 5 === 0) && !(i % 3 === 0 && i % 5 === 0)) {
      console.log(i);
    }
  }
  

// 3.2 take any positive number then return sum of its digits. for example number 123 => output :6
function sumDigits(number) {
    let sum = 0;
    while (number > 0) {
      sum += number % 10;
      number = Math.floor(number / 10);
    }
    return sum;
  }
  

  console.log(sumDigits(123));
  