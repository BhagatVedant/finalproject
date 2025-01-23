import React, { useEffect, useState } from 'react';
import Header from '../components/header';
import headerImg from '../imgs/background1.jpg';
import '../styles/support.css';
import CasaroleSection from '../components/casaroleSection';

function Support() {
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
                <CasaroleSection sectionName="newParents" />
                <CasaroleSection sectionName="therapy" />
            </main>
        </div>
    );
}

export default Support;