import React, { useState, useEffect, useRef, useMemo } from "react";
import "./styles/casaroleSection.css";

function CasaroleSection({ sectionName }) {
    //Storing Requested Section Data
    const [sectionData, setSectionData] = useState([]);

    //Storing the current index of the data array
    const [currentIndex, setCurrentIndex] = useState(0);

    //Storing the transition state
    const [isTransitioning, setIsTransitioning] = useState(false);

    //Reference to the wrapper div
    //Used to control the transition property
    //and to force a reflow
    const wrapperRef = useRef(null);

    //Fetch the data for the requested section
    useEffect(() => {
        fetch("./kyKids.json")
            .then((response) => response.json())
            .then((data) => {
                const tempData = data.filter((item) => item.sectionId === sectionName);
                setSectionData(tempData);
            })
            .catch((error) => console.error("Error loading JSON:", error));
    }, [sectionName]);

    //Create an infinite data array to loop through
    const infiniteData = useMemo(() => {
        if (sectionData.length === 0) return [];
        return [...sectionData, ...sectionData, ...sectionData];
    }, [sectionData]);

    //Storing the original length of the data array
    const dataLength = sectionData.length;

    //Set the current index to the middle chunk of the data array
    useEffect(() => {
        if (dataLength > 0) {
            setCurrentIndex(dataLength);
        }
    }, [dataLength]);

    //Handle the previous button click
    function handlePrev() {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex((prev) => prev - 2);
    }

    //Handle the next button click
    function handleNext() {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex((prev) => prev + 2);
    }

    //Handle the transition end
    function handleTransitionEnd() {
        //Turn off the transition state
        setIsTransitioning(false);

        /*-----------------------------------
            Creating Infinte loop effect
        -----------------------------------*/

        //If we've reached the end of the data array, we instantly jump back to the middle chunk
        if (currentIndex >= 2 * dataLength) {
            //Turn off the transition, jump back to the middle chunk, then re-enable the transition
            wrapperRef.current.style.transition = "none";
            setCurrentIndex((prev) => prev - dataLength);

            requestAnimationFrame(() => {
                wrapperRef.current.style.transition = "transform 0.8s ease-in-out";
            });
        }

        //If we've reached the beginning of the data array, we instantly jump to the middle chunk
        else if (currentIndex < dataLength) {
            //Turn off the transition, jump forward by dataLength, then re-enable the transition
            wrapperRef.current.style.transition = "none";
            setCurrentIndex((prev) => prev + dataLength);

            requestAnimationFrame(() => {
                wrapperRef.current.style.transition = "transform 0.8s ease-in-out";
            });
        }
    }

    //Whenever isTransitioning changes, update the transition property of the wrapper div
    //Forces a reflow to apply the changes
    useEffect(() => {
        if (!wrapperRef.current) return;
        wrapperRef.current.style.transition = isTransitioning
            ? "transform 0.8s ease-in-out"
            : "none";
    }, [isTransitioning]);

    //If the section data is empty, display a message
    if (sectionData.length === 0) {
        return (
            <div className="casaroleSection">
                <p>Coming Soon...</p>
            </div>
        );
    }

    function renderCards() {
        if (sectionData.length <= 4) {
            const basisValue = (100 / sectionData.length) - (4 - sectionData.length);

            return (
                <div className="casaroleCardHolderLessThanFive">
                    {sectionData.map((item) => (
                        <div
                            key={item.id}
                            className="casaroleCard"
                            style={{
                                flex: `0 0 ${basisValue}%`,
                            }}
                        >
                            <div className="casaroleContent">
                                <img src={item.logo} alt={item.title} />
                                <div className="casaroleText">
                                    <h2>{item.title}</h2>
                                    <p>{item.description}</p>
                                    <div className="casaroleLinks">
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
                            </div>
                        </div>
                    ))}
                </div>
            );
        }

        else {
            return (
                <div className="casaroleCardHolder">
                    <button className="casaroleNavButton left" onClick={handlePrev}>
                        <p>
                            &#x2039;
                        </p>
                    </button>

                    <div
                        className="casaroleWrapper"
                        ref={wrapperRef}
                        style={{
                            transform: `translateX(-${currentIndex * 25}%)`,
                        }}
                        onTransitionEnd={handleTransitionEnd}
                    >
                        {infiniteData.map((item, index) => (
                            <div key={index} className="casaroleCard">
                                <div className="casaroleContent">
                                    <img src={item.logo} alt={item.title} />
                                    <div className="casaroleText">
                                        <h2>{item.title}</h2>
                                        <p>{item.description}</p>
                                        <div className="casaroleLinks">
                                            <ul>
                                                {item.links?.map((link, linkIndex) => (
                                                    <li key={linkIndex}>
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
                            </div>
                        ))}
                    </div>

                    <button className="casaroleNavButton right" onClick={handleNext}>
                        <p>
                            &#x203A;
                        </p>
                    </button>
                </div>
            );
        }
    }

    //Render the component when the section data is loaded
    return (
        <div className="casaroleSection">
            <h1>{sectionData[0].sectionTitle}</h1>

            {renderCards()}
        </div>
    );
}

export default CasaroleSection;
