<template>
  <div class="app-wrapper bg-black h-screen overflow-hidden">
    <div class="login" v-if="token == null">
      <img :src="loginImgSrc" alt="" />

      <a :href="loginUrl">Login with spotify</a>
    </div>
    <main v-if="token != null" class="flex">
      <side-bar />

      <app-main />
    </main>
    <div class="sticky bottom-0">
      <Player />
    </div>
  </div>
</template>

<script>
import { AppMain, SideBar } from "./components";
import {
  IntializeAuth,
  getTokenFromUrl,
  IntializeClienCred,
  IntializeImplicitGrant,
  loginUrl,
} from "../api/auth";
import Player from "./components/Player";

import SpotifyWebApi from "spotify-web-api-node";
const spotify = new SpotifyWebApi();

const imgSrc =
  "https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg";
export default {
  name: "Layout",
  data() {
    return {
      loginImgSrc: imgSrc,
      token: null,
      //token:
      //"BQCeLIswJoKhbcirk_cZYbUqTRgDhZQ6W7ffDer5BeojdgctfVsYake8xbBL6MQpyR9L07HJXrtz0PU5HxiP20dj0dLg2DoM82V33EAIrcxAX_XblClzMpedqVrmgS8YPqULsAxBFD6vkyT1b1H28ad2f9xnjwlVDu5S1HvTWfem65KTHXeP-uh0zDOSFiogENZLhn40fCSCWkfUWELhJr3UsowxlBAbe2pCKFDRhfWg7rsPFLDqDlE_5ao",
      loginUrl,
      spotifyApp: null,
      userName: "",
    };
  },
  components: {
    AppMain,
    SideBar,
    Player,
  },
  created() {
    if (this.token == null) {
      const hash = getTokenFromUrl();
      const access_token = Object.keys(hash)[0];
      if (access_token == "access_token") {
        window.location.hash = "/";
        this.token = hash.access_token;
        console.log(this.token);
        spotify.setAccessToken(this.token);
        this.spotifyApp = spotify;
        debugger;
        this.$store.dispatch("app/setSpotify", spotify);
        this.$store.dispatch("app/setAccessToken", this.token);
      }
    } else {
      spotify.setAccessToken(this.token);
      this.spotifyApp = spotify;
      this.$store.dispatch("app/setSpotify", spotify);
    }
  },
};
</script>

<style>
.login {
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: black;
}

.login > img {
  width: 100%;
}

.login > a {
  padding: 20px;
  background-color: #1bd954;
  border-radius: 99px;
  font-weight: 800;
  color: white;
  text-decoration: none;
}
</style>
