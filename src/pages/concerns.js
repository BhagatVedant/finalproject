import React from 'react';
import Header from '../components/header';
import headerImg from '../imgs/background1.jpg';
import InspoText from '../components/inspoText';
import TextSection from '../components/textSection';
import ImageTextBox from '../components/imageTextBox';
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
                                "Together, we address every concern with care,
                            </p>
                            <p>
                                ensuring your child’s preschool journey is happy and successful."
                            </p>
                        </>
                    }
                />

                <div id='whatToDo'>
                    <TextSection sectionId={pageData[0]} />
                </div>
                
                <ImageTextBox sectionName={pageData[1]} />
            </main>
            <Footer />
        </div>
    );
};

export default Concerns;