import React from 'react'
import Composer from "../assets/composer.jpg"
import Writer from "../assets/writer.jpg"
import Producer from "../assets/producer.jpeg"

const About = () => {
  return (
    <div className='about'>
        <h1>About</h1>
    <div className="card-container">
           <div className="cards">
        <img src={Producer} alt="img" />
        <div className="about-info">
            <h2>Music Producer</h2>
            <p>Independent music producer creating immersive tracks that combine emotion, storytelling, and innovative sound design.</p>
        </div>
       </div>
    </div>
    <div className="card-container">
           <div className="cards">
        <img src={Writer} alt="img" />
        <div className="about-info">
            <h2>Music Writer</h2>
            <p>Turning sleepless nights and silent emotions into lyrics that echo through the darkness.</p>
        </div>
       </div>
    </div>
    <div className="card-container">
           <div className="cards">
        <img src={Composer} alt="img" />
        <div className="about-info">
            <h2>Music Composer</h2>
            <p>Crafting melodies and arrangements that bring stories, emotions, and visions to life through sound.</p>
        </div>
       </div>
    </div>
    </div>
  )
}

export default About
