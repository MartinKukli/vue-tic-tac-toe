<template>
  <div class="notification is-success">
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: "Notification",
  props: {
    msg: String,
  },
};
</script>
