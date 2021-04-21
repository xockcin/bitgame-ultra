export const doToken = (number, token, size) => {
  switch (token) {
    case "+":
      return (number + 1) % size;
    case "<":
      return (number * 2) % size;
    case "~":
      return size - 1 - number;
    case ">":
      return Math.floor(number / 2);
    case "-":
      if (number === 0) {
        return 255
      }
      else {
        return number - 1
      }
    default:
      console.log("Invalid Token")
  }
}

export const fromNumber = (number) => {
  const newByte = [];
  for (let i = 0; i < 8; i++) {
    newByte[i] = !!(number & (1 << i));
  }
  return newByte;
}