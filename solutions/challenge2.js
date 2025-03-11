function carSpeed() {
  let speed = prompt("What is your current speed?");

  speed = Number(speed);

  if (speed < 70) {
    return "Ok";
  }
  // calculate the speed if exceeds 70
  let points = Math.floor((speed - 70) / 5);
  if (points > 12) {
    return "license suspended";
  } else return `points: ${points}`;
}
