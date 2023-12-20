// @ts-ignore

// const { ProfileModel } = require("@/db/models/profiles");
// const { ActivityModel } = require("@/db/models/activities");

// import { CronJob } from "cron";
const { CronJob } = require("cron");

// type ProfileModel = {
//   email: string;
//   fullName: string;
//   address: string;
//   phone: string;
//   interests: string;
//   favorites: string[];
// };

// type ActiviyModel = {
//   name: string;
//   content: string;
//   tags: string[];
//   thumbnail: string;
// };

const job = new CronJob(
  "* * * * * *", // cronTime (07:00) everyday
  async () => {
    const profiles = await fetchProfiles();
    const activities = await fetchActivities();
    console.log(profiles, "<<<<<<<<<<<<<< PROFILES");
    // console.log(activities, "<<<<<<<<<<<<<< ACTIVITIES");
    const foundactivity = profiles.map((profile) => {
      const email = profile.email;
      const activity = activities.find((activity) =>
        profile.interests.split(",").includes(activity.tags[0])
      );
      return { email, activity };
    });
    console.log(foundactivity, "<<<<<<<<<< ");

    // console.log("Sending email to: recipient@gmail.com");
    await sendEmail(foundactivity);
  }, // onTick
  null, // onComplete
  false, // start
  "Asia/Jakarta"
);

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

const fetchProfiles = async () => {
  const response = await fetch(`http://localhost:3000/api/profiles`);
  const responsejson = await response.json();
  return responsejson.data;
};

const fetchActivities = async () => {
  const response = await fetch(`http://localhost:3000/api/activities`);
  const responsejson = await response.json();
  return responsejson.data;
};

// type ProfileWithContent = {
//   email: string;
//   activity: ActivityModel;
// };

const sendEmail = async (recipients) => {
  try {
    const options = {
      from: "serenime2023@gmail.com",
      subject: "SereniMe Daily Reminder",
      to: "",
      html: "",
    };
    recipients.forEach((userContent) => {
      options.to = userContent.email;
      options.html = `
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
        display: flex;
        justify-content: center;
      "
    >
      <h1
        style="
          /* background-color: #7b746b; */
          /* width: 85%; */
          text-shadow: 2px 2px 4px #000000;
          color: #f4b81f;
          padding: 30px;
          margin: 0;
          position: absolute;
          /* box-shadow: #f0f0f0 10px; */
        "
      >
        SereniMe's <br />Activity Recommendation
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
    <div style="display: flex; flex-direction: column; align-items: center">
      <h1>Hey ${userContent.email}!</h1>
      <p>Try "Activity Name" today and tell us how you feel (•ᴗ•)</p>
      <img
        src="https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2021/06/29044522/Yoga.jpg.webp"
        alt=""
        style="max-width: 50vw; height: auto"
      />
      <br /><br />
      <h3>"Activity Name"</h3>
      <p style="padding-left: 20px; max-width: 50vw">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
        eaque porro aut ex quasi consectetur laudantium error laboriosam
        similique, facilis ipsam non accusamus dolor dolorum, nostrum distinctio
        vel, dignissimos eum?
      </p>
    </div>
  </body>
        `;
      transporter.sendMail(options, (error, info) => {
        if (error) {
          console.log(error);
          return;
        }
        console.log("Sent: " + userContent.email);
      });
    });
  } catch (error) {
    console.log(error);
    // next(error);
  }
};
