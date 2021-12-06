import products from "../../data/products.json";

console.log(products);

export default {
  name: "home",
  components: {},
  props: [],
  data: () => ({
    products: products,
    flex: 4,
  }),

  computed: {},
  mounted() {},
  methods: {},
};
