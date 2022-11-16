import React from "react";
import FetchData from "./FetchData";

const Intro = (props) => {
    return (
        <>
        <h1>{props.message}</h1>
        <FetchData/>
        </>

    )
}

export default Intro;