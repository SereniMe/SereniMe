// import { CronJob } from "cron";
const { CronJob } = require("cron");

const job = new CronJob(
  "* * * * *", // cronTime
  () => {
    console.log("You will see this message every second");
  }, // onTick
  null, // onComplete
  false, // start
  "Asia/Jakarta" // timeZone for Indonesia
);
// job.start() is optional here because of the fourth parameter set to true.

job.start();
