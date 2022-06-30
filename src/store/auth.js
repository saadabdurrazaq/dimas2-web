import { login, logout, getUser } from "../utils/api/auth.api";
import router from "../router";
import { ElNotification } from "element-plus"; 
import cash from "cash-dom";

const state = () => {
    return {
        authenticated: false,
        user: null
    };
};

// getters
const getters = {};

// actions 
const actions = {
    async login({ commit }, credential) {
        return await login(credential).then(async(response) => {
            
            await getUser().then(response => {
                commit("SET_USER", response.data);   
                if (response.data.role.name === 'vp_sales_region') {
                    localStorage.setItem('distributor-state', 'distributor-state');
                } else if (response.data.role.name === 'superadmin') {
                    //
                }
            });

            commit("SET_AUTHENTICATED", true);

            if (router.currentRoute.value.query.hasOwnProperty('redirect')) {
                router.push(router.currentRoute.value.query.redirect)
            } else {
                if (localStorage.getItem("distributor-state")) {
                    router.push({ name: 'dn-distributor.data-verification' }) 
                } else {
                    router.push({ name: 'option-app.option' }) 
                }
            }
        })
    },
    async logout({ commit }) {
        localStorage.removeItem('user-state');
        localStorage.removeItem('distributor-state');
        
        await logout();
        commit("SET_USER", null);
        commit("SET_AUTHENTICATED", false);

        cash('.dropdown-menu')
            .removeClass('show')

        router.push('/login')
    },
    async refreshUserProfile({ commit }) {
        return await getUser().then(response => {
            commit("SET_USER", response.data);
        });
    }
}; 

// mutations
const mutations = {
    SET_USER(state, data) {
        state.user = data;
    },
    SET_AUTHENTICATED(state, status) {
        state.authenticated = status;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
