export default {
  name: "register",
  data() {
    const defaultForm = Object.freeze({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    });

    return {
      form: Object.assign({}, defaultForm),
      rules: {
        firstname: [
          (val) => (val || "").length > 0 || "Debe ingresar su nombre",
        ],
        lastname: [
          (val) => (val || "").length > 0 || "Debe ingresar su apellido",
        ],
        email: [
          (v) => !!v || "Debe ingresar un e-mail válido",
          (v) => /.+@.+\..+/.test(v) || "Debe ingresar un e-mail válido",
        ],
        password: [(v) => !!v || "Debe ingresar la contraseña"],
      },
      defaultForm,
    };
  },

  computed: {
    formIsValid() {
      return this.form.firstname && this.form.lastname;
    },
  },

  methods: {
    resetForm() {
      this.form = Object.assign({}, this.defaultForm);
      this.$refs.form.reset();
    },
    submit() {
      this.resetForm();
    },
  },
};
