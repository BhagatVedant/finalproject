import React from 'react';
import Header from '../components/header';
import headerImg from '../imgs/background1.jpg';
import CasaroleSection from '../components/casaroleSection';
import InspoText from '../components/inspoText';
import SingleItemSection from '../components/singleItemSection';
import Footer from '../components/footer';
import '../styles/support.css';

function Support() {
    const pageData = ["newParents", "therapy", "caregivers"];

    return (
        <div id="support">
            <Header
                imgURL={headerImg}
                title={
                    <>
                        Support
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

                {pageData.slice(0,2).map((sectionName) => (
                    <CasaroleSection sectionName={sectionName} />
                ))}

                <SingleItemSection sectionId={pageData[2]} />
            </main>

            <Footer />
        </div>
    );
}

export default Support;