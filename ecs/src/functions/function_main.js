function main() {
  console.log('main');
  const rows = 5;
  const cols = 5;
  const table = document.createElement("table");
  for (let i = 0; i < rows; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < cols; j++) {
      const cell = document.createElement("td");
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
  document.body.appendChild(table);
}