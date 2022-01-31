import { createTransport } from 'nodemailer';

const sendMessage = (name, email, message) => {
 

  let transporter = createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.GMAIL_EMAIL,
      pass: process.env.GMAIL_PW,
    },
  });

  const transporterMessage = {
    from: `${name} has sent you a message >`,
    to: process.env.GMAIL_EMAIL,
    subject: '',
    text: 'Hello please click here to verify',
    html: `<h1>${email}</h1><br><p>${message}</p>`,
  };

  return { message: 'Message sent' };
};
