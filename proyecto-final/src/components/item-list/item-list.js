import axios from "axios";
import Navbar from "../navbar.vue";

export default {
  name: "item-list",
  components: { Navbar },
  props: [],
  data: () => ({
    products: [],
    flex: 3,
    loading: true,
  }),

  computed: {
    hasItems: () => {
      return this.products?.length > 0;
    },
  },
  mounted() {
    axios("https://fakestoreapi.com/products/category/electronics").then(
      (res) => {
        this.products = res.data;
        this.loading = false;
      }
    );
  },
  methods: {},
};
