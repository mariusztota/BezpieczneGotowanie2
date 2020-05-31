import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import VueFirestore from "vue-firestore";
import { firebase } from "@firebase/app";

Vue.config.productionTip = false;

Vue.use(VueFirestore);

let app;
firebase.auth().onAuthStateChanged( () => {
  if(!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
})
