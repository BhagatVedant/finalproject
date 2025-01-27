import React from 'react';
import Header from '../components/header';
import headerImg from '../imgs/background1.jpg';
import CasaroleSection from '../components/casaroleSection';
import InspoText from '../components/inspoText';
import SingleItemSection from '../components/singleItemSection';
import VideoSection from '../components/videoSection';
import Footer from '../components/footer';
import '../styles/activities.css';

function Activities() {
    const pageData = ["programs", "AtHome", "kids-and-parents", "kidAdventures"];

    return (
        <div id="activities">
            <Header
                imgURL={headerImg}
                title={
                    <>
                        Activities
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

                <VideoSection sectionName={pageData[0]} />
                
                <SingleItemSection sectionId={pageData[1]} />

                {pageData.slice(2,4).map((sectionName) => (
                    <CasaroleSection sectionName={sectionName} />
                ))}
            </main>

            <Footer />
        </div>
    );
}

export default Activities;