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
// ini adalah component
// function Music(props) {
//   return (
//     <div className="music">
//       <div>{props.image}</div>
//       <div>{props.title}</div>
//       <div>{props.artist}</div>
//       <div>{props.album}</div>
//       <div>{props.select}</div>
//     </div>
//   );
// }
// export default Music;
