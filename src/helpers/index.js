export const gameStartingData = {
  hasWinner: false,
  isGameOver: false,
  currentPlayer: undefined,
  cells: [
    { player: "", style: "" },
    { player: "", style: "" },
    { player: "", style: "" },
    { player: "", style: "" },
    { player: "", style: "" },
    { player: "", style: "" },
    { player: "", style: "" },
    { player: "", style: "" },
    { player: "", style: "" },
  ],
  counter: {
    games: 0,
    X: 0,
    O: 0,
  },
};

export const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export function isCellEmpty(cells, cellId) {
  return cells[cellId].player === "";
}

export function winConditionMatchIndex(cells, player) {
  return winConditions
    .map((cond) =>
      cond.map((key) => cells[key]).every((value) => value.player === player)
    )
    .indexOf(true);
}

export function styleCells(cells, matchIndex) {
  winConditions[matchIndex].forEach((index) => {
    cells[index].style = "is-primary";
  });
}

export function activateAfter(callback, time) {
  setTimeout(callback, time);
}
