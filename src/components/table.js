import React from 'react';
import './styles/table.css';

function Table({ data }) {
    function SerialToDate(serial) {
        const date = new Date((serial - 25569) * 86400 * 1000);
        const day = String(date.getUTCDate()).padStart(2, '0');
        const month = String(date.getUTCMonth() + 1).padStart(2, '0');
        const year = date.getUTCFullYear();

        return day + '/' + month + '/' + year;;
    }

    return (
        <div className="tableContainer">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th className='Centre'>County</th>
                        <th>Location</th>
                        <th className='Centre'>Phone Number</th>
                        <th>Mailing Address</th>
                        <th className='Centre'>Expiration Date</th>
                        <th className='Centre'>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            <td>{row.Name}</td>
                            <td className='Centre'>{row.County}</td>
                            <td>{row["Location Address"]}</td>
                            <td className='Centre'>{row.Phone}</td>
                            <td>{row["Mailing Address"]}</td>
                            <td className='Centre'>{SerialToDate(row["Expiration Date"])}</td>
                            <td className='Centre'>{row["Stars Rating"]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;