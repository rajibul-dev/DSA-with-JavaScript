function isPalindrome(string) {
  const formattedString = string.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversedString = formattedString.split("").reverse().join("");
  return formattedString === reversedString;
}

module.exports = isPalindrome;
