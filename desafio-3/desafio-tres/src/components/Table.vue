<template lang="html">
  <table class="table table-striped">
    <Thead :labels="labels"></Thead>
    <tbody>
      <Tr v-for="item in items" :key="item.id" :item="item"></Tr>
    </tbody>
  </table>
</template>

<script lang="js">
import Thead from "./Thead.vue";
import Tr from "./Tr.vue";

  export default  {
    name: 'Table',
    props: ["items", "labels"],
     components: {
      Thead, Tr
    },
}
</script>

<style scoped lang="scss"></style>
