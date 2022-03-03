const rowWithSymbol = function (times) {
  return "*".repeat(times);
}

const filledRectange = function (rowCount, columnCount) {
  let rectangle = "";
 
  for (let index = 0; index < rowCount; index++) {
    rectangle = rectangle+rowWithSymbol(columnCount)+"\n"; 
  }
  return rectangle;
}

console.log(filledRectange(5,4));