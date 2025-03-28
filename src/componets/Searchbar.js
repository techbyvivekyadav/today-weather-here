import React, { useState } from 'react'
import Real from './Real'

const Searchbar = () => {

    const [details, setDetails] = useState();
    const [search, setSearch] = useState('');
    const [error, setError] = useState(true);
    const [edetails, setEdetails] = useState('Find data to city name');

    const mainFun = async () => {
        const data = await fetch(`http://api.weatherapi.com/v1/current.json?key=150607480da2456ca23184841252503&q=${search}&aqi=yes`);
        console.log(data);
        const jsonData = await data.json();
        
        if (jsonData.error) {

            setDetails();
            setError(true);
            if(search == "") {
                setEdetails("Find data to city name");
            }
            else {
                setEdetails(jsonData.error.message);
            }    
        }
        else {
            setDetails(jsonData);
            console.log(jsonData);
            setError(false);
        }

    }

    const searchHandle = (e) => {
        setSearch(e.target.value);
    }

    return (
        <>
            <div className="search-container">
                <input type="text" className="search-input" placeholder="Search..." onChange={searchHandle} value={search} />
                <button className="search-button" onClick={mainFun}>Search</button>
            </div>
            <Real data={details} error={error} erdetails={edetails} />
        </>
    )
}

export default Searchbar