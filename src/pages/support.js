import React, { useEffect, useState } from 'react';

function Support() {
    const [supportData, setSupportData] = useState([]);

    useEffect(() => {
        fetch('/kyKids.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                // Filter for relevant sections (if needed)
                const supportSections = data.filter(
                    (section) => section.sectionId === 'support' || section.sectionTitle?.toLowerCase().includes('support')
                );
                setSupportData(supportSections);
            })
            .catch((error) => {
                console.error('Error fetching the support data:', error);
            });
    }, []);

    return (
        <div>
            <h1>Support</h1>
            {supportData.length === 0 ? (
                <p>Loading...</p>
            ) : (
                supportData.map((section, index) => (
                    <div key={index} className="section">
                        <h2>{section.sectionTitle}</h2>
                        {section.logo && (
                            <img src={section.logo} alt={section.title} className="section-logo" />
                        )}
                        <h3>{section.title}</h3>
                        {section.description &&
                            section.description.map((desc, i) => <p key={i}>{desc}</p>)}
                        {section.links && (
                            <ul>
                                {section.links.map((link, i) => (
                                    <li key={i}>
                                        <a
                                            href={link.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {link.text}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        )}
                        {section.video && (
                            <div
                                className="video-container"
                                dangerouslySetInnerHTML={{ __html: section.video }}
                            />
                        )}
                        {section.phone && <p>Contact: {section.phone}</p>}
                    </div>
                ))
            )}
        </div>
    );
}

export default Support;
