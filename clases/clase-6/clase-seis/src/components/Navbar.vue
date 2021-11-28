<template>
  <div>
    <span>{{ this.title }}</span>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    title: String,
  },
};
</script>

<style scoped></style>
