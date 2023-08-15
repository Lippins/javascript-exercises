const palindromes = function (text) {
  let initialText = text.toLowerCase().replaceAll(/[^a-z0-9]/g, "");
  let reversedText = initialText.split("").reverse().join("");
  return initialText === reversedText;
};

// Do not edit below this line
module.exports = palindromes;
