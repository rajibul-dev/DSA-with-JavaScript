function displayLikes(names) {
  const length = names.length;

  if (!length) return `no one likes this`;

  if (length === 1) {
    return `${names[0]} likes this`;
  } else if (length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else if (length > 3) {
    const [name1, name2, ...rest] = names;
    return `${name1}, ${name2} and ${rest.length} others like this`;
  }
}

module.exports = displayLikes;
