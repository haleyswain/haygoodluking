import { createApp } from 'vue'
import App from './App.vue'
import VueGtag from "vue-gtag-next";

const app = createApp(App);
app.use(VueGtag, {
    property: {
      id: "296062679"
    }
  });

app.mount("#app");
