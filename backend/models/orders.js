module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
      customer_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Customers',
          key: 'id',
        },
      },
      status: {
        type: DataTypes.ENUM('created', 'processing', 'in-production', 'completed'),
      },
      approval_status: DataTypes.BOOLEAN,
    });
  
    Order.associate = function (models) {
      Order.belongsTo(models.Customer, { foreignKey: 'customer_id' });
      Order.belongsToMany(models.Item, { through: 'OrderItems', foreignKey: 'order_id' });
    };
  
    return Order;
  };
  