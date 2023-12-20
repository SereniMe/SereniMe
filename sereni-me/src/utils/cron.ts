// @ts-ignore

const { CronJob } = require("cron");

export const job = new CronJob(
  "0 19 * * *", // cronTime (19:00)
  async () => {
    const profiles = await fetchProfiles();
    const activities = await fetchActivities();
    console.log(profiles, "<<<<<<<<<<<<<< PROFILES");
    // console.log(activities, "<<<<<<<<<<<<<< ACTIVITIES");
    const foundactivity = profiles.map((profile) => {
      const email = profile.email;
      const activity = activities.find((activity) =>
        profile.interests
          .split(",")
          .includes(
            activity.tags[Math.floor(Math.random() * activity.tags.length)]
          )
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

export const job2 = new CronJob(
  "0 07 * * *", // cronTime (07:00)
  async () => {
    const profiles = await fetchProfiles();
    const activities = await fetchActivities();
    console.log(profiles, "<<<<<<<<<<<<<< PROFILES");
    // console.log(activities, "<<<<<<<<<<<<<< ACTIVITIES");
    const foundactivity = profiles.map((profile) => {
      const email = profile.email;
      const activity = activities.find((activity) =>
        profile.interests
          .split(",")
          .includes(
            activity.tags[Math.floor(Math.random() * activity.tags.length)]
          )
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
job2.start();

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

const sendEmail = async (recipients) => {
  try {
    const options = {
      from: "serenime2023@gmail.com",
      subject: "SereniMe Daily Reminder",
      to: "",
      html: "",
    };
    recipients.forEach((userContent) => {
      const id = userContent?.activity?.thumbnail?.split("/");
      options.to = userContent.email;
      if (id) {
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
            position: relative;
          "
        >
          <h1
            style="
              text-shadow: 2px 2px 4px #000000;
              color: #70605b;
              padding: 30px;
              margin: 0;
              position: absolute;
            "
          >
            SereniMe's <br />Activity Recommendation
          </h1>
    
          <a
            href="http://localhost:3000"
            style="text-decoration: none; display: block"
          >
            <img
              src="https://www.calm.com/_next/image?url=%2F_n%2Fimages%2Fhomepage%2Fjasper-lake-hero-banner.webp&w=1920&q=75"
              alt="Mountain Lake View"
              style="max-width: 100%; height: auto"
            />
          </a>
        </div>
    
        <div style="display: block; text-align: center">
          <h1>Hey ${userContent.email}!</h1>
          <p>
            Try "${userContent.activity?.name}" today and tell us how you feel (•ᴗ•)
          </p>
    
          <img
            src="https://drive.google.com/uc?export=view&id=${id[5]}"
            alt=""
            style="max-width: 50vw; height: auto"
          />
    
          <br /><br />
    
          <h3>"${userContent.activity?.name}"</h3>
    
          <h3>${userContent.activity?.content}</h3>
            
          </p>
        </div>
      </body>
        `;
      }

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
