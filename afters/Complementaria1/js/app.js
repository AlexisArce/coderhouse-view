var app = new Vue({
    el: "#app",
    data: {
        titulo: "App de Tareas",
        tareas: [
            {
                titulo: "Pasear a Spock",
                descripcion: "Ir al parque"
            },
            {
                titulo: "Regar plantas",
                descripcion: "Revisar las macetas pequeñas"
            }
        ],
        inputTitulo: "",
        inputDescripcion: "",
        alerta: false,
        textoAlerta: ""
    },
    methods: {
        agregarTarea(){
            const newTarea = {
               titulo: this.inputTitulo,
               descripcion: this.inputDescripcion
            }
            this.tareas.push(newTarea)
            this.mostrarAlerta("Tarea agregada con exito")
            this.inputTitulo = "";
            this.inputDescripcion = "";
            this.$refs.titulo.focus()
        },
        eliminarTarea(indice){
            this.tareas.splice(indice, 1)
            this.mostrarAlerta("Tarea eliminada con exito")
        },
        mostrarAlerta(texto){
            this.textoAlerta = texto
            this.alerta = true
            setTimeout(() => {
                this.alerta = false
            }, 3000)
        }
    },
    computed: {
        cantidadTareas(){
            return this.tareas.length
        }
    },

    // ESTO NO VA TODAVIA
    watch: {
        tareas(){
            localStorage.setItem("tareas", JSON.stringify(this.tareas))
        }
    },

    mounted(){
        const itemsEnLocalStorage = localStorage.getItem("tareas")
        if(itemsEnLocalStorage){
            this.tareas = JSON.parse(itemsEnLocalStorage)
        }
    }
})