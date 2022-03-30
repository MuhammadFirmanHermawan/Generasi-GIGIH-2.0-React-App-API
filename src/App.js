import React, { useState, useEffect } from "react";
import "./App.css";

const axios = require("axios");

function App() {
  const [access_token, set_access_token] = useState(null);
  const [query, set_query] = useState("");
  const [tracks, set_tracks] = useState([]);

  const LoginButton = () => {
    let client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
    let scope = "playlist-modify-private";
    let redirect_uri = "http://localhost:3000";

    let spotify_url = "https://accounts.spotify.com/authorize";
    spotify_url += "?response_type=token";
    spotify_url += "&client_id=" + encodeURIComponent(client_id);
    spotify_url += "&scope=" + encodeURIComponent(scope);
    spotify_url += "&redirect_uri=" + encodeURIComponent(redirect_uri);

    return (
      <div className="login">
        <a href={spotify_url} className="button-login">
          LOG IN
        </a>
      </div>
    );
  };

  const Form = () => {
    return (
      <div className="w-full">
        <input
          onChange={(event) => {
            set_query(event.target.value);
          }}
          value={query}
          type="text"
          className="input"
          placeholder="Type anything..."
        ></input>
        <button
          onClick={() => {
            handleClick();
          }}
          className="button-search"
        >
          <i className="fa fa-search"></i>
        </button>
      </div>
    );
  };

  const Track = (props) => {
    return (
      <div className="spotify-card">
        <img src={props.image_url} title={props.album_name} alt="{props.album_name}" className="object-cover rounded h-40 w-full" />
        <p className="text-base mt-2 mb-1 font-bold text-gray-100">{props.track_title}</p>
        <div className="">
          <p className="text-sm text-gray-300">{props.artist_name}</p>
        </div>
        <button className="select">Select</button>
      </div>
    );
  };

  function handleClick() {
    try {
      let url = "https://api.spotify.com/v1/search?q=" + query + "&type=track,artist";
      axios
        .get(url, {
          headers: {
            Authorization: "Bearer " + access_token,
          },
        })
        .then((res) => {
          set_tracks(res.data.tracks.items);
        });
    } catch (err) {
      console.error(err);
    } finally {
      console.log(tracks);
    }
  }

  function getHashParams() {
    let hashParams = {};
    let e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while ((e = r.exec(q))) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }

  useEffect(() => {
    let params = getHashParams();
    let token = params.access_token;
    set_access_token(token);
  });

  return (
    <div className="bg-dark_main min-h-screen p-5">
      {!access_token && <LoginButton />}

      {access_token && <Form />}

      <div className="mt-5 flex flex-wrap">
        {tracks.map((item) => {
          return <Track key={item.album.id} image_url={item.album.images[0].url} track_title={item.name} artist_name={item.album.artists[0].name} album_name={item.album.name} />;
        })}
      </div>
    </div>
  );
}

export default App;
