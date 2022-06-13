import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

// modules
import main from "./main";
import sideMenu from "./side-menu";
import simpleMenu from "./simple-menu";
import topMenu from "./top-menu";
import breadcrumb from "./breadcrumb";
import auth from "./auth";
import errorBag from "./errorBag";
import evaluationAspectAvailability from "./evaluationAspectAvailability";


const store = createStore({
    modules: {
        main,
        sideMenu,
        simpleMenu,
        topMenu,
        breadcrumb,
        auth,
        errorBag,
        evaluationAspectAvailability
    },
    plugins: [createPersistedState({
        paths: ['auth', 'errorBag.errors']
    })],
});

export function useStore() {
    return store;
}

export default store;
