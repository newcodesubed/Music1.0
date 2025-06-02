import { useState } from "react";
import SongForm from "./SongForm.jsx";
import SongCard from "./SongCard.jsx";

function App() {
  const [songs, setSongs] = useState([]);

  const addSong = (song) => {
    setSongs([...songs, song]);
  };

  return (
    <div className="p-4">
      <SongForm onAddSong={addSong} />
      <div className="grid gap-4 mt-4">
        {songs.map((song, index) => (
          <SongCard
            key={index}
            title={song.title}
            poster={song.poster}
            description={song.description}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
