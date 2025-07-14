const sumAll = function(num1, num2) {
    let total = 0;

    if (num1 < 0 || num2 < 0) return "ERROR";
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";
    if (Number.isNaN(num1) || Number.isNaN(num2)) return "ERROR";
    if (typeof num1 !== "number" || typeof num2 !== "number") return "ERROR";

    if (num1 > num2) {
        for (let j = num1; j >= num2; j--) {
            total += j;
        }
        return total;
    }

    for (let i = num1; i <= num2; i++) {
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
