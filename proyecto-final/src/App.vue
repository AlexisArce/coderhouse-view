<template>
  <v-app>
    <v-main>
      <home />
    </v-main>
  </v-app>
</template>

<script>
import Home from "./components/home/index.vue";

export default {
  name: "App",

  components: {
    Home,
  },

  data: () => ({
    //
  }),
};
</script>
