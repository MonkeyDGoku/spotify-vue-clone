<template>
  <div class="app-main flex-grow h-screen overflow-y-scroll scrollbar-hide">
    <header class="absolute top-5 right-8">
      <div
        class="flex items-center bg-black space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2 text-white"
      >
        <img class="rounded-full w-10 h-10" :src="userImage" alt="" />
        <h2>{{ userName }}</h2>
        <ChevronDownIcon class="h-5 w-5" />
      </div>
    </header>
    <section
      class="flex items-end space-x-7 bg-gradient-to-b to-black h-80 text-white padding-8"
      :class="
        playlistBody.primary_color ? playlistBody.primary_color : randGradient
      "
    >
      <img
        class="playlist-cover h-44 w-44 shadow-2xl ml-10 rounded-md"
        :src="
          playlistBody.images.length > 0
            ? playlistBody.images[0].url
            : defaultImage
        "
        alt=""
      />
      <div>
        <p>PLAYLIST</p>
        <h1 class="text-2xl md:text-3xl xl:text-5xl font-bold">
          {{ playlistBody.name }}
        </h1>
      </div>
    </section>

    <div>
      <songs :playlistId="playlistBody.id" />
    </div>
  </div>
</template>

<script>
import { ChevronDownIcon } from "@vue-hero-icons/outline";
import { shuffle } from "lodash";
import { mapGetters } from "vuex";
import Songs from "../../components/Songs.vue";
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
  name: "AppMain",
  data() {
    return {
      userName: "",
      userImage: "",
      randGradient: "from-indigo-500",
      playlistId: "",
      defaultImage:
        "https://mosaic.scdn.co/640/ab67616d0000b273238513a0da74c837b2eeb8d7ab67616d0000b273348468c203278d510f0cbc5aab67616d0000b2735fc89b2c017c7976a04203c4ab67616d0000b2738c2ba06f909fbbabb4c48dea",
    };
  },
  components: {
    ChevronDownIcon,
    Songs,
  },
  computed: {
    ...mapGetters({ playlistBody: "playlistDetail" }),
  },
  watch: {},
  created() {
    let spotify = this.$store.getters.spotify;

    spotify.getMe().then((user) => {
      this.userName = user?.body?.display_name;
      this.userImage = user?.body?.images[0].url;
    });
    this.randGradient = shuffle(color).pop();
  },
};
</script>

<style>
.app-main {
  color: white;
}
</style>
