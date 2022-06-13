const state = () => {
    return {
        menu: [{
            icon: "HomeIcon",
            pageName: "simple-menu-dashboard",
            title: "Dashboard",
            subMenu: [{
                    icon: "",
                    pageName: "simple-menu-dashboard-overview-1",
                    title: "Overview 1"
                },
                {
                    icon: "",
                    pageName: "simple-menu-dashboard-overview-2",
                    title: "Overview 2"
                }
            ]
        }, ]
    };
};

// getters
const getters = {
    menu: state => state.menu
};

// actions
const actions = {};

// mutations
const mutations = {};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};