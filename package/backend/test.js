const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  port: 465, // true for 465, false for other ports
  host: "smtp.gmail.com",
  auth: {
    user: "ducga079099@gmail.com",
    pass: "Ducga0388554199",
  },
  secure: true,
});

const mailData = {
  from: "ducga079099@gmail.com", // sender address
  to: "ducga079099@gmail.com", // list of receivers
  subject: "Sending Email using Node.js",
  text: "That was easy!",
  html: `<b>Hey there! </b>
         <br> This is our first message sent with Nodemailer<br/>`,
};

transporter.sendMail(mailData, function (err, info) {
  if (err) console.log(err);
  else console.log(info);
});
