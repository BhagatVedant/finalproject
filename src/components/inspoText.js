import React from "react";
import './styles/inspoText.css';

function InspoText({ text }) {
    return (
        <section id="inspiration">
            <div className='container'>
                <div className='quote'>
                    {text}
                </div>
            </div>
        </section>
    );
}

export default InspoText;