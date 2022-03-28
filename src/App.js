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
// ini adalah component
// function App() {
//   return (
//     <div className="App-header">
//       <div className="music">
//         <Music
//           image={<img className="music-img" src={data.album.images[0].url} />}
//           artist={<h1 id="music">{data.artists[0].name}</h1>}
//           title={<h1 id="music">{data.album.name}</h1>}
//           album={<h1 id="music">{data.name}</h1>}
//           select={
//             <button id="button" onClick={data.album.external_urls.spotify}>
//               Select
//             </button>
//           }
//         />
//       </div>
//     </div>
//   );
// }
// export default App;
