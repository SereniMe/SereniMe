// import nodemailer from "nodemailer";

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "serenime2023@gmail.com",
//     pass: process.env.NODEMAILER_PASS || "disf pbtj ulhk fpbh",
//   },
// });

// export const sendEmail = async (/*recipients: string[]*/) => {
//   try {
//     const options = {
//       from: "serenime2023@gmail.com",
//       subject: "Daily Reminder",
//       text: "DAILY REMINDER EXAMPLE",
//       to: /*recipients.join(",")*/ "alifd36@gmail.com",
//       html: (
//         <>
//           <h1 className="bg-rose-400">TEST</h1>
//         </>
//       ),
//     };
//     transporter.sendMail(options, (error: Error | null, info) => {
//       if (error) {
//         console.log(error);
//         return;
//       }
//       console.log("Sent: " + info.response);
//     });
//   } catch (error) {
//     console.log(error);
//     // next(error);
//   }
// };
