<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-container>
        <h1>Task IT</h1>
      </v-container>
    </v-app-bar>

    <div class="mt-12 pt-6">
      <v-container>
        <v-row>
          <v-col cols="12" lg="4" md="4">
            <v-card class="pa-4">
              <v-card-title>
                <h3>Agregar Tarea</h3>
              </v-card-title>
              <v-card-text>
                <v-text-field
                  v-model="inputTitulo"
                  label="Titulo de tarea"
                  outlined
                ></v-text-field>
                <v-text-field
                  v-model="inputDescripcion"
                  label="Descripcion"
                  outlined
                ></v-text-field>
                <v-btn @click="agregarTarea()" color="primary" block
                  >Agregar</v-btn
                >
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12" lg="8" md="8" v-if="cargando">
            <div>
              <v-progress-circular
                indeterminate
                color="primary"
              ></v-progress-circular>
            </div>
          </v-col>

          <v-col v-else cols="12" lg="8" md="8">
            <v-row>
              <v-col
                cols="12"
                md="6"
                lg="4"
                v-for="(tarea, i) in tareas"
                :key="i"
              >
                <v-card>
                  <v-card-title>
                    {{ tarea.titulo }}
                  </v-card-title>
                  <v-card-text>
                    {{ tarea.descripcion }}
                  </v-card-text>
                  <v-card-actions class="d-flex justify-end">
                    <v-btn icon @click="eliminarTarea(i)">
                      <v-icon color="error">mdi-delete</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <v-dialog v-model="dialog">
      <v-card>
        <v-card-title>Eliminado correctamente</v-card-title>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      inputTitulo: "",
      inputDescripcion: "",
      cargando: false,
      dialog: false,
      tareas: [
        {
          titulo: "Tarea 1",
          descripcion: "Esto es una tarea",
        },
      ],
    };
  },
  methods: {
    agregarTarea() {
      this.cargando = true;
      const nuevaTarea = {
        titulo: this.inputTitulo,
        descripcion: this.inputDescripcion,
      };
      this.tareas.push(nuevaTarea);
      setTimeout(() => {
        this.cargando = false;
      }, 0);
    },
    eliminarTarea(indice) {
      console.log(indice);
      this.tareas.splice(indice, 1);
      this.dialog = true;
    },
    fetchTareas() {},
  },
};
</script>

<style lang="scss" scoped></style>
