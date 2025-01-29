const btn = document.querySelector("#btn");
const num1 = document.querySelector("#n1");
const num2 = document.querySelector("#n2");
const ans = document.querySelector("#ans");

btn.addEventListener("click", function (e) {
  e.preventDefault(); // Prevent form submission

  let operator = document.getElementById("selectOp").value;
  let val1 = num1.value.trim();
  let val2 = num2.value.trim();

  if (val1 === "" || isNaN(val1)) {
    ans.innerHTML = "Please enter a valid value for number 1";
    num1.value = "";
    return;
  }

  if (val2 === "" || isNaN(val2)) {
    ans.innerHTML = "Please enter a valid value for number 2";
    num2.value = "";
    return;
  }

  let n1 = Number(val1);
  let n2 = Number(val2);
  let result;

  switch (operator) {
    case "plus":
      result = n1 + n2;
      break;
    case "min":
      result = n1 - n2;
      break;
    case "multi":
      result = n1 * n2;
      break;
    case "divi":
      if (n2 === 0) {
        ans.innerHTML = "Cannot divide by zero!";
        return;
      }
      result = n1 / n2;
      break;
    default:
      ans.innerHTML = "Invalid operation selected!";
      return;
  }

  ans.innerHTML = `The result is ${result}`;
});
