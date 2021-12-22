import UsersForm from "../UsersForm/index.vue";

export default {
  name: "users-data-table",
  components: { UsersForm },
  props: [],
  data() {
    return {
      search: "",
      headers: getHeaders(),
      dialog: false,
      dialogDelete: false,
      editedIndex: -1,
      editedItem: defaultItem(),
      defaultItem: defaultItem(),
    };
  },

  created() {},
  mounted() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.$store.dispatch("fetchUsers");
    },

    editItem(item) {
      this.editedIndex = this.users.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.users.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.users.splice(this.editedIndex, 1);
      this.$swal(
        "Usuario eliminado",
        "El usuario fue eliminado correctamente",
        "success"
      );
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$refs.userForm.resetValidation();
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (!this.$refs.userForm.validate()) return;

      if (this.editedIndex > -1) {
        Object.assign(this.users[this.editedIndex], this.editedItem);
        this.$swal(
          "Usuario actualizado",
          "El usuario fue actualizado correctamente",
          "success"
        );
      } else {
        this.users.push(this.editedItem);
        this.$swal(
          "Usuario creado",
          "El usuario fue creado correctamente",
          "success"
        );
      }
      this.close();
    },

    chipColor(item) {
      return item.isAdmin ? "green" : "gray";
    },

    chipText(item) {
      return item.isAdmin ? "Sí" : "No";
    },
  },

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Nuevo usuario" : "Editar usuario";
    },
    isLoading() {
      return this.$store.state.loadingUsers;
    },
    users() {
      return this.$store.state.users;
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },
};

const getHeaders = () => {
  return [
    //{ text: 'Id', value: 'id' },
    {
      text: "Nombre",
      value: "name",
      width: 150,
      align: "start",
    },
    {
      text: "Apellido",
      value: "lastname",
      width: 140,
      align: "start",
    },
    {
      text: "Posición",
      value: "position",
      align: "start",
    },
    {
      text: "Área",
      value: "area",
      align: "start",
    },
    //{ text: 'Extensión', value: 'extension' },
    { text: "Email", value: "email" },
    {
      value: "isAdmin",
      text: "Administrador",
      width: 140,
      align: "center",
    },
    { text: "Acciones", value: "actions", sortable: false },
  ];
};

const defaultItem = () => {
  return {
    name: "",
    lastname: "",
    position: "",
    area: "",
    extension: 0,
    email: "",
    isAdmin: false,
  };
};
