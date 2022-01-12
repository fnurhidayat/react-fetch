import React from "react"

function Card({ title, thumbnailUrl }) {
    return (
        <div>
            <img src={thumbnailUrl} alt={title} />
            <h3>{title}</h3>
        </div>
    )
}

export default Card;