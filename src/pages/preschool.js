import React from 'react';
import Header from '../components/header';
import headerImg from '../imgs/background1.jpg';
import CasaroleSection from '../components/casaroleSection';
import InspoText from '../components/inspoText';
import SingleItemSection from '../components/singleItemSection';
import Footer from '../components/footer';
import '../styles/preschool.css';

function Preschool() {
    const pageData = ["HeadstartSection", "PublicPreschool", "PrivatePreschool"];

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
                            "Building a strong foundation for every child through 
                            </p>
                            <p>
                            love, learning, and support in preschool."
                            </p>
                        </>
                    }
                />

                <SingleItemSection sectionId={pageData[0]} />

                {pageData.slice(1,3).map((sectionName) => (
                    <CasaroleSection sectionName={sectionName} />
                ))}
            </main>

            <Footer />
        </div>
    );
}

export default Preschool;