import React from "react";

const OrderTable = ({
  manageOrders,
  handleChange,
  setSelectedOrder,
  selectStatus,
}) => {
  return (
    <div>
      <table className="table ">
        <thead className="table-dark">
          <tr>
            <th scope="col">Food Name</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">Number</th>
            <th scope="col">Status</th>
            <th scope="col">Cancel</th>
          </tr>
        </thead>
        <tbody>
          {manageOrders.map((order) => (
            <tr key={order.itemName}>
              <td>{order.itemName}</td>
              <td>{order.name}</td>
              <td>{order.email}</td>
              <td>{order.address}</td>
              <td>{order.number}</td>
              <td>
                {selectStatus ? (
                  <>
                    <select
                      name="status"
                      className="btn btn-dark"
                      onChange={(e) =>
                        handleChange(e, order._id, order.name, order.service)
                      }
                      style={{ border: "none" }}
                    >
                      <option value="Pending">Pending</option>
                      <option value="On Going">On Going</option>
                      <option value="Approved">Approved</option>
                      {order.status && <option selected>{order.status}</option>}
                    </select>
                  </>
                ) : (
                  <>
                    <button className="btn btn-dark">
                      {order.status ? order.status : "Pending"}
                    </button>
                  </>
                )}
              </td>
              <td>
                {/* <!-- Button trigger modal --> */}
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() => setSelectedOrder(order)}
                >
                  <i className="fas fa-trash text-dark size"></i>Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
