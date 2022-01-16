<template>
  <div class="px-8 flex flex-col space-y-1 pb-28 text-white mt-10">
    <!-- <p v-for="(song, index) in songsList" :key="index">
      {{ song.name }}
      <Song />
    </p> -->
    <Song
      v-for="(song, index) in songsList"
      :key="song.id"
      :track="song"
      :order="index"
    />
  </div>
</template>

<script>
import Song from "./Song.vue";
export default {
  name: "Songs",
  data() {
    return {
      songsList: [],
    };
  },
  components: {
    Song,
  },
  props: {
    playlistId: {
      type: String,
      default: "353ckR5WZreghPQx21lipk",
    },
  },
  computed: {},
  watch: {
    playlistId: function (to, from) {
      this.setPlaylist();
    },
  },
  created() {
    this.setPlaylist();
  },
  methods: {
    setPlaylist() {
      let spotify = this.$store.getters.spotify;

      spotify.getPlaylist(this.playlistId).then((data) => {
        console.log("playlist data", data);
        this.songsList = data.body.tracks?.items.map((item) => {
          return item.track;
        });
      });
    },
  },
};
</script>

<style></style>
