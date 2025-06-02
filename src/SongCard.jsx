function SongCard({ title, poster, description }) {
  return (
    <div className="border p-2 rounded">
      <img src={poster} alt={title} className="w-full h-48 object-cover" />
      <h3 className="text-xl mt-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default SongCard;
