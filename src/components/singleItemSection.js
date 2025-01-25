import React from "react";
import "./styles/singleItemSection.css";

function SingleItemSection({ sectionId }) {
    //Storing Requested Section Data
    const [sectionData, setSectionData] = React.useState({});

    //Fetch the data for the requested section
    React.useEffect(() => {
        fetch("./kyKids.json")
            .then((response) => response.json())
            .then((data) => {
                const tempData = data.find((item) => item.sectionId === sectionId);
                setSectionData(tempData);
                console.log(tempData);
            })
            .catch((error) => console.error("Error loading JSON:", error));
    }, [sectionId]);

    return (
        <section className="single-item-section">
            <h1>{sectionData.sectionTitle}</h1>

            <div className="single-item-content">
                <img src={sectionData.logo} alt={sectionData.title} />

                <div className="single-item-text">
                    <h2>{sectionData.gid}</h2>
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