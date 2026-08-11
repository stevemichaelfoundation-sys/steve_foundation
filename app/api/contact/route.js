// import { NextResponse } from "next/server";
// import nodemailer from "nodemailer";

// export async function POST(request) {
//   try {
//     const { firstName, lastName, email, subject, message } = await request.json();

//     // Establishes a direct, un-cached credential link bypassing .env restrictions
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: "steve.michaelfoundation@gmail.com",
//         pass: "kfucuhwqmwiqymfl", // Your newly verified 16-character google app password keys
//       },
//     });

//     const mailOptions = {
//       from: "steve.michaelfoundation@gmail.com",
//       to: "steve.michaelfoundation@gmail.com", 
//       replyTo: email, 
//       subject: `📩 [Website Message] ${subject}`,
//       html: `
//         <div style="font-family: sans-serif; padding: 24px; color: #1f1330; max-width: 600px; border: 1px solid #ece4fa; border-radius: 12px; background-color: #ffffff;">
//           <h2 style="color: #6d28d9; border-bottom: 2px dashed #ece4fa; padding-bottom: 12px; margin-top: 0; font-size: 20px;">New Message from Website</h2>
//           <p style="font-size: 14px; color: #4a415e; margin: 16px 0 8px 0;"><strong>From:</strong> ${firstName} ${lastName} &lt;${email}&gt;</p>
//           <p style="font-size: 14px; color: #4a415e; margin: 0 0 24px 0;"><strong>Subject:</strong> ${subject}</p>
//           <div style="background-color: #fdfbff; padding: 20px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
//             <p style="margin: 0; line-height: 1.6; font-style: italic; color: #1f1330; font-size: 15px;">"${message}"</p>
//           </div>
//           <p style="font-size: 11px; color: #a89bc4; margin-top: 32px; border-top: 1px solid #ece4fa; padding-top: 12px; text-align: center; letter-spacing: 0.05em;">
//             SUBMITTED SECURELY VIA THE STEVE FOUNDATION CONTACT PORTAL
//           </p>
//         </div>
//       `,
//     };

//     await transporter.sendMail(mailOptions);
//     return NextResponse.json({ success: true }, { status: 200 });

//   } catch (error) {
//     console.error("Nodemailer terminal trace exception path handling error:", error);
//     return NextResponse.json({ error: "Failed to route notification email" }, { status: 500 });
//   }
// }
