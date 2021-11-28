<template>
  <div>
    <span>{{ this.message }}</span>
  </div>
</template>

<script>
export default {
  name: "Banner",
  props: {
    message: String,
  },
};
</script>

<style scoped></style>
