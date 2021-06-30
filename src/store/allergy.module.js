import { allergyService } from '../services';

export default {
    namespaced: true,
    state: {
        allergies: {},
        errors: {}
    },
    getters: {
        getAllergies: state => state.allergies,
    },
    actions: {
        async getAllAllergies({commit}) {
            await allergyService.getAll()
                .then(
                    allergies => { commit('SET_ALLERGIES', allergies)},
                    error => commit('SET_ERRORS', error)
                );
        },
        async createAllergy({commit}, allery){
            await allergyService.create(allery).then(
                response => { commit('ADD_TO_STATE', response)},
                error => commit('SET_ERRORS', error)
            )
        },
        async deleteAllergy({commit}, id){
            await allergyService._delete(id).then(
                response => { commit('DELETE_ALLLERGIES', response)},
                error => commit('SET_ERRORS', error)
            )
        }
    },
    mutations: {
        SET_ALLERGIES(state, allergies) {
            state.allergies = allergies;
        },
        SET_ERRORS(state, errors){
            state.errors = errors;
        },
        ADD_TO_STATE(state, allergy){
            state.allergies.allergies.push(allergy);
        },
    }
}