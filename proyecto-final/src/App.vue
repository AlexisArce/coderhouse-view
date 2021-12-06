<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row>
          <v-col md="6" offset-md="3">
            <login />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
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
