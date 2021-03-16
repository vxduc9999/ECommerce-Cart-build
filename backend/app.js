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
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "/public")));
app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 4000;

// const Shop = require("./routes/shopRoute");
// const User = require("./routes/userRoute");
// const Cart = require("./routes/cartRoute");

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

//app.use(Shop);
// app.use(User);
// app.use(Cart);

// Product - love-product - user
Products.belongsToMany(userModel, {
  as: "produ``4``444ctLiked",
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

// app.get("/", (req, res) => {
//   userModel.findAll().then((result) => {
//     console.log(result);
//     res.send(result);
//   });
// });

const { Op } = require("sequelize");
const images = require("./models/shop.models").images;
const bcrypt = require("bcryptjs");
const sgMail = require("@sendgrid/mail");
const crypto = require("crypto");
const sequelize = require("sequelize");
// set key sendmail
sgMail.setApiKey(process.env.sendgridAPIKey);

app.get("/", (req, res) => {
  Products.findAll({ limit: 10 })
    .then((products) => res.send(products))
    .catch((err) => console.log(err));
});

app.post("/login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const user = await userModel.findOne({ where: { email: email } });
  if (user) {
    bcrypt.compare(password, user.password, (err, result) => {
      if (result) {
        res.send(user);
      } else {
        res.send(null);
      }
    });
  } else res.send(null);
});

app.post("/register", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const url = req.body.url;
  const emailToken = crypto.randomBytes(64).toString("hex");
  const user = await userModel.findOne({
    where: {
      email: email,
    },
  });
  if (user) {
    return res.status(404).send({ message: "exists user" });
  } else {
    //return res.status(200).send({ message: "success" });
    const msg = {
      to: email, // Change to your recipient
      from: "myshopuwp@gmail.com", // Change to your verified sender
      subject: "Sending with SendGrid is Fun",
      text: `${url}/verify-email/${emailToken}`,
      html: `<p>Please click the link below to verify your account</p>
                            <a href="${url}/verify-email/${emailToken}">
                            Verify your account
                            </a>
                        `,
    };

    transporter.sendMail(msg, function (err, info) {
      if (err) console.log(err);
      else return res.status(200).send({ message: "Send mail success!" });
    });
  }
});

// app.get("/:id", (req, res) => {
//   const user = req.session.user;
//   const id = req.params.id;

//   // chưa có user
//   if (user == null) {
//     Products.findOne({
//       where: {
//         id: {
//           [Op.eq]: id,
//         },
//       },
//       include: [
//         {
//           model: images,
//           limit: 4,
//         },
//         {
//           model: userModel,
//           as: "productByComment",
//           through: {
//             attributes: ["comment", "rate", "created_at"],
//           },
//         },
//       ],
//     })
//       .then((product) => {
//         //res.json(product);
//         res.send(product);
//         // return res.status(200).render("products/productDetail", {
//         //   product,
//         //   moment: moment,
//         // });
//       })
//       .catch((err) => console.log(err));
//   } else {
//     // có user
//     Products.findOne({
//       where: {
//         id: id,
//       },
//       include: [
//         {
//           model: userModel,
//           as: "productLiked",
//           through: {
//             // if not found then return empty array []
//             where: {
//               user_id: user.id,
//             },
//           },
//         },
//         {
//           model: images,
//         },
//         {
//           model: userModel,
//           as: "productByComment",
//           through: {
//             attributes: ["comment", "rate", "created_at"],
//           },
//         },
//       ],
//       order: [[{ model: images }, "id", "ASC"]],
//     })
//       .then((product) => {
//         res.send(product);
//         // return res.status(200).render('products/productDetail', {
//         //     product
//         // });
//       })
//       .catch((err) => console.log(err));
//   }
// });

app.get("/detail/:slug", (req, res) => {
  const user = req.session.user;
  const slug = req.params.slug;

  // chưa có user
  if (user == null) {
    Products.findOne({
      where: {
        product_slug: {
          [Op.eq]: slug,
        },
      },
      include: [
        {
          model: images,
          limit: 4,
        },
        {
          model: userModel,
          as: "productByComment",
          through: {
            attributes: ["comment", "rate", "created_at"],
          },
        },
      ],
    })
      .then((product) => {
        res.send(product);
      })
      .catch((err) => console.log(err));
  } else {
    // có user
    Products.findOne({
      where: {
        product_slug: slug,
      },
      include: [
        {
          model: userModel,
          as: "productLiked",
          through: {
            // if not found then return empty array []
            where: {
              user_id: user.id,
            },
          },
        },
        {
          model: images,
        },
        {
          model: userModel,
          as: "productByComment",
          through: {
            attributes: ["comment", "rate", "created_at"],
          },
        },
      ],
      order: [[{ model: images }, "id", "ASC"]],
    })
      .then((product) => {
        res.send(product);
        // return res.status(200).render('products/productDetail', {
        //     product
        // });
      })
      .catch((err) => console.log(err));
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
