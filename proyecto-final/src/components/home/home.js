import products from "../../data/products.json";

console.log(products);

export default {
  name: "home",
  components: {},
  props: [],
  data: () => ({
    products: products,
    flex: 6,
  }),

  computed: {},
  mounted() {},
  methods: {},
};
