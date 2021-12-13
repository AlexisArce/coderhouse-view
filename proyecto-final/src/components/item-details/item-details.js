import axios from "axios";
import Navbar from "../navbar.vue";

export default {
  name: "item-details",
  components: { Navbar },
  props: [],
  data() {
    return {
      product: null,
    };
  },
  computed: {},
  mounted() {
    axios("https://fakestoreapi.com/products/10").then((res) => {
      console.log(this.product);
      this.product = res.data;
      console.log(this.product);
    });
  },
  methods: {},
};
