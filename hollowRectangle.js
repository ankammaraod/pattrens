const row = function (rowCount, columnsCount,index) {
  let rows = rowCount;
  let columns = columnsCount;
  if (index === 0 || index === rows - 1) {
    return "*".repeat(columns);
  } else {
    return "*".padEnd(columns-1)+"*"
  }
}

const hollowRectangle = function (rowCount, columnsCount) {
  let rectangle = "";
  for (let index = 0; index < rowCount; index++) {
    rectangle = rectangle + row(rowCount, columnsCount,index)+"\n";
  }
  return rectangle;
}
console.log(hollowRectangle(5,4));