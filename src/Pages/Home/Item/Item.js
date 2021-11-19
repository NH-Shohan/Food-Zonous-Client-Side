import React from "react";
import "./Item.css";

const Item = ({ item, setProduct }) => {
  const { foodName, image, description } = item;

  return (
    <div className="card border-warning card-container">
      <div className="card-body">
        <div className="image">
          <img src={image} className="card-img-top" alt="..." />
        </div>

        <div className="food-name">
          <h5 className="card-title pt-3">{foodName}</h5>
        </div>
        <p className="card-text text-justify">{description}</p>
      </div>
      <div className="card-footer ">
        <button
          type="button"
          className="btn btn-warning fw-bold w-75"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
          onClick={() => {
            setProduct(item);
          }}
        >
          SEE INFO
        </button>
      </div>
    </div>
  );
};

export default Item;
