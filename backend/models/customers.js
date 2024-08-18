module.exports = (sequelize, DataTypes) => {
    const Customer = sequelize.define('Customer', {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      company_name: DataTypes.STRING,
    });
  
    return Customer;
  };
  