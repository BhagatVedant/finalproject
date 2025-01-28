import React, { useState, useEffect } from 'react';
import retrieveCSV from './retrieveCSV';
import Table from './table';
import './styles/tableContainer.css';

function TableContainer() {
    //CSV data
    const [csv, setCSV] = useState([]);
    const [filteredCSV, setFilteredCSV] = useState([]);

    //Button Text
    const [countyFilter, setCountyFilter] = useState('COUNTY: ALL');
    const [ratingFilter, setRatingFilter] = useState('RATING: ALL');
    const [expirySort, setExpirySort] = useState('EXPIRY DATE: NORMAL');

    //Retrieve the CSV data
    useEffect(() => {
        retrieveCSV("Childcare.csv")
            .then(data => {
                setCSV(data);
                setFilteredCSV(data);
            })
            .catch(error => console.error("Error loading CSV:", error));
    }, []);

    /*-------------------
    Function to cycle through filters
    -------------------*/

    //Function to cycle through County filter options
    function cycleCountyFilter() {
        const options = ['COUNTY: ALL', 'COUNTY: BOYLE', 'COUNTY: MERCER'];
        const currentIndex = options.indexOf(countyFilter);
        const nextIndex = (currentIndex + 1) % options.length;
        setCountyFilter(options[nextIndex]);
    }

    //Function to cycle through Rating filter options
    function cycleRatingFilter() {
        const options = [
            'RATING: ALL',
            'RATING: 1 Star',
            'RATING: 2 Stars',
            'RATING: 3 Stars',
            'RATING: 4 Stars',
            'RATING: 5 Stars'
        ];
        const currentIndex = options.indexOf(ratingFilter);
        const nextIndex = (currentIndex + 1) % options.length;
        setRatingFilter(options[nextIndex]);
    }

    //Function to cycle through Expiry Date sort options
    function cycleExpirySort() {
        const options = [
            'EXPIRY DATE: NORMAL',
            'EXPIRY DATE: HIGH - LOW',
            'EXPIRY DATE: LOW - HIGH'
        ];
        const currentIndex = options.indexOf(expirySort);
        const nextIndex = (currentIndex + 1) % options.length;
        setExpirySort(options[nextIndex]);
    }

    /*-------------------
    Filter and sort the data
    -------------------*/
    useEffect(() => {
        let data = [...csv];

        //Applying County filter
        if (countyFilter !== 'COUNTY: ALL') {
            const countyValue = countyFilter.split(': ')[1];
            data = data.filter(row => row.County === countyValue);
        }

        //Applying Rating filter
        if (ratingFilter !== 'RATING: ALL') {
            const ratingStar = ratingFilter.split(': ')[1];
            const ratingNumber = ratingStar.split(' ')[0];
            data = data.filter(row => `${row["Stars Rating"]}` === ratingNumber);
        }

        //Applying Expiry Date sort
        if (expirySort === 'EXPIRY DATE: HIGH - LOW') {
            data.sort((a, b) => b["Expiration Date"] - a["Expiration Date"]);
        } else if (expirySort === 'EXPIRY DATE: LOW - HIGH') {
            data.sort((a, b) => a["Expiration Date"] - b["Expiration Date"]);
        }

        setFilteredCSV(data);
    }, [csv, countyFilter, ratingFilter, expirySort]);

    return (
        <div className="tableContainer">
            <div className="container">
                <h1>Childcare Facilities</h1>
                <hr />

                <div className="button">
                    <button onClick={cycleCountyFilter}>
                        <p>
                            {countyFilter}
                        </p>
                    </button>

                    <button onClick={cycleRatingFilter}>
                        <p>
                            {ratingFilter}
                        </p>
                    </button>

                    <button onClick={cycleExpirySort}>
                        <p>
                            {expirySort}
                        </p>
                    </button>
                </div>

                {filteredCSV.length > 0 ? (
                    <Table data={filteredCSV} />
                ) : (
                    <div className="noDataMessage">
                        <p><b>Error 404:</b><br />No data available</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default TableContainer;