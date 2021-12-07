<template>
  <v-app>
    <v-main>
      <item-list />
    </v-main>
  </v-app>
</template>

<script>
import ItemList from "./components/item-list/index.vue";

export default {
  name: "App",

  components: {
    ItemList,
  },

  data: () => ({
    //
  }),
};
</script>
