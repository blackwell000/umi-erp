import React, { useState, useEffect } from 'react';
import axios from 'axios';

function OrdersPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('/orders').then(response => setOrders(response.data));
  }, []);

  return (
    <div>
      <h1>Orders</h1>
      <ul>
        {orders.map(order => (
          <li key={order.id}>
            Order #{order.id} - Status: {order.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrdersPage;
