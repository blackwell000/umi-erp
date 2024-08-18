import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ItemsPage from './pages/ItemsPage';
import AddItemPage from './pages/AddItemPage';
import OrdersPage from './pages/OrdersPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/items/add" element={<AddItemPage />} />
        <Route path="/items" element={<ItemsPage />} />
        <Route path="/orders" element={<OrdersPage />} />
      </Routes>
    </Router>
  );
}

export default App;
