<template>
  <div class="login">
    <img :src="loginImgSrc" alt="" />
    <a :href="loginUrl">Login with spotify</a>
  </div>
</template>

<script>
import {
  IntializeAuth,
  getTokenFromUrl,
  IntializeClienCred,
  IntializeImplicitGrant,
  loginUrl,
} from "../api/auth";
import SpotifyWebApi from "spotify-web-api-node";

const spotify = new SpotifyWebApi();
const imgSrc =
  "https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg";

export default {
  name: "Login",
  data() {
    return {
      loginImgSrc: imgSrc,
      loginUrl,
      route: window.location.hash,
    };
  },
  watch: {
    route: function (to, from) {
      debugger;
    },
  },
  created() {
    debugger;
    //const hash = getTokenFromUrl();
    // window.location.hash = "";
    // const _token = hash.access_token;

    // if (_token) {
    //   spotify.setAccessToken(_token);
    //   spotify.getMe().then((user) => {
    //     debugger;
    //   });
    // }
  },
  methods: {
    redirectAccessToken() {},
  },
  mounted() {
    debugger;
  },
  updated() {
    debugger;
  },
  destroyed() {
    debugger;
  },
};
</script>

<style scoped>
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
