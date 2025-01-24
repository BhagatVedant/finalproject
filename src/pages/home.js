import React from 'react';
import { useState, useEffect } from 'react';
import Header from '../components/header';
import headerImg from '../imgs/background1.jpg';
import '../styles/home.css';
import CasaroleSection from '../components/casaroleSection';
import TextSection from '../components/textSection';

function Home() {
    const [divClass, setDivClass] = useState('opacity');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) setDivClass('opacity scrolled');
            else setDivClass('opacity');
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div id="home">

            {/* Header Section */}
            <Header
                imgURL={headerImg}
                title={
                    <>Heart of KY<br />Kids
                    </>
                }
            />

            {/* Main Content */}
            <main>
                
                <section id="inspiration">
                    <div className='container'>
                        <div className='quote'>
                            <p>
                                "Every child can have a strong start when families,
                            </p>
                            <p>
                                communities, and schools work together."
                            </p>
                        </div>
                    </div>
                </section>

                <div id="body-container">

                    <TextSection sectionId={"mission"} />
                    <TextSection sectionId={"members"} />
                    <TextSection sectionId={"funding"} />
                    
                </div>
            </main>

            {/* Footer Section */}
            <footer>
                <p className="footer-title">Follow Us</p>
                <div className="social-icons">
                    <a href="https://www.facebook.com/heart.of.ky.kids" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/ios/50/000000/facebook--v1.png" alt="Facebook" />
                    </a>
                    <a href="https://www.instagram.com/heart.of.ky.kids/" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/ios/50/000000/instagram-new.png" alt="Instagram" />
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default Home;
