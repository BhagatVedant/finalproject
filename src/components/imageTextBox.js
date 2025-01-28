import React, { useState, useEffect } from 'react';
import './styles/imageTextBox.css';

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
        <section id="ImageContainer">
            {sectionData.map((item) => (
                <div className='imageCard'>
                    <div className='imageStuff'>
                        <div className="boxLogo">
                            <img src={item.logo} alt="logo image"></img>
                        </div>

                        <div className="imageCardText">
                            <h2>{item.title}</h2>

                            <div className="boxDescription">
                                {Array.isArray(item.description) ? (

                                    item.description.length > 0 ? (
                                        item.description.map((desc, index) => <p key={index}>{desc}</p>)
                                    ) : null
                                ) : (

                                    item.description ? <p>{item.description}</p> : null
                                )}
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
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );

}


export default ImageTextBox;