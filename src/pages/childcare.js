import React from 'react';
import { useState, useEffect } from 'react';
import Header from '../components/header';
import headerImg from '../imgs/background1.jpg';
import TableContainer from '../components/tableContainer';
import InspoText from '../components/inspoText';
import ColumnSection from '../components/columnSection';
import Footer from '../components/footer';
import '../styles/childcare.css';

function Childcare() {
    const pageData = ["childcare"];
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
            Child
            <br />
            care
        </>
    ) : (
        <>
            Childcare
        </>
    );

    return (
        <div id="childcare">
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
                                "Every child blossoms with love, care, and a nurturing environment."
                            </p>

                        </>
                    }
                />

                <ColumnSection sectionName={pageData[0]} />

                <div className='cointainer' id='table'>
                    <TableContainer />
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default Childcare;