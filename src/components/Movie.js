import React from 'react'
import { useState } from 'react'
import './movie.css'
import { formatDate } from '../assets/functions/fns'


export default function Movie(props) {
    let { item } = props;
    const [isShown, changeShown] = useState(false);
    let date = formatDate(item.release_date)
    return (
        <div className="movie-wrapper">
            <h1>{item.title}</h1>
            {isShown ?
            <span>
                <span className="show-less" onClick={() => changeShown(false)}> -</span>
                <div>
                    Released: {date} <br/>
                    Chronological Order: {item.episode_id} <br/>
                </div>
            </span> :

            <span className="show-more" onClick={() => changeShown(true)}> +</span>}

        </div>
    )
}