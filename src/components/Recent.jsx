import React, { useState, useEffect } from "react";
import Songimg from "../assets/BACK OFF.jpg"
import Songimg2 from "../assets/slot.jpg"

const Recent = () => {
  // const [music, setMusic] = useState([]);
  // const [selectedVideo, setSelectedVideo] = useState(null);
  const [showAll,setshowAll] = useState(false)
  // const displayedSongs = showAll ? music : music.slice(0, 2);

  // useEffect(() => {
  //   const fetchMusic = async () => {
  //     try {
  //       const res = await fetch("https://music-portfolio-ujbu.onrender.com/music");
  //       const data = await res.json();

  //       setMusic(data.items);

  //       if (data.items.length > 0) {
  //         setSelectedVideo(data.items[0]);
  //       }
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };

  //   fetchMusic();
  // }, []);

  return (
    <div className="recent">
      <div className="heading">
        <h1>Recent Music</h1>
        <span  onClick={() => setshowAll(!showAll)}>{showAll ?"Show Less":"View All"}</span>
      </div>

      

      <div className="music-container">
        <a href="https://open.spotify.com/track/265g7JoiMueXUS9uVVx5fG?si=97caf29fe7844fff" className="music-cards" target="_blank">
            <img src={Songimg} alt="cover" />
          <div>
            <h3>BACK OFF</h3>
            <p>ONECHITRA</p>
          </div>
          
<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z"/></svg>
        </a>
        <a href="" className="music-cards" target="_blank">
            <img src={Songimg2} alt="cover" />
          <div>
            <h3>COMING SOON</h3>
            <p>ONECHITRA</p>
          </div>
          
<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z"/></svg>
        </a>
        <a href="" className="music-cards" target="_blank">
            <img src={Songimg2} alt="cover" />
          <div>
            <h3>COMING SOON</h3>
            <p>ONECHITRA</p>
          </div>
          
<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z"/></svg>
        </a>

      </div>
    </div>
  );
};

export default Recent;