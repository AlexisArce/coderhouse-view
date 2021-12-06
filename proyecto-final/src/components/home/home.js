import products from "../../data/products.json";

console.log(products);

export default {
  name: "home",
  components: {},
  props: [],
  data: () => ({
    cards: [
      {
        title: "Pre-fab homes",
        src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
        flex: 6,
      },
      {
        title: "Favorite road trips",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        flex: 6,
      },
      {
        title: "Best airlines",
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
        flex: 6,
      },
    ],
    products: products,
    flex: 6,
  }),

  computed: {},
  mounted() {},
  methods: {},
};
