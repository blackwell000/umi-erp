const express = require('express');
const router = express.Router();
const { Item } = require('../models');

router.get('/', async (req, res) => {
  const items = await Item.findAll();
  res.json(items);
});

router.post('/', async (req, res) => {
  const item = await Item.create(req.body);
  res.json(item);
});

router.put('/:id', async (req, res) => {
  await Item.update(req.body, { where: { id: req.params.id } });
  const updatedItem = await Item.findByPk(req.params.id);
  res.json(updatedItem);
});

router.delete('/:id', async (req, res) => {
  await Item.destroy({ where: { id: req.params.id } });
  res.json({ message: 'Item deleted' });
});

module.exports = router;
