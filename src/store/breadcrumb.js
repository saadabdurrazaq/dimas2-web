const state = () => {
    return {
        breadcrumb: []
    };
};

const SET_BREADCRUMB = 'SET_BREADCRUMB';
const CLEAR_BREADCRUMB = 'CLEAR_BREADCRUMB';
const PUSH_BREADCRUMB_ITEM = 'PUSH_BREADCRUMB_ITEM';
const BREADCRUMB_MUTATIONS = [SET_BREADCRUMB, CLEAR_BREADCRUMB, PUSH_BREADCRUMB_ITEM]

// getters
const getters = {
    items: state => state.breadcrumb
};

// actions
const actions = {
    [SET_BREADCRUMB]({ commit }, items) {
        commit([SET_BREADCRUMB], items)
    },
    [PUSH_BREADCRUMB_ITEM]({ commit }, item) {
        commit([PUSH_BREADCRUMB_ITEM])
    },
    [CLEAR_BREADCRUMB]({ commit }, item) {
        commit([CLEAR_BREADCRUMB])
    }
};

// mutations
const mutations = {
    [SET_BREADCRUMB](state, items) {
        state.breadcrumb = items
    },
    [PUSH_BREADCRUMB_ITEM](state, item) {
        state.breadcrumb.push(item)
    },
    [CLEAR_BREADCRUMB](state) {
        state.breadcrumb = []
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
    BREADCRUMB_MUTATIONS,
    SET_BREADCRUMB,
    PUSH_BREADCRUMB_ITEM,
    CLEAR_BREADCRUMB
};