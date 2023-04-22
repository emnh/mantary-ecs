function main() {
  console.log('main');
  const board = [["", "", ""], ["", "", ""], ["", "", ""]];
  function render() {
    document.body.innerHTML = "";
    const table = document.createElement("table");
    table.style.borderCollapse = "collapse";
    for (let i = 0; i < board.length; i++) {
      const row = document.createElement("tr");
      for (let j = 0; j < board[i].length; j++) {
        const cell = document.createElement("td");
        cell.style.width = "50px";
        cell.style.height = "50px";
        cell.style.textAlign = "center";
        cell.style.verticalAlign = "middle";
        cell.style.border = "1px solid black";
        cell.style.cursor = "pointer";
        cell.style.fontSize = "36px";
        cell.style.fontWeight = "bold";
        cell.textContent = board[i][j];
        cell.addEventListener("click", () => {
          if (board[i][j] === "") {
            board[i][j] = "X";
            render();
            computerTurn();
          }
        });
        row.appendChild(cell);
      }
      table.appendChild(row);
    }
    document.body.appendChild(table);
  }
  function computerTurn() {
    let i, j;
    do {
      i = Math.floor(Math.random() * board.length);
      j = Math.floor(Math.random() * board[i].length);
    } while (board[i][j] !== "");
    board[i][j] = "O";
    render();
  }
  render();
}