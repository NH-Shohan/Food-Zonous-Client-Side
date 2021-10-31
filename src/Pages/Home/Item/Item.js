import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ item }) => {
  const { _id, foodName, image, description } = item;

  return (
    <div className="card border-warning card-container">
      <div className="card-body">
        <div className="image">
          <img src={image} className="card-img-top " alt="..." />
        </div>
        <h5 className="card-title">{foodName}</h5>
        <p className="card-text">{description}</p>
      </div>
      <div className="card-footer">
        <Link to={`/singleItem/${_id}`} className="btn btn-warning">
          See Info
        </Link>
      </div>
    </div>
  );
};

export default Item;
