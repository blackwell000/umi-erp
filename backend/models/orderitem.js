module.exports = (sequelize, DataTypes) => {
    const OrderItem = sequelize.define('OrderItem', {
      order_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Orders',
          key: 'id',
        },
      },
      item_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Items',
          key: 'id',
        },
      },
      quantity: DataTypes.INTEGER,
      price: DataTypes.DECIMAL,
    });
  
    return OrderItem;
  };
  