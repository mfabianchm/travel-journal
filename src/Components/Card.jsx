import React from "react"


const Card = (props) => {
    return (
        <div className="card-container">
          <img className="card-image" src={props.img} alt=""/>
          <div className="card-text">
            <h2 className="country">{props.location}</h2>
            <a className="link-maps" href={props.googleMapsUrl}>View on Google Maps</a>
            <h1 className="place-name">{props.title}</h1>
            <p className="date">{props.startDate} - {props.endDate}</p>
            <p className="description">{props.description}</p>
          </div>
        </div>
    )
}

export default Card