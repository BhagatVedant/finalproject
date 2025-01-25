import React, { useState, useEffect } from 'react';
import './styles/textSection.css';

function TextSection({ sectionId }) {
    const [sectionData, setSectionData] = useState(null);

    console.log(sectionId)

    useEffect(()=> {
        fetch("./kyKids.json")
        .then((responese) => responese.json())
        .then((data) => {
            const tempData = data.find((data)=> data.sectionId === sectionId);
            setSectionData(tempData)
            console.log(data)
            console.log(tempData)
        })
        .catch((error) => console.error("Error loading JSON:", error));
    }, [sectionId])


    if(!sectionData){
        return <p>Loading....</p>
    }


    return (  
            <section id={sectionData.sectionId}>
                <div className='flex-container'>
                    <h2>{sectionData.sectionTitle}</h2>
                </div>

                <div className='container'> {sectionData.description.map((content, index) =>
                    <p key={index}>{content}</p>
                )}    
                </div>
            </section>
    );
}


export default TextSection;