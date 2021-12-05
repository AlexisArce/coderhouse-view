<template>
  <v-app>
    <v-container>
      <v-main>
        <login />
      </v-main>
    </v-container>
  </v-app>
</template>

<script>
import Login from "./components/login/index.vue";

export default {
  name: "App",

  components: {
    Login,
  },

  data: () => ({
    //
  }),
};
</script>
