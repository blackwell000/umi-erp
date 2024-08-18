import React, { useState } from 'react';
import axiosInstance from '../axiosInstance';
import axios from 'axios';
import './AddItemPage.css';

function AddItemPage() {
  const [item, setItem] = useState({
    name: '',
    description: '',
    height: '',
    width: '',
    length: '',
    price: '',
    quantity: '',
  });

  const handleChange = e => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axiosInstance.post('/items', item).then(() => {
      alert('Item added successfully');
    });
  };

  return (
    <div className="add-item-page">
      <h2>Add New Item</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} />
        <input name="description" placeholder="Description" onChange={handleChange} />
        <input name="height" placeholder="Height" onChange={handleChange} />
        <input name="width" placeholder="Width" onChange={handleChange} />
        <input name="length" placeholder="Length" onChange={handleChange} />
        <input name="price" placeholder="Price" onChange={handleChange} />
        <input name="quantity" placeholder="Quantity" onChange={handleChange} />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default AddItemPage;
