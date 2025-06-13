import React from 'react'
import "./Hero.css"
import dark_arrow from "../../assets/dark-arrow.png"
const Hero = () => {
    return (
        <div className='hero container'>
            <div className="hero-text">
                <h1>We ensure better education for a better world</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium excepturi iste eum quis,
                    pariatur ea, consectetur laudantium cumque voluptatem id nesciunt earum architecto quae dolorum asperiores!
                     Adipisci excepturi possimus repudiandae!</p>
                     <button className='btn'>explore more <img src={dark_arrow} alt="" /></button>
            </div>




        </div>
    )
}

export default Hero