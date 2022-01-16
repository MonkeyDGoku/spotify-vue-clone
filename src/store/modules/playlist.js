const state = {
    key: "",
    id: "353ckR5WZreghPQx21lipk",
    collabrative: '',
    description: '',
    images: [],
    defaultImage: 'https://mosaic.scdn.co/640/ab67616d0000b273238513a0da74c837b2eeb8d7ab67616d0000b273348468c203278d510f0cbc5aab67616d0000b2735fc89b2c017c7976a04203c4ab67616d0000b2738c2ba06f909fbbabb4c48dea',
    name: 'Favourites',
    owner: {
        display_name: ''
    },
    primary_color: null,
    tracks: {
        href: '',
        total: 0
    }



}

const mutations = {
    SET_PLAYLIST(state, payload) {
        state.id = payload.id;
        state.collabrative = payload.collabrative;
        state.description = payload.description;
        state.images = payload.images?.map(image => image);
        state.name = payload.name;
        state.owner.display_name = payload.owner?.display_name;
        state.primary_color = payload.primary_color;
        state.tracks.href = payload.tracks.href;
        state.tracks.total = payload.tracks.total;
    }

}

const actions = {
    setPlaylist({ commit }, payload) {
        commit("SET_PLAYLIST", payload);
    }

}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
