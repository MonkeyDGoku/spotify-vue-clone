const state = {
    currentTrackId: '',
    isPlaying: false,
    songInfo: {}
}
const mutations = {
    SET_SONG_ID(state, payload) {
        state.currentTrackId = payload.id
    },

    SET_IS_PLAYING(state, payload) {
        state.isPlaying = payload.isPlaying
    },
    SET_SONG_INFO(state, payload) {
        debugger;
        state.songInfo = payload
    }
}
const actions = {
    setSongId({ commit }, payload) {
        commit("SET_SONG_ID", payload)
    },
    setIsPlaying({ commit }, payload) {
        commit("SET_IS_PLAYING", payload)
    },
    async fetchSongInfo({ commit, state }, payload) {
        if (state.currentTrackId) {
            const trackInfo = await fetch(`https://api.spotify.com/v1/tracks/${state.currentTrackId}`, {
                headers: {
                    Authorization: `Bearer ${payload.access_token}`
                }
            }).then(res => res.json());

            commit("SET_SONG_INFO", trackInfo);

        }
    }

}




export default {
    namespaced: true,
    state,
    mutations,
    actions
}