export default {
  name: "cart",
  components: {},
  props: [],
  data() {
    return {
      items: [
        {
          name: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
          quantity: 2,
          price: 109,
        },
        {
          name: "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
          quantity: 1,
          price: 114,
        },
        {
          name: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
          quantity: 2,
          price: 599,
        },
      ],
    };
  },
  computed: {
    total() {
      let total = 0;
      this.items.forEach(function (item) {
        total += item.quantity * item.price;
      });

      return total;
    },
  },
  mounted() {},
  methods: {},
};
