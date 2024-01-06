function countOccurrences(string, char) {
  return string.split(char).length - 1;
}

module.exports = countOccurrences;
