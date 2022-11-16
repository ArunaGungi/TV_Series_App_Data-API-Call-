import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import FetchData from "../components/FetchData";
import axios from "axios";

const SingleSeries = () => {

    const [show, setShow] = useState({
        name:"",
        image:"",
        premiered:"",
        rating:"",
        episodes:""
    });

    const params = useParams();

    const fetchData = () => {
        //console.log(params.id);
        axios.get(`https://api.tvmaze.com/shows/${params.id}?embed=episodes`)
        .then((response) => {
            setShow({...show, name:response.data.name, premiered:response.data.premiered,
            rating:response.data.rating, image:response.data.image,episodes:response.data._embedded.episodes
            })
            //console.log(show);
        })
    }
    
    return(
        <>
        {fetchData()}
        <h1>{show.name}</h1>
        <p><b>Premiered - </b>{show.premiered}</p>
        <p><b>Rating - </b>{show.rating.average}</p>
        <p><b>Episodes - </b>{show.episodes.length}</p>
        <p><img alt="Show" src={show.image.medium}></img></p>
        <Link to={'/'} element={<FetchData/>}>Check Some More...</Link>
        </>
    )
}

export default SingleSeries;