export default {
  name: "users-form",
  components: {},
  props: ["editedItem"],
  data() {
    return {
      rules: {
        required: (value) => !!value || "Campo requerido.",
        counter: (value) => value.length <= 50 || "Máximo 50 caracteres",
        email: (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "El e-mail ingresado no es válido.";
        },
        onlyLetters: (value) => {
          const pattern = /^[a-zA-Z\s]*$/;
          return pattern.test(value) || "El valor ingresado no es válido.";
        },
      },
      valid: true,
    };
  },
  computed: {},
  mounted() {},
  methods: {
    validate() {
      return this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
