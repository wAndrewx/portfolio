import { send } from '@emailjs/browser';
export const sendEmail = async (name, email, message) => {
  const templateParams = { name, email, message };
  const isMissingParams = Object.keys(templateParams).includes(key => {
    return !!templateParams[key];
  });
  if (isMissingParams) {
    return "Please";
  }
  try {
    const emailjs = await send(
      process.env.EMAIL_ID,
      process.env.TEMPLATE_ID,
      templateParams
    );
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
