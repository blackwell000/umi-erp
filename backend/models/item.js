module.exports = (sequelize, DataTypes) => {
    const Item = sequelize.define('Item', {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      height: DataTypes.DECIMAL,
      width: DataTypes.DECIMAL,
      length: DataTypes.DECIMAL,
      price: DataTypes.DECIMAL,
      quantity: DataTypes.INTEGER, // New column for tracking inventory quantity
    });
  
    return Item;
  };
  