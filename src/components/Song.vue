<template>
  <div
    class="grid grid-cols-2 text-gray-500 py-4 px-5 hover:bg-gray-900 rounded-lg"
    @click="playSong"
  >
    <div class="flex items-center space-x-4">
      <p>{{ order + 1 }}</p>
      <img class="h-10 w-10" :src="track.album.images[0].url" alt="" />
      <div>
        <p class="w-36 lg:w-64 text-white truncate">
          {{
            track.name.length > 30
              ? track.name.substring(0, 30) + "..."
              : track.name
          }}
        </p>
        <p class="w-40">{{ track.artists[0].name }}</p>
      </div>
    </div>
    <div class="flex items-center justify-between ml-auto md:ml-0">
      <p class="w-40 hidden md:inline">{{ track.album.name }}</p>
      <p>{{ millicheck(track.duration_ms) }}</p>
    </div>
  </div>
</template>

<script>
import { Time } from "../mixins";
import { mapGetters } from "vuex";
export default {
  name: "Song",
  data() {
    return {};
  },
  props: {
    track: {
      type: Object,
    },
    order: {
      type: Number,
    },
  },
  computed: {
    ...mapGetters(["getSongId", "getSongIsPlaying"]),
  },
  methods: {
    millicheck(duration) {
      return Time.millisToMinAndSecs(duration);
    },
    playSong() {
      this.$store.dispatch("song/setSongId", { id: this.track.id });
      this.$store.dispatch("song/setIsPlaying", { isPlaying: true });
      const token = this.$store.getters.getAccessToken;
      this.$store.dispatch("song/fetchSongInfo", { access_token: token });
      const spotify = this.$store.getters.spotify;
      let x = this.track.uri;
      spotify.play({
        uris: [this.track.uri],
      });
    },
  },
};
</script>

<style></style>
