<template>
  <div class="card">
    <div class="card-content">
      <div class="threeColGrid">
        <button
          v-for="(value, index) in cells"
          :key="index"
          :id="index"
          class="button is-large"
          :class="value.style"
        >
          {{ value.player }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cell",
  props: {
    cells: Object,
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
