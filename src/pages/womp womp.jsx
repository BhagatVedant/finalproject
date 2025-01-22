const [kidAdventures, setKidAdventures] = useState([]);

useEffect(() => {
    fetch('./kyKids.json')
        .then((response) => response.json())
        .then((data) => {
            const adventures = data.filter(item => item.sectionId === "kidAdventures");
            setKidAdventures(adventures);
        })
        .catch((error) => console.error('Error loading JSON:', error));
}, []);

return (
    <div className="App">
        <header className="App-header">
            <h1>Kid Adventures</h1>

            {kidAdventures.length > 0 ? (
                kidAdventures.map((adventure) => (
                    <div key={adventure.gid} className="adventure-card">
                        <img src={adventure.logo} alt={adventure.title} className="adventure-logo" />
                        <h2>{adventure.title}</h2>

                        <p>{adventure.description.join(' ')}</p>
                        {adventure.links && (
                            <ul>
                                {adventure.links.map((link, index) => (
                                    <li key={index}>
                                        <a href={link.link}>
                                            {link.text}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))
            ) : (
                <p>Loading Kid Adventures...</p>
            )}
        </header>
    </div>
);