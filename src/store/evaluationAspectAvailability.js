import EvaluationPeriodAPI from "@/utils/api/evaluation/evaluationPeriod.api";
import router from "../router";
import { ElNotification } from "element-plus";
import cash from "cash-dom";

const state = () => {
    return {
        settings: [],
    };
};

// getters
const getters = {
  isAvailableByQuartal: (state) => (aspectId, quartal) => {
    return state.settings.find((setting) => setting.id == aspectId && setting[`kuartal_${quartal}`])
  }
};
// actions
const actions = {
    async getSettings({ commit }) {
        return await EvaluationPeriodAPI.getAspectItemsAvailableForUser().then(async(response) => {
            commit("SET_STATE", response.data);
        })
    },
};

// mutations
const mutations = {
    SET_STATE(state, data) {
        state.settings = data;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
