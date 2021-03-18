const Sequelize = require('sequelize');
const db = require('../config/db');
const product = require('./shop.models').products;


const orders = db.define('orders', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    order_number: {
        type: Sequelize.INTEGER
    },
    user_id: {
        type: Sequelize.INTEGER
    },
    total: {
        type: Sequelize.BIGINT
    },
    payment_method: {
        type: Sequelize.INTEGER
    },
    status: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    fullname: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    phone: {
        type: Sequelize.STRING
    },
    address: {
        type: Sequelize.STRING
    },
    createdAt: {
        type: Sequelize.DATE,
        field: 'created_at'
    },
    updatedAt: {
        type: Sequelize.DATE,
        field: 'updated_at'
    }
}, {
    timestamps: false
})

// order_detail
const order_detail = db.define('order_details', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    product_id: {
        type: Sequelize.INTEGER
    },
    order_id: {
        type: Sequelize.INTEGER
    },
    price: {
        type: Sequelize.BIGINT
    },
    quantity: {
        type: Sequelize.BIGINT
    },
    total: {
        type: Sequelize.BIGINT
    },
    createdAt: {
        type: Sequelize.DATE,
        field: 'created_at'
    },
    updatedAt: {
        type: Sequelize.DATE,
        field: 'updated_at'
    }
}, {
    timestamps: false
});

// 1 orders has many order_detail
orders.hasMany(order_detail, { as: 'details', foreignKey: 'order_id' });
order_detail.belongsTo(orders, { foreignKey: 'order_id' });

// 1 product belongto 1 order_detail
product.hasOne(order_detail, { foreignKey: 'product_id' });
order_detail.belongsTo(product, { foreignKey: 'product_id' });


module.exports = {
    orders,
    order_detail
}