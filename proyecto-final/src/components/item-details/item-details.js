import axios from "axios";
import Navbar from "../Navbar.vue";

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
    axios(`https://fakestoreapi.com/products/${this.$route.params.id}`).then(
      (res) => {
        this.product = res.data;
      }
    );
  },
  methods: {},
};
