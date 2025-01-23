import React from "react";
import { useState, useEffect } from "react";
import "./styles/header.css";

function Header({ imgURL, title }) {
    const [divClass, setDivClass] = useState("opacity");

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) setDivClass("opacity scrolled");
            else setDivClass("opacity");
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className="header"
            style={{
                backgroundImage: `url(${imgURL})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className={divClass}>
                <h1 className="title">{title}</h1>
            </div>
        </header>
    );
}

export default Header;
