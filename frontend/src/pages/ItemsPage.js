import React, { useState, useEffect } from 'react';
import axiosInstance from '../axiosInstance';  // Use the axios instance
import './ItemsPage.css';

function ItemsPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axiosInstance.get('/items').then(response => setItems(response.data));  // No need to specify localhost:5000
  }, []);

  return (
    <div className="items-page">
      <h2>Items</h2>
      <table className="items-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.quantity}</td>
              <td>${item.price}</td>
              <td>
                <button className="edit-btn">Edit</button>
                <button className="delete-btn">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="add-item-btn">Add New Item</button>
    </div>
  );
}

export default ItemsPage;
