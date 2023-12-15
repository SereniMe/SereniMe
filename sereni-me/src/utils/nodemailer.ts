const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "serenime2023@gmail.com",
    pass: process.env.NODEMAILER_PASS,
  },
});

module.exports = transporter;
