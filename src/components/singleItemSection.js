import React from "react";
import { useState, useEffect } from "react";
import "./styles/singleItemSection.css";

function SingleItemSection({ sectionId, showTitle = true }) {
    //Storing Requested Section Data
    const [sectionData, setSectionData] = useState({});

    //Fetch the data for the requested section
    useEffect(() => {
        fetch("./kyKids.json")
            .then((response) => response.json())
            .then((data) => {
                const tempData = data.find((item) => item.sectionId === sectionId);
                setSectionData(tempData);
            })
            .catch((error) => console.error("Error loading JSON:", error));
    }, [sectionId]);

    return (
        <section className="single-item-section">
            {showTitle && <h1>{sectionData.title}</h1>}

            <div className="single-item-content">
                <img src={sectionData.logo} alt={sectionData.title} />

                <div className="single-item-text">
                    <h2>{sectionData.title}</h2>
                    <p>{sectionData.description}</p>
                    <div className="single-item-links">
                        <ul>
                            {sectionData.links?.map((item, index) => (
                                <li key={index}>
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {item.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SingleItemSection;