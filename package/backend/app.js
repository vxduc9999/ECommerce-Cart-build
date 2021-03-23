const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const userModel = require("./models/user.models").users;
const Products = require("./models/shop.models").products;
const wishlists = require("./models/shop.models").wishlists;
const product_reviews = require("./models/shop.models").product_reviews;
require("dotenv").config();
const cors = require("cors");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "/public")));
//app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const port = process.env.PORT || 4000;

const Shop = require("./routes/shopRoute");
const User = require("./routes/userRoute");
const Cart = require("./routes/cartRoute");

// setting session
app.use(
  session({
    secret: "mySecretKey",
    resave: true,
    saveUninitialized: false,
  })
);

app.use((req, res, next) => {
  if (!req.session.user) {
    return next();
  }
  userModel
    .findByPk(req.session.user._id)
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => console.log(err));
});

app.use(Shop);
app.use(User);
app.use(Cart);

// Product - love-product - user
Products.belongsToMany(userModel, {
  as: "productLiked",
  through: wishlists,
  foreignKey: "product_id",
});

userModel.belongsToMany(Products, {
  as: "userProduct",
  through: wishlists,
  foreignKey: "user_id",
});

// Product - comment-product - user
Products.belongsToMany(userModel, {
  as: "productByComment",
  through: product_reviews,
  foreignKey: "product_id",
});

userModel.belongsToMany(Products, {
  as: "userComment",
  through: product_reviews,
  foreignKey: "user_id",
});

product_reviews.belongsTo(userModel, { foreignKey: "user_id" });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
