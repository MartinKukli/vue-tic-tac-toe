<template>
  <div class="card-content">
    <div class="content">
      <Notification :msg="notificationMessage" v-show="showNotification" />
      <div class="columns is-gapless is-justify-content-center">
        <div class="threeColGrid">
          <Cell
            v-for="(value, index) in cells"
            :key="index"
            :id="index"
            :args="value"
            @click="cellClick"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Notification from "../elements/Notification";
import Cell from "../elements/Cell";

export default {
  name: "Board",
  components: {
    Notification,
    Cell,
  },
  props: {
    cells: Array,
    showNotification: Boolean,
    notificationMessage: String,
  },
  methods: {
    cellClick(event) {
      const id = event.target.id;

      this.$emit("cellClick", id);
    },
  },
};
</script>

<style scoped>
.threeColGrid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
}
</style>
