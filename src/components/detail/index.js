function Music(props) {
  return (
    <div className="music">
      <div>{props.image}</div>
      <div>{props.title}</div>
      <div>{props.artist}</div>
      <div>{props.album}</div>
      <div>{props.select}</div>
    </div>
  );
}
export default Music;
