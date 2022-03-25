import React from "react"

import Nav from "./Components/Nav"
import Card from "./Components/Card"
import data from "./data"


const App = () => {

    let CardElements = data.map((item) => {
        return (
            <Card
             img={item.imageUrl}
             location={item.location}
             title={item.title}
             startDate={item.startDate}
             endDate={item.endDate}
             description={item.description}
             googleMapsUrl={item.googleMapsUrl}
            />
        )
    })

    return (
        <div className="main-container">
          <Nav/>
          {CardElements}
        </div>
    )
}

export default App