function titleCase(string) {
  const lowercase = string.toLowerCase();
  return lowercase
    .split(" ")
    .map((word) => {
      const [firstLetter, ...rest] = word;
      return `${firstLetter.toUpperCase()}${rest.join("")}`;
    })
    .join(" ");
}

module.exports = titleCase;
