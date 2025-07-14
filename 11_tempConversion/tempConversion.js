const convertToCelsius = function(fahrenheit) {
  const celsius = (fahrenheit - 32) / (9 / 5);
  const rounded = Math.round(celsius * 10) / 10;
  return rounded;
};

const convertToFahrenheit = function(celsius) {
    const fahrenheit = (celsius * 9 / 5) + 32;
    const rounded = Math.round(fahrenheit * 10) / 10;
    return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
