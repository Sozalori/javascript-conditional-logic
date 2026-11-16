//Exercise 3
// Ternary Operator
let lightBulbStatus = "Off";

let message =
  lightBulbStatus === "Off"
    ? "Light bulb is Off."
    : lightBulbStatus === "On"
      ? "Light bulb is On."
      : "Please choose the correct input (On/Off)";

console.log(message);