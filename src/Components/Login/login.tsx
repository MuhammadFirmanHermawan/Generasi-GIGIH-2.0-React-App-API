import React from "react";
import { Button } from "@chakra-ui/react";

const LoginButton = () => {
  let client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
  let scope = "playlist-modify-private";
  let redirect_uri = "https://generasi-gigih-2-0-react-1ei2ynftf-muhammadfirmanhermawan.vercel.app";

  let spotify_url = "https://accounts.spotify.com/authorize";
  spotify_url += "?response_type=token";
  spotify_url += "&client_id=" + encodeURIComponent(client_id);
  spotify_url += "&scope=" + encodeURIComponent(scope);
  spotify_url += "&redirect_uri=" + encodeURIComponent(redirect_uri);

  return (
    <div className="login">
      <Button colorScheme="green" color="white">
        <a href={spotify_url} className="button-login">
          LOG IN
        </a>
      </Button>
    </div>
  );
};

export default LoginButton;
