<template>
  <div
    class="text-white h-24 bg-gradient-to-b from-black to-gray-900 grid grid-cols-3 text-xs md:text-base px-2 md:px-8"
  >
    <div class="flex items-center space-x-4">
      <img class="h-10 w-10" :src="getSongInfo.album.images[0].url" alt="" />
      <div>
        <h3>{{ getSongInfo.name }}</h3>
        <p>{{ getSongInfo.artists[0].name }}</p>
      </div>
    </div>
    <!-- center -->
    <div class="flex items-center justify-evenly">
      <SwitchHorizontalIcon class="button" />
      <RewindIcon class="button" />
      <PauseIcon
        v-if="getSongIsPlaying"
        class="button w-10 h-10"
        @click="handlePlayPause"
      />
      <PlayIcon
        v-if="!getSongIsPlaying"
        class="button w-10 h-10"
        @click="handlePlayPause"
      />
      <FastForwardIcon class="button" />
      <ReplyIcon class="button" />
    </div>
    <!-- Right -->
    <div class="flex items-center space-x-3 md:space-x-4 justify-end pr-5">
      <VolumeDownIcon
        class="button"
        @click="() => volume > 0 && setVolume(volume - 10)"
      />
      <input
        class="w-14 md:w-28"
        type="range"
        :value="volume"
        :min="0"
        :max="100"
        @change="(e) => setVolume(Number(e.target.value))"
      />
      <VolumeUpIcon
        class="button"
        @click="() => volume < 100 && setVolume(volume + 10)"
      />
    </div>
  </div>
</template>

<script>
import {
  HeartIcon,
  VolumeUpIcon as VolumeDownIcon,
} from "@vue-hero-icons/outline";
import {
  FastForwardIcon,
  PauseIcon,
  PlayIcon,
  ReplyIcon,
  VolumeUpIcon,
  SwitchHorizontalIcon,
  RewindIcon,
} from "@vue-hero-icons/solid";
import { mapGetters } from "vuex";
import time from "../../../mixins/time";
import _lodash from "lodash";

export default {
  name: "Player",
  data() {
    return {
      songInfo: {
        album: {
          images: [
            {
              url: "",
            },
          ],
        },
      },
      volume: 50,
      debounce: null,
    };
  },
  components: {
    SwitchHorizontalIcon,
    RewindIcon,
    PauseIcon,
    PlayIcon,
    FastForwardIcon,
    ReplyIcon,
    VolumeUpIcon,
    VolumeDownIcon,
  },
  computed: {
    ...mapGetters(["getSongInfo", "spotify", "getSongId", "getSongIsPlaying"]),
  },
  watch: {
    getSongInfo: function (to, from) {
      debugger;
      if (this.spotify.getAccessToken() && !this.getSongId) {
        this.fetchCurrentSong();
        this.volume = 50;
      }
    },
  },
  methods: {
    fetchCurrentSong() {
      if (!this.getSongInfo) {
        this.spotify.getMyCurrentPlayingTrack().then((data) => {
          console.log("now playing", data.body.item);
          this.$store.dispatch("song/setSongId", { id: data.body.item.id });

          this.spotify.getMyCurrentPlaybackState().then((data) => {
            this.$store.dispatch("song/setIsPlaying", {
              isPlaying: data.body.is_playing,
            });
          });
        });
      }
    },
    handlePlayPause() {
      this.spotify.getMyCurrentPlaybackState().then((data) => {
        if (data.body.is_playing) {
          this.spotify.pause();
          this.$store.dispatch("song/setIsPlaying", { isPlaying: false });
        } else {
          this.spotify.play();
          this.$store.dispatch("song/setIsPlaying", { isPlaying: true });
        }
      });
    },
    setVolume(volume) {
      this.volume = volume;
      this.debounceVolume();
      //this.debouncedAdjustVolume();
    },

    debounceVolume() {
      clearTimeout(this.debounce);
      this.debounce = setTimeout(() => {
        this.spotify.setVolume(this.volume);
        console.log("volume after debounce", this.volume);
      }, 500);
    },
  },
};
</script>

<style></style>
