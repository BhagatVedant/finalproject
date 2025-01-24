import React from 'react';
import Header from '../components/header';
import headerImg from '../imgs/background1.jpg';
import CasaroleSection from '../components/casaroleSection';
import InspoText from '../components/inspoText';
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

                {pageData.map((sectionName) => (
                    <CasaroleSection sectionName={sectionName} />
                ))}
            </main>
        </div>
    );
}

export default Support;