import "./App.css";
import data from "./data/data.js";

function App() {
  return (
    <div className="App-header">
      <div className="music">
        <ul>
          <li>
            <img className="music-img" src={data.album.images[0].url} alt="Album" />
          </li>
          <li className="detail">
            <h1 id="music">Artists : {data.artists[0].name}</h1>
            <h4 id="music">Title : {data.album.name}</h4>
            <h1 id="music">Album : {data.name}</h1>
            <button id="button">Select</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
