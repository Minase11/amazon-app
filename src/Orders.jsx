import React, { useEffect, useState } from "react";
import { useStateValue } from "./StateProvider";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./firebase";
import Order from "./Order";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    if (user) {
      onSnapshot(collection(db, "users", user?.uid, "orders"), (snapshot) => {
        setOrders(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
    } else {
      setOrders([]);
    }
  }, [user]);
  return (
    <div className="orders">
      <h2>Your Orders</h2>
      <div className="orders_order">
        {orders.map((order, index) => (
          <Order order={order} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Orders;
