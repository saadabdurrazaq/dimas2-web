import * as types from "./mutation-types";

const state = () => {
    return {
        darkMode: false,
        sideMenuCollapse: false,
        pageLoaded: false
    };
};

// getters
const getters = {
    darkMode: state => state.darkMode,
    sideMenuCollapse: state => state.sideMenuCollapse
};

// actions
const actions = {
    setDarkMode({ commit }, darkMode) {
        commit(types.SET_DARK_MODE, { darkMode });
    },
    toggleSidemenu({ commit }) {
        commit(types.TOGGLE_SIDE_MENU);
    },
    setPageLoadedValue({ commit }, boolValue) {
        commit('SET_PAGE_LOADED_VALUE', boolValue)
    }
};

// mutations
const mutations = {
    [types.SET_DARK_MODE](state, { darkMode }) {
        state.darkMode = darkMode;
    },
    [types.TOGGLE_SIDE_MENU](state) {
        state.sideMenuCollapse = !state.sideMenuCollapse;
    },
    SET_PAGE_LOADED_VALUE(state, boolValue) {
        state.pageLoaded = boolValue
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
