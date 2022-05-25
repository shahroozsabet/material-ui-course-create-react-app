const functions = require("firebase-functions");
const config = functions.config();
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

const transporter = nodemailer.createTransport({
  service: "gmail", auth: {
    user: config.user.email, pass: config.user.password,
  },
});

const mailOptions = {
  from: "Shahrooz Development",
  to: "shahrooz.sabet@gmail.com",
  subject: "Testing nodemailer",
  text: "Test successful",
};

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.sendMail = functions.https.onRequest((request, response) => {
  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      response.send(error);
    } else {
      response.send("Message send successfully");
    }
  });
});
