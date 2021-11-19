import React from "react";
import { Link } from "react-router-dom";

const ItemModal = ({ product }) => {
  return (
    <div>
      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                {product.foodName}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="card-body row">
                <div className="image col-md-6">
                  <img src={product.image} className="card-img-top" alt="..." />
                </div>
                <p className="card-text col-md-6">{product.description}</p>
              </div>
            </div>
            <div className="modal-footer m-auto ">
              <button
                type="button"
                className="btn btn-danger fw-bold"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <Link to={`/orders/${product._id}/${product.foodName}`}>
                <button
                  type="button"
                  data-bs-dismiss="modal"
                  className="btn btn-success fw-bold"
                >
                  Proceed
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
