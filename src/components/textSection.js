import React, { useState, useEffect } from 'react';
import './styles/textSection.css';

function TextSection({ sectionId }) {
    const [sectionData, setSectionData] = useState([]);



    useEffect(()=> {
        fetch("./kyKids.json")
        .then((responese) => responese.json())
        .then((data) => {
            const tempData = data.filter((data)=> data.sectionId === sectionId);
            setSectionData(tempData)
        })
        .catch((error) => console.error("Error loading JSON:", error));

    })




    return (  
            <section id={header}>
                <div className='flex-container'>
                    <h2>{header}</h2>
                </div>

                <div className='container'>
                    {text}
                </div>
            </section>
    );
}


export default TextSection;