import React from 'react'
import './arrow.css'

export default function Arrow(props) {
    return (
       <div id="arrow-wrapper">
        <div className="arrow" id="arrow-up" onClick={() => props.moveMovieHigher(props.index)}></div>
        <div className="arrow" id="arrow-down" onClick={() => props.moveMovieLower(props.index)}></div>
       </div>
    )
}