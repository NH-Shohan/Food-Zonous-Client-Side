import React from "react";

const DeleteModal = ({
  order,
  manageOrders,
  selectedOrder,
  setManageOrders,
}) => {
  // delete an order
  const handleDeleteOrder = () => {
    const url = `https://food-zonous.herokuapp.com/orders/${selectedOrder._id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const remainingOrders = manageOrders.filter(
            (order) => order._id !== selectedOrder._id
          );
          setManageOrders(remainingOrders);
        }
      });
  };

  return (
    <div>
      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Are You Sure About That???
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div
                className="alert alert-warning d-flex align-items-center d-flex justify-content-center"
                role="alert"
              >
                <i
                  style={{ fontSize: "30px" }}
                  className="fas fa-exclamation-circle pe-3"
                ></i>
                <div style={{ fontSize: "20px" }} className="fw-bold">
                  Cancel Order???
                </div>
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-center">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={handleDeleteOrder}
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
