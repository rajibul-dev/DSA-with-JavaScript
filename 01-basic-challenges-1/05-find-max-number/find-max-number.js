function findMaxNumber(numbers) {
  return numbers.reduce((cur, acc) => (cur > acc ? cur : acc), numbers[0]);
}

module.exports = findMaxNumber;
