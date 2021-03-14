<template>
  <div class="card">
    <div class="card-content">
      <p>Games played: {{ counter.games }}</p>
      <p>Player X: {{ counter.X }}</p>
      <p>PLayer O: {{ counter.O }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Counter",
  props: {
    counter: Object,
  },
};
</script>
