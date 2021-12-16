<template lang="html">
  <v-toolbar color="indigo" dark>
    <v-toolbar-title>e-commerce</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon @click="viewCart">
      <v-icon>mdi-cart</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script lang="js">

  export default  {
    name: 'navbar',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {
      viewCart(){
        this.$router.push({ name: "Cart"});
      }
    },
    computed: {
    }
}
</script>

<style scoped lang="scss">
.navbar {
}
</style>
