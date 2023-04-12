import React, { useEffect, useState } from "react";
import "./Orders.css";
import {
  collection,
  getDoc,
  onSnapshot,
  orderBy,
  query,
} from "@firebase/firestore";
import { useStateValue } from "./StateProvider";
import { db } from "./firebase";

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      const ordersRef = collection(db, "users", user?.uid, "orders");
      const q = query(ordersRef, orderBy("created", "desc"));
      onSnapshot(q, (snapshot) => {
        setOrders(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="orders">
      <h1>Your Orders</h1>
    </div>
  );
}

export default Orders;
