import React from "react";
import "./App.css";
import Music from "./components/detail/index";
import data from "./components/data";

function App() {
  return (
    <div className="App-header">
      <div className="music">
        {data.map((datas) => (
          <div key={datas.id}>
            <Music image={datas.album.images[0].url} title={datas.album.name} artist={datas.artists[0].name} album={datas.name} />
            <button id="button">Select</button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default App;
