import React, { useState, useEffect } from 'react';


function ImageTextBox({ gid }) {

    const [sectionData, setSectionData] = useState(null);

    useEffect(() => {
        fetch("./kyKids.json")
            .then((responese) => responese.json())
            .then((data) => {
                const tempData = data.find((data) => data.gid === gid);
                setSectionData(tempData)
                console.log(data)
                console.log(tempData)
            })
            .catch((error) => console.error("Error loading JSON:", error));
    }, [gid])

    if (!sectionData) {
        return <p>Loading....</p>
    }

    return (
        <section id={"ImageContainer"}>
            <div className='boxLogo'>
                <img src={sectionData.logo} alt="logo"></img>
            </div>

            <div className="title">
                <h2>{sectionData.title}</h2>
            </div>

            <div className="links">
                {Array.isArray(sectionData.links) ? (
                    sectionData.links.map((item, index) => (
                        <a href={item.link} key={index}>{item.text}</a>))
                ) : null
                }
            </div>

            <div className='phone'>
                <p>{sectionData.phone}</p>
            </div>

            <div className='boxDescription'> 
                <p>{sectionData.description}</p>
            </div>


        </section>
    );


}

export default ImageTextBox;