import React from 'react';
import Header from '../components/header';
import headerImg from '../imgs/background1.jpg';
import InspoText from '../components/inspoText';

function Concerns() {
    const pageData = ["whatToDO", "AddressConcerns"];

    return (
        <div id="concerns">
            <Header
                imgURL={headerImg}
                title={
                    <>
                        Concerns
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
            </main>
        </div>
    );
};

export default Concerns;