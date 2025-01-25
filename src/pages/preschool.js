import React from 'react';
import Header from '../components/header';
import headerImg from '../imgs/background1.jpg';
import CasaroleSection from '../components/casaroleSection';
import InspoText from '../components/inspoText';
import Footer from '../components/footer';
import '../styles/preschool.css';

function Preschool() {
    const pageData = ["HeadStartSection", "PublicPreschool", "PrivatePreschool"];

    return (
        <div className='preschool'>
            <Header
                imgURL={headerImg}
                title={
                    <>
                        Preschool
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

            <Footer />
        </div>
    );
}

export default Preschool;