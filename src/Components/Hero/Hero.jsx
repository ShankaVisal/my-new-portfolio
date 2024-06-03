import React from 'react';
import "./Hero.css";

function Hero() {
  return (
    <section className='hero-container'>
        <div className='hero-content'>
            <p>
                Passionate Frontend Developer | Tranforming Ideas into Seamless nad 
                Visually Stunnting Web Solution
            </p>

            <div className="hero-img">
                <div>
                    <div className="tech-icon">
                        <img src="./assets/img01.jpeg" alt="img01" />
                    </div>
                    <img src="./assets/img01.jpeg" alt="img01" />
                </div>
            </div>

        </div>

    </section>
  )
}

export default Hero