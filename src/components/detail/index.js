import React from "react";

const Music = (props) => {
  const { image, title, artist, album } = props;
  return (
    <div>
      <img className="music-img" src={image} />
      <h2 id="music">{title}</h2>
      <h2 id="music">{artist}</h2>
      <h2 id="music">{album}</h2>
    </div>
  );
};

export default Music;
