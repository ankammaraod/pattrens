const row = function (number) {
  return  "*".repeat(number);
}


const RightAngleTriangle = function (number) {
  const base = number;
  let triangle = "";
  for (let index = 1; index <= base; index++) {
    triangle = triangle + row(index) + "\n";
  }
  return triangle;
}

console.log(RightAngleTriangle(5));