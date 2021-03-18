const sequelize = require("sequelize");
const bcrypt = require("bcryptjs");
const Order = require("../models/order.models").orders;
const User = require("../models/user.models").users;
const Payment = require("../models/user.models").payment;
const Status = require("../models/user.models").status_order;
const Order_detail = require("../models/order.models").order_detail;
const Product = require("../models/shop.models").products;
const Wishlist = require("../models/shop.models").wishlists;
const sgMail = require("@sendgrid/mail");
const crypto = require("crypto");
const { Op } = require("sequelize");

// set key sendmail
sgMail.setApiKey(process.env.sendgridAPIKey);

// get signin
exports.getSignin = (req, res, next) => {
  res.status(200).render("auth/signIn", {
    isAuthenticated: false,
  });
};

exports.postSignin = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const user = await User.findOne({ where: { email: email } });
  if (user) {
    bcrypt.compare(password, user.password, (err, result) => {
      if (result) {
        req.session.isLoggedIn = true;
        req.session.user = user;
        return req.session.save(async (err) => {
          if ((await req.session.currentPage) === "cart") {
            delete req.session.currentPage;
            res.redirect("/cart");
          } else if ((await req.session.currentPage) === "orderList") {
            delete req.session.currentPage;
            res.redirect("/user/order-list");
          } else if ((await req.session.currentPage) === "loveproduct") {
            delete req.session.currentPage;
            const product = await Product.findOne({
              where: { id: await req.session.product_id },
            });
            res.redirect("/detail/" + product.product_slug);
          } else if ((await req.session.currentPage) === "wistlist") {
            delete req.session.currentPage;
            res.redirect("/user/wishlist");
          }
          res.redirect("/");
        });
      } else {
        console.log("Your password not mached.");
      }
    });
  }
};

// get signup
exports.getSignup = (req, res, next) => {
  res.status(200).render("auth/signUp", {
    isAuthenticated: false,
  });
};

// post signup with send mail verify
exports.postSignup = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const comfirmPassword = req.body.confirmPassword;
  const emailToken = crypto.randomBytes(64).toString("hex");
  if (email.trim() !== "") {
    User.findOne({
      where: {
        email: email,
      },
    })
      .then((user) => {
        if (user) return res.status(404).send({ error: "exists user" });
        else if (
          password.trim() === "" ||
          comfirmPassword.trim() === "" ||
          password !== comfirmPassword
        )
          return res.status(404).send({ error: "incorrect password" });
        else {
          const msg = {
            to: email, // Change to your recipient
            from: "ducga079099@gmail.com", // Change to your verified sender
            subject: "Sending with SendGrid is Fun",
            text: `http://${req.headers.host}/verify-email?token=${emailToken}`,
            html: `<p>Please click the link below to verify your account</p>
                            <a href="http://${req.headers.host}/verify-email?token=${emailToken}">
                            Verify your account
                            </a>
                        `,
          };
          User.count().then((c) => {
            User.create({
              email: email,
              password: bcrypt.hashSync(password, 12),
              status: emailToken,
            });

            sgMail
              .send(msg)
              .then(() => {
                console.log("Email sent");
                return res.status(200).redirect("/");
              })
              .catch((error) => {
                console.error(error);
              });
          });
        }
      })
      .catch((err) => console.log(err));
  } else {
    return res.status(404).send({ error: "invalid email" });
  }
};

// verify email
exports.getVerifyEmail = async (req, res, next) => {
  const user = await User.findOne({ where: { status: req.query.token } });
  user.status = null;
  await user.save();
  res.redirect("/signin");
};

// logout
exports.postLogout = (req, res, next) => {
  req.session.destroy((err) => {
    console.log(err);
    res.redirect("/");
  });
};

// forgot password
exports.getForgotPassword = (req, res, next) => {
  res.status(200).render("auth/forgotPass");
};

