function removeDuplicates(arr) {
  const result = [];

  arr.forEach((value) => {
    !result.includes(value) ? result.push(value) : null;
  });

  return result;
}

module.exports = removeDuplicates;
