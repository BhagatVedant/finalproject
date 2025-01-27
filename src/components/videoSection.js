import React, { useState, useEffect } from 'react';
import './styles/videoSection.css';


function VideoSection({ sectionName }) {
    const [sectionData, setSectionData] = useState([]);

    useEffect(() => {
        fetch("./kyKids.json")
            .then((response) => response.json())
            .then((data) => {
                const tempData = data.filter((item) => item.sectionId === sectionName);
                setSectionData(tempData);
                console.log("tempData: ", tempData);
            })
            .catch((error) => console.error("Error loading JSON:", error));
    }, [sectionName]);

    if (sectionData.length === 0) {
        return <p>Loading....</p>
    }

    return (
        <section id="videoContainer">
            {sectionData.map((item) => (
                <div className='videoCard'>
                    <div className="boxLogo">
                        <img src={item.logo} alt="logo image"></img>
                    </div>

                    <div className="title">
                        <h2>{item.title}</h2>
                    </div>

                    <div className="boxDescription">
                        {item.description.map((link) => (
                            <p>{item.description}</p>
                        ))}
                    </div>

                    <div
                        className="boxVideo"
                        dangerouslySetInnerHTML={{ __html: item.video }}
                    />

                    <div className="videoLinks">
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
                </div>
            ))}
        </section>
    );
}

export default VideoSection;