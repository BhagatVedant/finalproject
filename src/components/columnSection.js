import React from "react";
import { useState, useEffect } from "react";
import "./styles/columnSection.css";

function ColumnSection({ sectionName }) {
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
        return <div>Loading...</div>;
    }

    return (
        <section className="column-section">
            <h1>{sectionData[0].sectionTitle}</h1>

            {sectionData.map((item) => (
                <div className="columnItem">
                    <img src={item.logo} alt={item.title} />

                    <div className="columnText">
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <div className="columnLinks">
                            <ul>
                                {item.links?.map((link, index) => (
                                    <li key={index}>
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
                </div>
            ))}
        </section>
    );
}

export default ColumnSection;