export function generateOrderCode() {
  function getRandomLetter() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return letters[Math.floor(Math.random() * letters.length)];
  }
  function getRandomDigit() {
    return Math.floor(Math.random() * 10);
  }

  const lettersPart1 = getRandomLetter() + getRandomLetter();
  const digitsPart1 = getRandomDigit() + "" + getRandomDigit();
  const digitsPart2 = getRandomDigit() + "" + getRandomDigit();
  const lettersPart2 = getRandomLetter() + getRandomLetter();

  return `${lettersPart1}${digitsPart1}-${digitsPart2}${lettersPart2}`;
}
