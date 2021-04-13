const doToken = (number, token, size) => {
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
      if (number == 0) {
        return 255
      }
      else {
        return number - 1
      }
  }
}