import React from 'react';
import Header from '../components/header';
import headerImg from '../imgs/background1.jpg';
import InspoText from '../components/inspoText';
import TextSection from '../components/textSection';
import Banner from '../components/banner';
import Footer from '../components/footer';
import kidRun from '../imgs/kidrun.jpg';
import kidSun from '../imgs/sun.jpg';
import kidHi from '../imgs/234.jpg';
import '../styles/home.css';

function Home() {
    const pageData = [
        {
            name: "mission",
            img: kidSun,
        },
        {
            name: "members",
            img: kidHi,
        },
        {
            name: "funding",
            img: kidRun,
        }];

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

                {pageData.map((section) => (
                    <div id={`${section.name}Section`}>
                        <Banner imgURL={section.img} />
                        <TextSection sectionId={section.name} />
                    </div>
                ))}
            </main>

            <Footer />
        </div>
    );
};

export default Home;
