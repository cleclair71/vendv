// Import the required modules from Sequelize library
const { Model, DataTypes } = require('sequelize');

// Import database connection settings from the config.js file
const sequelize = require('../config/connection');

// Create a new Product model by extending the Sequelize Model class
class Product extends Model {}

// Define the fields and rules for the Product model
Product.init(
  {
    // Define the id column
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // Define the product_name column
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Define the price column
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        isDecimal: true,
      },
    },
    // Define the stock column
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isNumeric: true,
      },
    },
    // Define the category_id column and set up a reference to the category table
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id',
      },
    },
  },
  // Define the model options
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

// Export the Product model
module.exports = Product;