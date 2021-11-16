let app = new Vue({
  el: "#app",
  data: {
    result: 0,
    clicksCounter: 0,
  },
  methods: {
    add() {
      this.clicksCounter++;
      return this.result++;
    },
    subtract() {
      this.clicksCounter++;
      return this.result--;
    },
  },
  computed: {
    clicks() {
      return this.clicksCounter;
    },
    squared() {
      return this.clicksCounter * this.clicksCounter;
    },
  },
});
