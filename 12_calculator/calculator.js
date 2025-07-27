const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(nums) {
	return nums.reduce((total, num) => {
		return total + num;
	}, 0)
};

const multiply = function(nums) {
	return nums.reduce((sum, item) => {
		return sum * item;
	}, 1);
};

const power = function(num1, num2) {
	return Math.pow(num1, num2);
};

const factorial = function(num) {
	let sum = 1;
	for (let i = num; i > 1; i--) {
		sum *= i;
	}
	return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
