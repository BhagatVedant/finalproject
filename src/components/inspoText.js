import React from "react";
import './styles/inspoText.css';

function InspoText({ text }) {
    return (
        <section id="inspirationSection">
            <div id="inspiration">
                <div className='container'>
                    <div className='quote'>
                        {text}
                    </div>
                </div>
            </div>
            
            <div className="blackLine header"></div>
        </section>
    );
}

export default InspoText;