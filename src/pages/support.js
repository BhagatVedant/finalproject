import React, { useEffect, useState } from 'react';
import Header from '../components/header';
import headerImg from '../imgs/background1.jpg';
import '../styles/support.css';
import CasaroleSection from '../components/casaroleSection';

function Support() {
    const [sectionData, setSectionData] = useState(["newParents", "therapy", "caregivers"]);

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
                {sectionData.map((sectionName) => (
                    <CasaroleSection sectionName={sectionName} />
                ))}
            </main>
        </div>
    );
}

export default Support;