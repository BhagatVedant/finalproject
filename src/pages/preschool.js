import React from 'react';
import { useState, useEffect } from 'react';
import Header from '../components/header';
import headerImg from '../imgs/background1.jpg';
import CasaroleSection from '../components/casaroleSection';
import InspoText from '../components/inspoText';
import SingleItemSection from '../components/singleItemSection';
import Footer from '../components/footer';
import '../styles/preschool.css';

function Preschool() {
    const pageData = ["HeadstartSection", "PublicPreschool", "PrivatePreschool"];
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const titleH1 = windowWidth < 756 ? (
        <>
            Pre
            <br />
            School
        </>
    ) : (
        <>
            Preschool
        </>
    );

    return (
        <div className='preschool'>
            <Header
                imgURL={headerImg}
                title={
                    <>
                        {titleH1}
                    </>
                }
            />

            <main>
                <InspoText
                    text={
                        <>
                            <p>
                                "Building a strong foundation for every child through
                            </p>
                            <p>
                                love, learning, and support in preschool."
                            </p>
                        </>
                    }
                />

                <SingleItemSection sectionId={pageData[0]} />

                <div id='schools'>
                    {pageData.slice(1, 3).map((sectionName) => (
                        <CasaroleSection sectionName={sectionName} />
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default Preschool;