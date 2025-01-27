import React, { useState, useEffect } from 'react';


function ImageTextBox({ sectionName }) {
    const [sectionData, setSectionData] = useState([]);

    useEffect(() => {
        fetch("./kyKids.json")
            .then((response) => response.json())
            .then((data) => {
                const tempData = data.filter((item) => item.sectionId === sectionName);
                setSectionData(tempData);
            })
            .catch((error) => console.error("Error loading JSON:", error));
    }, [sectionName]);

    if (sectionData.length === 0) {
        return <p>Loading....</p>
    }

    return (
        <section id={"ImageContainer"}>
            {sectionData.map((item) => (
                <div className='imageCard'>
                    <div className="boxLogo">
                        <img src={item.logo} alt="logo image"></img>
                    </div>

                    <div className="boxText">
                        <div className="titlebox">
                            <h2>{item.title}</h2>
                        </div>

                        <div className="boxDescription">
                            {item.description.map((link) => (
                                <p>{item.description}</p>
                            ))}
                        </div>

                        <div className="imageLinks">
                            <ul>
                                {item.links?.map((link) => (
                                    <li key={link.text}>
                                        <a
                                            href={link.link}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {link.text}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className='phone'>
                            <p>{item.phone}</p>
                        </div>

                        <div className='boxDescription'>
                            <p>{item.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );


}

export default ImageTextBox;