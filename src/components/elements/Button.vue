<template>
  <button class="button is-medium" type="button" :class="type">
    {{ msg }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    msg: String,
    type: String,
  },
};
</script>
