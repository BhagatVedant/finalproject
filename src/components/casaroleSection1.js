import React from "react";
import { useState, useEffect } from "react";
import "./styles/casaroleSection1.css";

function CasaroleSection({ sectionName }) {
    const [sectionData, setSectionData] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAtENd, setIsAtEnd] = useState(false);

    useEffect(() => {
        fetch('./kyKids.json')
            .then((response) => response.json())
            .then((data) => {
                const secData = data.filter(item => item.sectionId == sectionName);
                setSectionData(secData);
            })
            .catch((error) => console.error('Error loading JSON:', error));
    }, []);

    function handlePrev() {
        if (isAtENd) return;
        setIsAtEnd(true);
        setCurrentIndex((prevIndex) => prevIndex - 1);
    };

    function handleNext() {
        if (isAtENd) return;
        setIsAtEnd(false);
        setCurrentIndex((prevIndex) => prevIndex + 1);
    };

    function handleTransitionEnd() {
        setIsAtEnd(false);
        const realDataLength = sectionData.length - 6;
        if (currentIndex === 0) {
            setCurrentIndex(realDataLength);
        }
        else if (currentIndex === sectionData.length - 3) {
            setCurrentIndex(3);
        }
    }

    const renderCards = () => {
        if (sectionData.length <= 3) {
            return sectionData.map((item) => (
                <div key={item.id} className="casaroleCard">
                    <img src={item.logo} alt={item.title} />
                    <div className="casaroleText">
                        <h2>{item.gid}</h2>
                        <p>{item.description}</p>
                        <div className="casaroleLinks">
                            {item.links.map((link) => (
                                <a href="{link.url}" target="_blank" rel="noreferrer">{link.text}</a>
                            ))}
                        </div>
                    </div>
                </div>
            ));
        } else if (sectionData.length === 4) {
            return sectionData.map((item) => (
                <div key={item.id} className="casaroleCard">
                    <img src={item.logo} alt={item.title} />
                    <div className="casaroleText">
                        <h2>{item.gid}</h2>
                        <p>{item.description}</p>
                        <div className="casaroleLinks">
                            {item.links.map((link) => (
                                <a href="{link.url}" target="_blank" rel="noreferrer">{link.text}</a>
                            ))}
                        </div>
                    </div>
                </div>
            ));
        } else {
            return sectionData.map((item, index) => (
                <div
                    key={item.id || index}
                    className="casaroleCard"
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`,
                        transition: isAtENd ? "transform 0.5s ease" : "none",
                    }}
                >
                    <img src={item.logo} alt={item.title} />
                    <div className="casaroleText">
                        <h2>{item.gid}</h2>
                        <p>{item.description}</p>
                        <div className="casaroleLinks">
                            {item.links.map((link, linkIndex) => (
                                <a key={linkIndex} href={link.url} target="_blank" rel="noreferrer">
                                    {link.text}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            ));
        }
    };

    return (
        <div className="casaroleSection">
            {sectionData.length === 0 ? (
                <p>Coming Soon...</p>
            ) : (
                <div>
                    <h1>{sectionData[0].sectionTitle}</h1>

                    <div className="casaroleCardHolder">
                        {sectionData.length > 4 && (
                            <button className="casaroleNavButton left" onClick={handlePrev}>
                                Prev
                            </button>
                        )}
                        {renderCards()}
                        {sectionData.length > 4 && (
                            <button className="casaroleNavButton right" onClick={handleNext}>
                                Next
                            </button>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default CasaroleSection;