import React, { useState } from "react";
import SeriesList from "./SeriesList";
import { Link } from "react-router-dom";

const FetchData = () => {

    const [data,setData] = useState([]);

    const [seriesName, setSeriesName] = useState("");

    const handleChange = (e) => {
        fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
        .then((response)  => response.json())
        .then((json) => ( 
            setData(json)),
            setSeriesName(seriesName)
        )
    }
    //console.log(data, seriesName);
    return (
        <>
        <input type="text" onChange={handleChange}></input>
        {data.length === 0 && <p>Please enter series name into the input</p>}
        <SeriesList list={data}/>
        </>
    )
}

export default FetchData;