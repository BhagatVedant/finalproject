import React from "react";
import './styles/banner.css';

function Banner({ imgURL, text }) {
    return (
        <section id="bannerSection">
            <div className="bannerLine" />

            <div id="banner" style={{
                backgroundImage: `url(${imgURL})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
                <div id="bannerText">
                    <h1>{text}</h1>
                </div>
            </div>

            <div className="bannerLine" />
        </section>
    );
}

export default Banner;