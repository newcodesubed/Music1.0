import { useState } from "react";

function SongForm({ onAddSong }) {
  const [title, setTitle] = useState("");
  const [poster, setPoster] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddSong({ title, poster, description });
    setTitle("");
    setPoster("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input
        placeholder="Song name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        placeholder="Image URL"
        value={poster}
        onChange={(e) => setPoster(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Song</button>
    </form>
  );
}

export default SongForm;
