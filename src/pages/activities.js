import React from 'react';
import Header from '../components/header';
import headerImg from '../imgs/background1.jpg';
import CasaroleSection from '../components/casaroleSection';
import InspoText from '../components/inspoText';

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

                {pageData.map((sectionName) => (
                    <CasaroleSection sectionName={sectionName} />
                ))}
            </main>
        </div>
    );
}

export default Activities;