import React from "react";
import { Link } from "react-router-dom"

const BeerItem = ({ beer }) => {
  return (
    <li className="collection-item">
      <Link to={"/beer/" + beer.id}>
        <div className="card">
          <div className="card-image">
            <img alt={beer.name} prop={beer.name} className="responsive-img" src={beer.image_url} />
          </div>
          <div className="card-content">
            <h2 className="card-title">
              {beer.name}
            </h2>
              <span >{ " "+beer.abv} ABV</span>
            <p>{beer.description}</p>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default BeerItem;