import React, { useState, useEffect } from "react";
import { Input, Button } from "@chakra-ui/react";
import "./style.css";

const axios = require("axios");

function Spotify() {
  const [access_token, setAccessToken] = useState(null);
  const [query, setQuery] = useState("");
  const [tracks, setTracks] = useState([]);
  const [selectedTrack, setSelectedTrack] = useState([]);
  const [selected, setSelected] = useState(false);

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
        <Button colorScheme="green" color="white">
          <a href={spotify_url} className="button-login">
            LOG IN
          </a>
        </Button>
      </div>
    );
  };

  const Form = () => {
    return (
      <div className="form-search">
        <Input
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          value={query}
          type="text"
          placeholder="Type anything..."
          width="30%"
          color="white"
        />
        <Button
          onClick={() => {
            handleClick();
          }}
          className="button-search"
          colorScheme="green"
          color="white"
        >
          <i className="fa fa-search"></i>
        </Button>
      </div>
    );
  };

  const handleSelect = () => {
    setSelected(!selected);
  };
  const Track = (props) => {
    return (
      <div className="spotify-card">
        <img src={props.image_url} title={props.album_name} alt="{props.album_name}" className="img-card" />
        <p className="title-card">{props.track_title}</p>
        <div>
          <p className="artist-title">{props.artist_name}</p>
        </div>
        <Button className={`select ${selected ? "btn-primary" : "btn-secondary"}`} onClick={handleSelect} colorScheme="green">
          {selected ? "Deselect" : "Selected"}
        </Button>
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
          setTracks(res.data.tracks.items);
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
    setAccessToken(token);

    if (!setSelectedTrack) {
      const selectedTrack = filterSelectedTrack();
      setTracks(selectedTrack);
    }
  }, [selectedTrack]);
  const filterSelectedTrack = () => {
    return Track.filter((tracks) => selectedTrack.includes(tracks.uri));
  };

  const toggleSelect = (tracks) => {
    const uri = tracks.uri;

    if (selectedTrack.includes(uri)) {
      setSelectedTrack(selectedTrack.filter((item) => item !== uri));
    } else {
      setSelectedTrack([...selectedTrack, uri]);
    }
  };

  return (
    <div className="login-halaman">
      {!access_token && <LoginButton />}

      {access_token && <Form />}

      <div className="dashboard">
        {tracks.map((item) => {
          return <Track key={item.album.id} image_url={item.album.images[0].url} track_title={item.name} artist_name={item.album.artists[0].name} album_name={item.album.name} toggleSelect={() => toggleSelect(tracks)} />;
        })}
      </div>
    </div>
  );
}

export default Spotify;
