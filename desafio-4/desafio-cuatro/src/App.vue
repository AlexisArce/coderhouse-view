<template>
  <v-app>
    <v-app-bar app color="primary" dark>Desafío 4</v-app-bar>
    <v-main>
      <v-container>
        <users-data-table />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import UsersDataTable from "./components/UsersDataTable/index.vue";
//import UsersForm from "./components/UsersForm/index.vue";

export default {
  name: "App",

  components: { UsersDataTable },

  data: () => ({
    //
  }),
};
</script>
