import React from "react";
import './styles/banner.css';

function Banner({ text }) {
    return (
        <section id="bannerSection">
            <div id="banner">
                <div className='container'>
                    <div className='quote'>
                        {text}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;