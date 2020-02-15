const state = {
    todoList: []
};


const getters = {
    getTogoList(state) {
        return state.todoList;
    }
};

const actions = {
 /*   async getLocale(context) {
        try {
            let {data} = await LocaleService.getLocalList();
            return context.commit('setLocale', data);
        } catch (error) {
            throw new Error(`LocaleService.getLocalList error: ${error}`);
        }
    },*/
};

const mutations = {
    /*setLocale(state, locale) {
        state.locale = locale;
    },*/
};

export default {
    state,
    actions,
    mutations,
    getters
};