import React from 'react';
import { useState, useEffect } from 'react';
import '../styles/home.css';

function Home() {
    const [divClass, setDivClass] = useState('opacity');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) setDivClass('fullOpacity');
            else setDivClass('opacity');
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div id="home">
            <div className={divClass}>
                {/* Header Section */}
                <header className="header">
                    <h1 className="title">
                        Heart of KY<br />
                        Kids
                    </h1>
                </header>

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

                    <section id="mission">
                        <div className='flex-container'>
                            <h2>Mission</h2>
                        </div>

                        <div className='container'>
                            <p>
                                We aim to ensure the best early care and education so that every child in Boyle and Mercer counties is
                                <a href="https://letslearnky.org/#kindergarten-readiness"> ready for kindergarten</a>.
                                We support collaborative community partnerships to implement evidence-based strategies that address local early childhood needs.
                            </p>
                            <p>
                                Kindergarten readiness means children enter school with basic skills that will help them learn and play in the classroom.
                                Learn more <a href="https://www.letslearnky.org/#kindergarten-readiness">here!</a>
                            </p>
                        </div>
                    </section>

                    <section id="members">
                        <h2>Members</h2>

                        <div className='container'>
                            <p>
                                Our membership includes representatives from the education and early intervention sector including all public school districts located in Boyle and Mercer County, our local Head Start, and our regional office of First Steps.
                            </p>
                            <p>
                                From both Boyle and Mercer Counties, we have public partners including UK Cooperative-Extension Offices, Health Departments, and Public Libraries.
                            </p>
                            <p>
                                We also partner with local organizations, businesses, and civic organizations including Heart of Kentucky United Way, Ephraim McDowell Health,
                                <a href="https://www.centre.edu/">Centre College</a>, and more.
                            </p>
                            <p>
                                We welcome others to join. Please email chair@hkykids.org.
                            </p>
                        </div>
                    </section>

                    <section id="funding">
                        <h2>Funding and Donations</h2>

                        <div className='container'>
                            <p>
                                We receive funding from the <a href="https://kyecac.ky.gov/Pages/index.aspx">Kentucky Governor's Office of Early Childhood</a>, local donations, and grants.
                            </p>

                            <h3 id="allDonation">Donations for all programs:</h3>
                            <address>
                                Boyle County Health Department<br />
                                P.O. Box 398<br />
                                Danville, KY 40423-0398<br />
                            </address>
                            <p>
                                Write "Heart of KY Kids" on the memo line.
                                These donations are not tax deductible (we are not a 501(c)(3) organization).
                            </p>

                            <h3 id="dollyDonation">Donations for Dolly Parton Imagination Library:</h3>
                            <address>
                                Heart of KY United Way<br />
                                118 North 3rd St.<br />
                                Danville, KY 40422<br />
                            </address>
                            <p>
                                Dolly Parton Imagination Libraries (DPIL) in Boyle and Mercer County are funded separately. Please indicate which library your donation should go toward by writing "DPIL: Boyle" or "DPIL: Mercer" on the memo line.
                            </p>
                            <p>
                                Donations to DPIL are tax deductible as they go to the Dollywood Foundation, which is a 501(c)(3) organization.
                            </p>
                        </div>
                    </section>
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
        </div>
    );
};

export default Home;
