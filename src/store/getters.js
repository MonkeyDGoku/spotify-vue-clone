const getters = {
    spotify: state => state.app.spotify,
    getAccessToken: state => state.app.access_token,
    playlistDetail: state => state.playlist,
    getSongId: state => state.song.currentTrackId,
    getSongIsPlaying: state => state.song.isPlaying,
    getSongInfo: state => state.song.songInfo

}
export default getters
