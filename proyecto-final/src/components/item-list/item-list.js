import axios from "axios";
import Navbar from "../Navbar.vue";
import Spinner from "../Spinner.vue";

export default {
  name: "item-list",
  components: { Navbar, Spinner },
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
    axios("https://fakestoreapi.com/products").then((res) => {
      this.products = res.data;
      this.loading = false;
    });
  },
  methods: {},
};
