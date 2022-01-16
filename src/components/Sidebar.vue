<template>
  <div
    class="text-gray-500 p-5 text-sm lg:text-base border-gray-900 overflow-y-scroll scrollbar-hide h-screen sm:max-w-[12rem] lg:max-w-[15rem] pb-36"
  >
    <!-- hidden md:inline-flex to remove sidebar in small screen -->
    <div class="space-y-4">
      <button class="flex items-center space-x-2 hover:text-white">
        <HomeIcon class="h-5 w-5" />
        <p>Home</p>
      </button>
      <button class="flex items-center space-x-2 hover:text-white">
        <SearchIcon class="h-5 w-5" />
        <p>Search</p>
      </button>
      <button class="flex items-center space-x-2 hover:text-white">
        <LibraryIcon class="h-5 w-5" />
        <p>Library</p>
      </button>
      <hr class="border-t-[0.1px] border-gray-900" />
      <button class="flex items-center space-x-2 hover:text-white">
        <PlusCircleIcon class="h-5 w-5" />
        <p>Create Playlist</p>
      </button>
      <button class="flex items-center space-x-2 hover:text-white">
        <HeartIcon class="h-5 w-5 text-blue-500" />
        <p>Liked Songs</p>
      </button>
      <button class="flex items-center space-x-2 hover:text-white">
        <RssIcon class="h-5 w-5 text-green-500" />
        <p>Your episodes</p>
      </button>
      <hr class="border-t-[0.1px] border-gray-900" />
      <p
        class="cursor-pointer hover:text-white"
        v-for="list in spotifyPlaylists"
        :key="list.name"
        @click="setPlaylistId(list)"
      >
        {{ list.name }}
      </p>
    </div>
  </div>
</template>

<script>
import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusCircleIcon,
} from "@vue-hero-icons/outline";
import { HeartIcon, RssIcon } from "@vue-hero-icons/solid";

import { shuffle } from "lodash";

const color = [
  "from-indigo-500",
  "from-blue-500",
  "from-green-500",
  "from-red-500",
  "from-yellow-500",
  "from-pink-500",
  "from-purple-500",
];
export default {
  name: "SideBar",
  data() {
    return {
      userName: "",
      spotifyPlaylists: [],
    };
  },
  props: {},
  components: {
    HomeIcon,
    SearchIcon,
    LibraryIcon,
    PlusCircleIcon,
    HeartIcon,
    RssIcon,
  },
  created() {
    const spotify = this.$store.getters.spotify;
    spotify.getUserPlaylists().then((playlists) => {
      this.spotifyPlaylists = playlists?.body.items?.map((playlist) => {
        return playlist;
      });
    });
  },
  methods: {
    setPlaylistId(playlist) {
      const primary_color = shuffle(color).pop();
      playlist.primary_color = primary_color;

      this.$store.dispatch("playlist/setPlaylist", playlist);
    },
  },
};
</script>

<style></style>
