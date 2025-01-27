import React from 'react';
import Header from '../components/header';
import headerImg from '../imgs/background1.jpg';
import TableContainer from '../components/tableContainer';
import InspoText from '../components/inspoText';
import ColumnSection from '../components/columnSection';
import Footer from '../components/footer';
import '../styles/childcare.css';

function Childcare() {
    const pageData = ["childcare"];

    return (
        <div id="childcare">
            <Header
                imgURL={headerImg}
                title={
                    <>
                        Childcare
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

                <ColumnSection sectionName={pageData[0]} />

                <div className='cointainer'>
                    <TableContainer />
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default Childcare;