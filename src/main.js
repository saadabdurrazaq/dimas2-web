import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import globalComponents from "./global-components";
import utils from "./utils";
import "./assets/sass/element-ui-custom.scss"
import "./libs";

// Midone Theme
import "./assets/sass/app.scss";

import installElementPlus from './plugins/element'

import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";

const app = createApp(App)
    .use(store)
    .use(router)

globalComponents(app);
utils(app);
installElementPlus(app);

app.provide('$development', process.env.NODE_ENV === 'development');
app.provide('env', process.env);

app.provide('$messageBox', app.config.globalProperties.$messageBox)
app.provide('$prompt', app.config.globalProperties.$prompt)
app.provide('$alert', app.config.globalProperties.$alert)
app.provide('$confirm', app.config.globalProperties.$confirm)

app.mount("#app");