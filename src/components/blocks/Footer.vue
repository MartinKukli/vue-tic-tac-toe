<template>
  <footer class="card-footer buttons is-justify-content-space-evenly">
    <Button id="X" msg="X" :type="btnX" @click="controllerClick" />
    <Button id="O" msg="O" :type="btnO" @click="controllerClick" />
    <Button id="R" msg="Reset all" :type="btnR" @click="controllerClick" />
  </footer>
</template>

<script>
import Button from "../elements/Button";

export default {
  name: "Footer",
  components: {
    Button,
  },
  props: {
    btnX: String,
    btnO: String,
    btnR: String,
  },
  methods: {
    controllerClick(event) {
      const id = event.target.id;

      if (id === "R") {
        this.$emit("resetGame");
      } else {
        this.$emit("choosePlayer", id);
      }
    },
  },
};
</script>
