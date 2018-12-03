import React from 'react'
import { useState } from 'react'
import './movie.css'
import { formatDate } from '../assets/functions/fns'
import { Draggable } from 'react-beautiful-dnd'


export default function Movie(props) {
    let { item, index } = props;
    const [isShown, changeShown] = useState(false);

    let date = formatDate(item.release_date)
    return (
        <Draggable draggableId={item.episode_id} index={index}>
        {(provided) => (
            <div className="movie-wrapper"
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
            >
                <h1>{index + 1}. &nbsp; </h1>
                    <h1>{item.title}</h1>
                    {isShown ?
                    <span>
                            <span className="show-less" onClick={() => changeShown(false)}> -</span>
                                <div>
                                    Released: {date} <br/>
                                    Chronological Order: {item.episode_id} <br/>
                                    Director: {item.director} <br/>
                                    Producer: {item.producer} <br/>
                                </div>
                    </span> :

                <span className="show-more" onClick={() => changeShown(true)}> +</span>}

            </div>
        )}
        </Draggable>
    )
}