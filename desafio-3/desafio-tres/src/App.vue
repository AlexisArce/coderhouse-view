<template>
  <div id="app">
    <Table :items="products" :labels="labels"></Table>
  </div>
</template>

<script lang="js">
const data = [
  {
    title: "producto uno",
    price: 156,
    thumbnail: "",
    id: 1,
  },
  {
    title: "producto udos",
    price: 1200,
    thumbnail: "ddsd",
    id: 2,
  },
  {
    title: "pity",
    price: 123,
    thumbnail: "",
    id: 3,
  },
  {
    title: "martinez",
    price: 122018,
    thumbnail: "https://images.unsplash.com/photo-1605548230624-8d2d0419c517",
    id: 4,
  },
  {
    title: "Paty",
    price: 500,
    thumbnail:
      "https://walmartar.vteximg.com.br/arquivos/ids/818335-1000-1000/Hamburguesas-Clasicas-Paty-4-U-1-34919.jpg?v=636517269056100000",
    id: 5,
  },
];

const labels = ["# Id", "Name", "Price"];

import Table from "./components/Table.vue";

export default {
  name: "App",
  components: {
    Table,
  },
  data: () => { return {products: data, labels: labels };},
};
</script>

<style></style>
