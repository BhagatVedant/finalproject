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
                    <div className='notVideoBox'>
                        <div className='videoLogo'>
                            <img src={item.logo} alt={item.title} />
                        </div>

                        <div className="boxText">
                            <h2>{item.title}</h2>

                            {item.description.map((link) => (
                                <p>{item.description}</p>
                            ))}

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

                        <div
                            className="boxVideo"
                            dangerouslySetInnerHTML={{ __html: item.video }}
                        />
                    </div>
                </div>
            ))}
        </section>
    );
}

export default VideoSection;