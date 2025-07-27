const palindromes = function (str) {
	const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

	const cleanedString = str
		.toLowerCase()
		.split("")
		.filter((character) => alphanumerical.includes(character))
		.join("");

	const reversedStr = cleanedString.split("").reverse().join("");

	return cleanedString === reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
