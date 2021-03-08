const Sequelize = require('sequelize');
const db = require('../config/db');


// products
const products = db.define('products', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    product_name: {
        type: Sequelize.STRING
    },
    product_slug: {
        type: Sequelize.STRING
    },
    product_quantity: {
        type: Sequelize.BIGINT
    },
    product_category_id: {
        type: Sequelize.INTEGER
    },
    product_price: {
        type: Sequelize.BIGINT
    },
    product_sale: {
        type: Sequelize.BIGINT
    },
    product_description: {
        type: Sequelize.STRING
    },
    product_thumbnail: {
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
});

// whislist
const wishlists = db.define('wishlists', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    product_id: {
        type: Sequelize.INTEGER
    },
    user_id: {
        type: Sequelize.INTEGER
    },
}, {
    timestamps: false
});

// images
const images = db.define('images', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    product_id: {
        type: Sequelize.INTEGER
    },
    name: {
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
});

// product_review
const product_reviews = db.define('product_reviews', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: Sequelize.INTEGER
    },
    product_id: {
        type: Sequelize.INTEGER
    },
    comment: {
        type: Sequelize.STRING
    },
    rate: {
        type: Sequelize.INTEGER
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

products.hasMany(images, { foreignKey: 'product_id' })
images.belongsTo(products, { foreignKey: 'product_id' })

module.exports = {
    products,
    wishlists,
    images,
    product_reviews
};