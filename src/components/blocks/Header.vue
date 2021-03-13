<template>
  <header class="card-header">
    <h1 class="card-header-title has-text-primary-dark">{{ msg }}</h1>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String,
  },
};
</script>
