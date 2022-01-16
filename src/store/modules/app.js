const state = {
    spotify: {

    },
    access_token: ''
}

const mutations = {
    SET_SPOTIFY: (state, payload) => {
        state.spotify = payload;
    },
    SET_TOKEN: (state, token) => {
        state.access_token = token;
    }
}

const actions = {
    setSpotify({ commit }, payload) {
        commit('SET_SPOTIFY', payload)
    },
    setAccessToken({ commit }, token) {
        commit('SET_TOKEN', token)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}