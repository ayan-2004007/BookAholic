import nodemailer from 'nodemailer';
import ApiErrors from './ApiErrors.js';
import ApiResponse from './ApiResponse.js';

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.SERVICE_MAIL,
        pass: process.env.APP_PASSWORD,
    },
});

const sendSignupmail = async (mail, username,fullname, password) => {
    try {
        const mailOptions = {
            from: {
                name: "Bookaholic Team",
                address: process.env.SERVICE_MAIL
            },
            to: mail,
            subject: 'Confirmation of Successful Registration',
            html: `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <style>
                    body {
                        color:white;
                        font-family: Tahoma, sans-serif;
                        background-color: #000000;
                        margin: 0;
                        padding: 20px;
                    }
                    .container {
                        max-width: 600px;
                        margin: 0 auto;
                        background-color: #000000;
                        padding: 20px;
                        border-radius: 8px;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    }
                    .container img {
                        width: 100%;
                        height: auto;
                        object-fit: cover;
                    }
                    h1 {
                        color: white;
                        text-align: center;
                    }
                    p {
                        color:white;
                        margin-bottom: 20px;
                        line-height: 1.6;
                    }
                    .footer {
                        margin-top: 20px;
                        text-align: center;
                        color: #666;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <img src="https://img.freepik.com/free-vector/library-flat-color-background-with-people-reading-books-table-searching-literature-bookshelves-vector-illustration_1284-73130.jpg?t=st=1722601523~exp=1722605123~hmac=06071168a6716a33174cec8c4450b73948b7c286636fa22db776dbf5bd8564bf&w=1380" alt="Bookaholic Image">
                    <h1>WELCOME TO BOOKAHOLIC!</h1>
                    <hr>
                    <p>Dear ${fullname},</p>
                    <p>Thank you for registering with Bookaholic. Your registration was successful!</p>
                    <p>Your username is: <strong>${username}</strong></p>
                    <p>Your password is: <strong>${password}</strong></p>
                    <hr>
                    <p>We look forward to serving you with our wide collection of books and resources.</p>
                    <p>If you have any questions or need assistance, feel free to contact us.</p>
                    <p>Best regards,<br>The Bookaholic Team</p>
                </div>
                <div class="footer">
                    <p>This is an automated message. Please do not reply to this email.</p>
                </div>
            </body>
            </html>
            `
        };
        const response = await transporter.sendMail(mailOptions);
        // console.log('Email sent:', response);
        return new ApiResponse(201, response, "Signup mail sent successfully");
    } catch (error) {
        // console.error('Error sending email:', error);
        return new ApiErrors(409, "Error occurred while sending registration email!");
    }
};

export default sendSignupmail;
