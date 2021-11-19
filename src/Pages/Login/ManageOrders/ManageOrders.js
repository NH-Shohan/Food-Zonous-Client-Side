import React, { useEffect, useState } from "react";
import DeleteModal from "../DeleteModal/DeleteModal";
import OrderTable from "../OrderTable/OrderTable";
import useAuth from "./../../../Hooks/useAuth";

const ManageOrders = () => {
  const { user } = useAuth();
  const [manageOrders, setManageOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState([]);

  useEffect(() => {
    const url = `https://food-zonous.herokuapp.com/orders`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setManageOrders(data.orders));
  }, [user.email]);

  // status
  const handleChange = (e, id) => {
    const status = { status: e.target.value };

    fetch(`https://food-zonous.herokuapp.com/addStatus/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(status),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Status Changed Successfully!!!");
      });
  };

  return (
    <>
      <div className="container mt-5 pt-5">
        <div className="container mt-3">
          <h1>
            Product Ordered: <span>{manageOrders.length}</span>
          </h1>
          <OrderTable
            selectStatus={true}
            handleChange={handleChange}
            manageOrders={manageOrders}
            setSelectedOrder={setSelectedOrder}
          />
          <DeleteModal
            order={selectedOrder}
            manageOrders={manageOrders}
            selectedOrder={selectedOrder}
            setManageOrders={setManageOrders}
          />
        </div>
      </div>
    </>
  );
};

export default ManageOrders;
