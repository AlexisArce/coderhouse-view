<template lang="html">
  <thead>
    <tr>
      <Th v-for="label in labels" :key="label" :label="label"></Th>
    </tr>
  </thead>
</template>

<script lang="js">
  import Th from "./Th.vue"

  export default  {
    name: 'app-thead',
    props: ["labels"],
    components: {
      Th,
    },
}
</script>

<style scoped lang="scss"></style>
