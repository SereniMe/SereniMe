// import { CronJob } from "cron";
const { CronJob } = require("cron");

const job = new CronJob(
  "* * * * *", // cronTime (07:00) everyday
  async () => {
    // console.log("You will see this message every second");
    console.log("Sending email to: recipient@gmail.com");
    await sendEmail();
  }, // onTick
  null, // onComplete
  false, // start
  "Asia/Jakarta" // timeZone for Indonesia
);
// job.start() is optional here because of the fourth parameter set to true.

job.start();

// import nodemailer from "nodemailer";
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "serenime2023@gmail.com",
    pass: process.env.NODEMAILER_PASS || "disf pbtj ulhk fpbh",
  },
});

const sendEmail = async (/*recipients: string[]*/) => {
  try {
    const options = {
      from: "serenime2023@gmail.com",
      subject: "Daily Reminder",
      // text: "DAILY REMINDER EXAMPLE",
      to: /*recipients.join(",")*/ "alifd36@gmail.com,christianjehoshaphat@gmail.com,rdwikaharris@gmail.com,project.fionadarasanti@gmail.com",
      html: `
      <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Email Notification</title>
    </head>
    <body
      style="
        font-family: 'Arial', sans-serif;
        background-color: #f0f0f0;
        text-align: center;
        padding: 20px;
      "
    >
      <div
        style="
          max-width: 600px;
          margin: 0 auto;
          background-color: #ffffff;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        "
      >
        <h1
          style="
            background-color: #7b746b;
            color: #f4b81f;
            padding: 20px;
            margin: 0;
          "
        >
          SereniMe
        </h1>
        <a
          href="http://localhost:3000"
          style="display: block; text-decoration: none"
        >
          <img
            src="https://www.calm.com/_next/image?url=%2F_n%2Fimages%2Fhomepage%2Fjasper-lake-hero-banner.webp&w=1920&q=75"
            alt="Mountain Lake View"
            style="max-width: 100%; height: auto"
          />
        </a>
      </div>
    </body>
        `,
    };
    transporter.sendMail(options, (error, info) => {
      if (error) {
        console.log(error);
        return;
      }
      console.log("Sent: " + info.response);
    });
  } catch (error) {
    console.log(error);
    // next(error);
  }
};
