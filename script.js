const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output-number");
const outputDiv = document.getElementById("output");

function converter(n) {
  const romanNumerals = [
  { symbol: 'M', value: 1000 },
  { symbol: 'CM', value: 900 },
  { symbol: 'D', value: 500 },
  { symbol: 'CD', value: 400 },
  { symbol: 'C', value: 100 },
  { symbol: 'XC', value: 90 },
  { symbol: 'L', value: 50 },
  { symbol: 'XL', value: 40 },
  { symbol: 'X', value: 10 },
  { symbol: 'IX', value: 9 },
  { symbol: 'V', value: 5 },
  { symbol: 'IV', value: 4 },
  { symbol: 'I', value: 1 }
];

  let result = "";

  for (let i = 0; i < romanNumerals.length; i++) {
    const { symbol, value } = romanNumerals[i];
    while (n >= value) {
      result += symbol;
      n -= value;
    }
  }
  return result;
}

convertBtn.addEventListener("click", () => {
  if (!numberInput.value) {
    output.innerText = "Please enter a valid number";
    outputDiv.style.display = "block";
  } else if (numberInput.value < 1) {
    output.innerText = "Please enter a number greater than or equal to 1";
    outputDiv.style.display = "block";
  } else if (numberInput.value > 3999) {
    output.innerText = "Please enter a number less than or equal to 3999";
    outputDiv.style.display = "block";
  } else {
    const inputValue = numberInput.value;
    output.innerText = converter(inputValue);
    outputDiv.style.display = "block";
  }
})