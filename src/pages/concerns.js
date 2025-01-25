import React from 'react';
import Header from '../components/header';
import headerImg from '../imgs/background1.jpg';
import InspoText from '../components/inspoText';
import TextSection from '../components/textSection';
import Footer from '../components/footer';
import '../styles/concerns.css';

function Concerns() {
    const pageData = ["whatToDo", "AddressConcerns"];

    return (
        <div id="concerns">
            <Header
                imgURL={headerImg}
                title={
                    <>
                        Concerns
                    </>
                }
            />
            <main>
                <InspoText
                    text={
                        <>
                            <p>
                                "Every child can have a strong start when families,
                            </p>
                            <p>
                                communities, and schools work together."
                            </p>
                        </>
                    }
                />

                <TextSection sectionId={pageData[0]} />
            </main>
            <Footer />
        </div>
    );
};

export default Concerns;