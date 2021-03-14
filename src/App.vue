<template>
  <div class="hero-body is-justify-content-center">
    <div class="card p-3">
      <Header msg="Tic Tac Toe" />
      <Board
        :cells="cells"
        :counter="counter"
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
import * as helpers from "./helpers/index";

export default {
  name: "App",
  components: {
    Header,
    Board,
    Footer,
  },
  data() {
    return helpers.gameStartingData;
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
    updateCell(cellId) {
      if (this.isGameRunning || helpers.isCellEmpty(this.cells, cellId)) {
        this.cells[cellId].player = this.currentPlayer;

        this.checkWinner();

        if (this.isGameRunning) {
          this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
        } else {
          this.counter.games += 1;
          this.counter[this.currentPlayer] += 1;

          helpers.activateAfter(() => {
            this.resetGame();
          }, 1700);
        }
      }
    },
    checkWinner() {
      const winConditionMatchIndex = helpers.winConditionMatchIndex(
        this.cells,
        this.currentPlayer
      );

      this.hasWinner = winConditionMatchIndex !== -1;

      if (this.hasWinner) {
        helpers.styleCells(this.cells, winConditionMatchIndex);

        this.isGameOver = this.hasWinner;
      } else {
        this.isGameOver = this.allCellsFilled;
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

      this.counter = {
        games: 0,
        X: 0,
        O: 0,
      };
    },
  },
};
</script>
