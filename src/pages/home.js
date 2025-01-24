import React from 'react';
import Header from '../components/header';
import headerImg from '../imgs/background1.jpg';
import InspoText from '../components/inspoText';
import TextSection from '../components/textSection';
import Footer from '../components/footer';
import '../styles/home.css';

function Home() {
    const pageData = ["mission", "members", "funding"];

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

                <div id="body-container">

                    <TextSection sectionId={"mission"} />
                    <TextSection sectionId={"members"} />
                    <TextSection sectionId={"funding"} />
                    
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Home;
