import SpotifyWebApi from "spotify-web-api-node";

export const authEndpoint = "https://accounts.spotify.com/authorize";
const Client_Secret = "a4ebe9e2c82b482f807d35cf86098eb0";
const scopes = [
  "user-read-email",
  "playlist-read-private",
  "playlist-read-collaborative",
  "streaming",
  "user-read-private",
  "user-library-read",
  "user-top-read",
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-follow-read",

];
//const redirectUri = encodeURI("http://localhost:8080/");
//for production
const redirectUri = encodeURI("https://spotify-vue-clone-p8yc7fuxp-monkeydgoku.vercel.app/#/");
const clientId = "2b1cbad103484b7dacde3d5cd4b6b321";
const state = "some-state-of-my-choice";
const showDialog = true;
const responseType = "token";

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

export const getTokenFromUrl = () => {
  return window.location.hash.substring(2).split('&').reduce((initial, item) => {
    let parts = item.split('=');
    initial[parts[0]] = decodeURIComponent(parts[1]);
    return initial;
  }, {});
}
// Setting credentials can be done in the wrapper's constructor, or using the API object's setters.
const IntializeAuth = function () {
  debugger;

  var spotifyApi = new SpotifyWebApi({
    redirectUri: redirectUri,
    clientId: clientId,
  });

  // Create the authorization URL
  var authorizeURL = spotifyApi.createAuthorizeURL(scopes, state);

  // https://accounts.spotify.com:443/authorize?client_id=5fe01282e44241328a84e7c5cc169165&response_type=code&redirect_uri=https://example.com/callback&scope=user-read-private%20user-read-email&state=some-state-of-my-choice
  console.log(authorizeURL);
  const code = "AQAXVcOJ39RrwCaICJCu2DxoU9ZenHTVn_tVD99OzDia0JRiENbcNP2pVUyPfVJp84LcE2gRfL3eMvFIsKz4rUgO3d-31c7-t2rfwLIpki-dDAQVR6BYkaiyu2Y3CZ2VG8E14Xg5Lu4kwh_oS_ix9RbP25Oi1hHek7X7PhjkD_Qnj7kfPQfx5mus4dJBjt3Dec35D2aAuiyakKMwh20";


  var credentials = {
    clientid: clientId,
    clientSecret: Client_Secret,
    redirectUri: redirectUri

  }

  var spotifyApiAuth = new SpotifyWebApi(credentials);
  spotifyApiAuth.authorizationCodeGrant(code).then((response) => {
    debugger;
  });
};

const IntializeClienCred = function () {
  debugger;
  var spotifyApi = new SpotifyWebApi({
    clientId: clientId,
    clientSecret: Client_Secret,
  });

  spotifyApi.clientCredentialsGrant()

  spotifyApi.clientCredentialsGrant().then(
    function (data) {
      debugger;
      console.log("The access token expires in " + data.body["expires_in"]);
      console.log("The access token is " + data.body["access_token"]);

      // Save the access token so that it's used in future calls
      spotifyApi.setAccessToken(data.body["access_token"]);
    },
    function (err) {
      console.log("Something went wrong when retrieving an access token", err);
    }
  );
};

const IntializeImplicitGrant = function () {
  debugger;
  var spotifyApi = new SpotifyWebApi({
    redirectUri: redirectUri,
    clientId: clientId,
  });

  // Create the authorization URL
  var authorizeURL = spotifyApi.createAuthorizeURL(
    scopes,
    state,
    showDialog,
    responseType
  );

  // https://accounts.spotify.com/authorize?client_id=5fe01282e44241328a84e7c5cc169165&response_type=token&redirect_uri=https://example.com/callback&scope=user-read-private%20user-read-email&state=some-state-of-my-choice&show_dialog=true
  console.log(authorizeURL);

  const code =
    "AQB-N6v4Pu7QkQROsaTvQ96GqSlMPZxUSz99Jtvj6Td42uugR5lsto3J91RgxO4nLUcuRZcZSRAlVDPCF_mwpoXIJAoze7XFXarX62eodBtFevjiWQ8EeGVZamlKn1Xl5y1PzbkDKGtbs7OdOSKMP0loKM6nt-c1vxD3lhTzBEuuIqzNP---hVYHW4k56HLJAxoLuKWYlDUsLesRojjjBSNddm80";

  spotifyApi.setAccessToken(code);
};

export { IntializeAuth, IntializeClienCred, IntializeImplicitGrant };
