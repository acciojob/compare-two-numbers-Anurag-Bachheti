const num1 = prompt("Enter the first number:");
const num2 = prompt("Enter the second number:");

// Compare after converting to numbers
if (Number(num1) === Number(num2)) {
    alert(true);
} else {
    alert(false);
}