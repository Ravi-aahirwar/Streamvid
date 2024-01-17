import React from 'react'
import "./Home.css"
// import video from '../../assests/default.mp4'
// import background from "../../assests/homepage-img.jpg"
import img from '../../assests/Media-player.png'
import { Link } from 'react-router-dom'
export default function Home() {
    return (
        <div className='landing-container'>
            <div className='hero_container'>
                <div className="hero_left">
                    <h3 className='hero__tagline'>
                        <span>Stream.</span> User-friendly.
                        <br />
                        <span>Generate.</span> Systemize.
                        <br />
                    </h3>
                    <p className='hero_para'>
                        Welcome to <span>Streamvid</span> - Your Ultimate Destination for Streaming Content |
                        Unlimited access. Ad-free streaming.
                    </p>
                    <Link className='btn link' to="/login">Explore Now</Link>
                </div>
                <div className='hero_right'>
                    <div className="img_div">
                    <img src={img} className='img-res' alt="background"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
