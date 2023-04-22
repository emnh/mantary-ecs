function main() {
  console.log('main');
  const rows = 5;
  const cols = 5;
  const table = document.createElement("table");
  for (let i = 0; i < rows; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < cols; j++) {
      const cell = document.createElement("td");
      cell.style.width = "50px";
      cell.style.height = "50px";
      cell.style.border = "1px solid black";
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
  document.body.appendChild(table);
}