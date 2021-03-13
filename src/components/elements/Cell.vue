<template>
  <button class="button is-large" :class="args.style">
    {{ args.player }}
  </button>
</template>

<script>
export default {
  name: "Cell",
  props: {
    args: Object,
  },
};
</script>
