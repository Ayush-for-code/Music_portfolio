import React, { useState, useEffect } from "react";

const Recent = () => {
  const [music, setMusic] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showAll,setshowAll] = useState(false)
  const displayedSongs = showAll ? music : music.slice(0, 2);

  useEffect(() => {
    const fetchMusic = async () => {
      try {
        const res = await fetch("http://localhost:3000/music");
        const data = await res.json();

        setMusic(data.items);

        if (data.items.length > 0) {
          setSelectedVideo(data.items[0]);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchMusic();
  }, []);

  return (
    <div className="recent">
      <div className="heading">
        <h1>Recent Music</h1>
        <span  onClick={() => setshowAll(!showAll)}>{showAll ?"Show Less":"View All"}</span>
      </div>

      {selectedVideo && (
       <div className="music-container">
         <iframe
          width="80%"
          height="400"
          src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}?autoplay=1`}
          title={selectedVideo.snippet.title}
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
       </div>
      )}

      <div className="music-container">
        {displayedSongs.map((song) => (
          <div
            key={song.id.videoId}
            className="music-cards"
            onClick={() => setSelectedVideo(song)}
          >
            <img
              src={song.snippet.thumbnails.medium.url}
              alt={song.snippet.title}
            />

            <div>
              <h3>{song.snippet.title}</h3>
              <p>{song.snippet.channelTitle}</p>
            </div>
            <div className="play" onClick={() => setSelectedVideo(song)}>
              {selectedVideo?.id.videoId === song.id.videoId
    ? "Playing"
    : "Play"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recent;