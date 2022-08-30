import React from 'react'
import './../../css/HeroSection.css'

function HeroSection() {
    return (
        <>
        <section id="home" className="bg-cover hero-section">
        <video src="/videos/hero.mp4" autoPlay loop muted/>
            <div className="overlay">
            </div>
            <div className="container text-white">
                <div className="row">
                    <div className="col-12">
                        <h1 className="fw-bold">ADVENTURE AWAITS</h1>
                        <p>Plan your next adventure in the Philippines by getting to know the <br></br>
                        best foods, festivals and folklores in the country that you should add to your itinerary.</p>
                        <button className="btn-explore" type="button">Explore</button>
                    </div>
                </div>
            </div>
            
        </section>
        </>
    )
}

export default HeroSection;