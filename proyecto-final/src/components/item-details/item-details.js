import axios from "axios";

export default {
  name: "item-details",
  components: {},
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
