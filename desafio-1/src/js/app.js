let app = new Vue({
  el: "#app",
  data: {
    result: 0,
  },
  methods: {
    add() {
      return this.result++;
    },
    subtract() {
      return this.result--;
    },
  },
  computed: {},
});
