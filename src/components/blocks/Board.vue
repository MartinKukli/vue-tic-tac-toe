<template>
  <div class="card-content">
    <Notification :msg="notificationMessage" v-show="showNotification" />
    <Counter :counter="counter" />
    <Cells :cells="cells" @click="cellClick" />
  </div>
</template>

<script>
import Notification from "../elements/Notification";
import Cells from "../elements/Cells";
import Counter from "../elements/Counter";

export default {
  name: "Board",
  components: {
    Notification,
    Cells,
    Counter,
  },
  props: {
    cells: Array,
    counter: Object,
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
