<template>
  <div class="hero-body is-justify-content-center">
    <div class="card p-3 minwidth">
      <Header msg="Tic Tac Toe" />
      <Board
        :cells="cells"
        :showNotification="displayNotification"
        :notificationMessage="notificationMessage"
        @cellClick="updateCell"
      />
      <Footer
        :btnX="isXClicked"
        :btnO="isOClicked"
        btnR="is-info"
        @choosePlayer="choosePlayer"
        @resetGame="resetGame"
      />
    </div>
  </div>
</template>

<script>
import Header from "./components/blocks/Header";
import Board from "./components/blocks/Board";
import Footer from "./components/blocks/Footer";

export default {
  name: "App",
  components: {
    Header,
    Board,
    Footer,
  },
  data() {
    return {
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
    };
  },
  computed: {
    isGameRunning() {
      return this.currentPlayer !== undefined && this.hasWinner === false;
    },
    isXClicked() {
      return this.currentPlayer === "X" ? "is-primary is-selected" : "";
    },
    isOClicked() {
      return this.currentPlayer === "O" ? "is-primary is-selected" : "";
    },
    displayNotification() {
      return this.isGameOver;
    },
    notificationMessage() {
      const hasWinner = `Game Over! Winner: ${this.currentPlayer}`;
      const noWinner = `Game Over! All cells are filled`;

      return this.hasWinner ? hasWinner : noWinner;
    },
    allCellsFilled() {
      return this.cells.every((cell) => cell.player !== "");
    },
  },
  methods: {
    choosePlayer(player) {
      this.currentPlayer = player;
    },
    updateCell(cell) {
      const isCellEmpty = this.cells[cell].player === "";

      if (this.isGameRunning === false || !isCellEmpty) {
        return;
      }

      this.cells[cell].player = this.currentPlayer;

      this.checkWinner();

      if (this.isGameRunning) {
        this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
      }
    },
    checkWinner() {
      const windConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];

      const checkWinConditions = (cond) =>
        cond
          .map((key) => this.cells[key])
          .every((value) => value.player === this.currentPlayer);

      const addStyle = (index) => (this.cells[index].style = "is-primary");

      const allCellsFilled = this.cells.every((cell) => cell.player !== "");

      const matchIndex = windConditions.map(checkWinConditions).indexOf(true);

      this.hasWinner = matchIndex !== -1;

      if (this.hasWinner) {
        windConditions[matchIndex].forEach(addStyle);

        this.isGameOver = true;
      } else {
        if (allCellsFilled()) {
          this.isGameOver = true;

          this.hasWinner = false;
        }
      }
    },
    resetGame() {
      this.currentPlayer = undefined;

      this.hasWinner = false;

      this.isGameOver = false;

      this.cells = [
        { player: "", style: "" },
        { player: "", style: "" },
        { player: "", style: "" },
        { player: "", style: "" },
        { player: "", style: "" },
        { player: "", style: "" },
        { player: "", style: "" },
        { player: "", style: "" },
        { player: "", style: "" },
      ];
    },
  },
};
</script>
