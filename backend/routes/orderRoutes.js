const express = require('express');
const router = express.Router();
const { Order, OrderItem, Item } = require('../models');

router.get('/', async (req, res) => {
  const orders = await Order.findAll({ include: [Item] });
  res.json(orders);
});

router.post('/', async (req, res) => {
  const order = await Order.create(req.body, {
    include: [OrderItem],
  });
  res.json(order);
});

router.put('/:id', async (req, res) => {
  await Order.update(req.body, { where: { id: req.params.id } });
  const updatedOrder = await Order.findByPk(req.params.id);
  res.json(updatedOrder);
});

router.delete('/:id', async (req, res) => {
  await Order.destroy({ where: { id: req.params.id } });
  res.json({ message: 'Order deleted' });
});

module.exports = router;
