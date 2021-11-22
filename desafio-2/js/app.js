const data = [
  {
    title: "producto uno",
    price: 156,
    thumbnail: "",
    id: 1,
  },
  {
    title: "producto udos",
    price: 1200,
    thumbnail: "ddsd",
    id: 2,
  },
  {
    title: "pity",
    price: 123,
    thumbnail: "",
    id: 3,
  },
  {
    title: "martinez",
    price: 122018,
    thumbnail: "https://images.unsplash.com/photo-1605548230624-8d2d0419c517",
    id: 4,
  },
  {
    title: "Paty",
    price: 500,
    thumbnail:
      "https://walmartar.vteximg.com.br/arquivos/ids/818335-1000-1000/Hamburguesas-Clasicas-Paty-4-U-1-34919.jpg?v=636517269056100000",
    id: 5,
  },
];

const labels = ["# Id", "Name", "Price"];

Vue.component("app-th", {
  props: ["label"],
  template: `<th scope="col">{{label}}</th>`,
});

Vue.component("app-thead", {
  props: ["labels"],
  template: `<thead>
          <tr>
            <app-th v-for="(label, index) in labels"
                    :key="label"
                    :label="label"></app-th>           
          </tr>
        </thead>`,
});

Vue.component("app-tr", {
  props: ["item"],
  template: `<tr>
                <td>{{item.id}}</td><td>{{item.title}}</td><td>{{item.price}}</td>
            </tr>`,
});

Vue.component("app-table", {
  props: ["items", "labels"],
  template: `<table class="table table-striped">
                <app-thead :labels="labels"></app-thead>
                <tbody>
                    <app-tr v-for="(item, index) in items"
                        :key="item.id"
                        :item="item"
                    ></app-tr>
                </tbody>                
            </table>`,
});

let app = new Vue({
  el: "#app",
  data: { products: data, labels: labels },
});
