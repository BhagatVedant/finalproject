function isQuote(letter)  {  return letter==="'" || letter === '"' }
function isDelimiter(letter) { return letter===","}

function parseRow(row)
{

    let quoteType = "";
    let tokens = [];
    let token = [];

    for(let i =0;i<row.length;i++)
    {
        let letter = row.charAt(i);
        if( isQuote(letter) )
        {
            if(quoteType === "") {quoteType=letter}               //start a quote
            else if(letter === quoteType) { quoteType=""; }     //end a quote
            else {token.push(letter)}                           //in a quote
        }
        else if( isDelimiter(letter))
        {
            if(quoteType === "")                                //add Token
            { 
                tokens.push(token.join(""));
                token.length=0;
            }
            else {token.push(letter)}                            //part of quote
        }
        else
        {
            token.push(letter);
        }
    }
    tokens.push(token.join(""));
    return tokens;
}



/* Parsing code retrieved from 
Will retrieve the csv file and return it as an array of objects
https://code-hl.com/javascript/tutorials/javascript-read-csv
*/

function parseCSV(data) {
    const lines = data.split('\n');
    const headers = lines[0].trim().split(',');

    return lines.slice(1).map(line => 
    {
        let values = parseRow(line.trim());
        return headers.reduce((obj, header, index) => 
        {
            obj[header] = values[index];
            return obj;
        }, {});
    });
}

async function readCSV(url) 
{
    const response = await fetch(url);
    const data = await response.text();
    return data;
}

async function retrieveCSV(url) 
{
    const csvData = await readCSV(url);
    const parsedData = parseCSV(csvData);
    return parsedData;
}



export default retrieveCSV;