function makeid(length) {
  var result = "";
  var characters = "0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

exports.postForgotPassword = async (req, res, next) => {
  const email = req.body.email;
  const user = await User.findOne({ where: { email: email } });
  if (!user)
    // not valid email
    res.redirect("/forgot-password");
  else {
    const code = makeid(6);
    req.session.code = code;
    req.session.email = email;
    const msg = {
      to: email, // Change to your recipient
      from: "ducga079099@gmail.com", // Change to your verified sender
      subject: "Sending with SendGrid is Fun",
      text: `passcode`,
      html: `<p>Code:${code}</p>`,
    };
    sgMail
      .send(msg)
      .then(() => {
        console.log("Email sent");
        return res.status(200).redirect("/import-code");
      })
      .catch((error) => {
        console.error(error);
      });
  }
};

// import code
exports.getImportCode = (req, res, next) => {
  res.status(200).render("auth/enterCode");
};

exports.postImportCode = (req, res, next) => {
  const code = req.body.code;
  if (code === req.session.code) {
    res.status(200).redirect("/changepassword");
  } else res.redirect("/import-code");
};

// change password
exports.getChangePassword = (req, res, next) => {
  res.status(200).render("auth/resetPassword");
};

exports.postChangePassword = async (req, res, next) => {
  const password = req.body.password;
  const comfirmPassword = req.body.comfirmPassword;
  if (
    password.trim() !== "" &&
    comfirmPassword.trim() !== "" &&
    password === comfirmPassword
  ) {
    const user = await User.findOne({ where: { email: req.session.email } });
    user.password = bcrypt.hashSync(password, 12);
    await user.save();
    delete req.session.email;
    delete req.session.code;
    return res.status(200).redirect("/");
  }
};

exports.orderList = async (req, res, next) => {
  const user = req.session.user;
  if (user == null) {
    req.session.currentPage = "orderList";
    return res.redirect("/signin");
  }
  await Order.findAll({
    where: {
      user_id: user.id,
      status: {
        [Op.not]: null,
      },
    },
    include: [
      {
        model: Payment,
        as: "payment",
      },
      {
        model: Status,
        as: "status_order",
      },
      {
        model: Order_detail,
        as: "details",
        include: [
          {
            model: Product,
          },
        ],
      },
    ],
  })
    .then((result) => {
      res.status(200).render("auth/listpurchase", {
        orders: result,
      });
    })
    .catch((err) => console.log(err));
};

exports.postLoveProduct = async (req, res, next) => {
  const user = req.session.user;
  const product_id = req.body.product_id;
  const val = req.body.val;
  let result = "";
  var response = {
    status: 200,
    success: "Updated Successfully",
    header: req.headers.host,
    result: result,
  };
  if (user == null) {
    req.session.currentPage = "loveproduct";
    req.session.product_id = product_id;
    return res.end(JSON.stringify(response));
  }

  if (val == 1) {
    Wishlist.create({
      product_id: product_id,
      user_id: user.id,
    })
      .then((test) => {
        response.result = "1";
        return res.end(JSON.stringify(response));
      })
      .catch((err) => console.log(err));
  } else {
    Wishlist.destroy({
      where: {
        product_id: product_id,
        user_id: user.id,
      },
    })
      .then((test) => {
        response.result = "2";
        return res.end(JSON.stringify(response));
      })
      .catch((err) => console.log(err));
  }
};

exports.getWistlist = async (req, res, next) => {
  const user = req.session.user;
  if (user == null) {
    req.session.currentPage = "wistlist";
    return res.redirect("/signin");
  }
  User.findAll({
    where: {
      id: user.id,
    },
    attributes: [],
    include: [
      {
        model: Product,
        as: "userProduct",
      },
    ],
    order: [
      [sequelize.literal('"userProduct->wishlists"."product_id"'), "ASC"],
    ],
  })
    .then((wistlist) => {
      return res.status(200).render("products/wishlists", {
        wistlist,
      });
    })
    .catch((err) => console.log(err));
};

exports.postDelWish = (req, res, next) => {
  const wish_id = req.body.wish_id;
  Wishlist.destroy({
    where: {
      id: wish_id,
    },
  })
    .then((wistlist) => {
      //res.json(wistlist);
      var response = {
        status: 200,
        success: "Del Successfully",
      };
      res.end(JSON.stringify(response));
    })
    .catch((err) => console.log(err));
};
