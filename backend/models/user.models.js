const Sequelize = require('sequelize');
const order = require('./order.models').orders;
const db = require('../config/db');

const users = db.define('users', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: true
    },
    status: {
        type: Sequelize.STRING,
        allowNull: true
    },
    avatar: {
        type: Sequelize.STRING,
        allowNull: true
    },
    address: {
        type: Sequelize.STRING,
        allowNull: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
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

const payment = db.define('payments', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    method: {
        type: Sequelize.STRING
    }
}, {
    timestamps: false
})

const status_order = db.define('status_orders', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING
    }
}, {
    timestamps: false
})


users.hasMany(order, { foreignKey: 'user_id' });
order.belongsTo(users, { foreignKey: 'user_id' });

payment.hasOne(order, { as: 'payment', foreignKey: 'payment_method' });
order.belongsTo(payment, { foreignKey: 'payment_method' });

status_order.hasOne(order, { as: 'status_order', foreignKey: 'status' });
order.belongsTo(status_order, { foreignKey: 'status' });

module.exports = {
    users,
    payment,
    status_order
}