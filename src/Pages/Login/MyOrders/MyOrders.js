import React, { useEffect, useState } from "react";
import DeleteModal from "../DeleteModal/DeleteModal";
import useAuth from "./../../../Hooks/useAuth";
import "./MyOrders.css";
import OrderTable from "./../OrderTable/OrderTable";

const MyOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState([]);

  useEffect(() => {
    const url = `https://food-zonous.herokuapp.com/orders?email=${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data.queryOrders));
  }, [user.email]);

  return (
    <>
      <div className="container mt-5 pt-5">
        <div className="container mt-3">
          <h1>
            Product Ordered: <span>{orders.length}</span>
          </h1>
          <OrderTable
            selectStatus={false}
            manageOrders={orders}
            setSelectedOrder={setSelectedOrder}
          />
          <DeleteModal
            order={selectedOrder}
            manageOrders={orders}
            selectedOrder={selectedOrder}
            setManageOrders={setOrders}
          />
        </div>
      </div>
    </>
  );
};

export default MyOrders;
