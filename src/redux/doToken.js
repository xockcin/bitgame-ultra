export const doToken = (state = {number: 0, steps: []}, action) => {
  switch (action.payload) {
    case "+":
      return (state + 1) % 256;
    case "<":
      return (state * 2) % 256;
    case "~":
      return 255 - state;
    case ">":
      return Math.floor(state / 2);
    case "-":
      if (state === 0) {
        return 255
      }
      else {
        return state - 1
      }
    default:
      return state
  }
}