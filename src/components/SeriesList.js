import React from "react";
import "../css/series.css";
import { Link } from "react-router-dom";

const SeriesList = (props) => {
    console.log(props.list);
    return (
        <>
        <ul className="series-list">
            {props.list.map((item,id) => (
                <Link to={`/series/${item.show.id}`}><li key={id}>{item.show.name}</li></Link>
            ))}
        </ul>
        </>
    )
}

export default SeriesList;