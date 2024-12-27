import emailjs from '@emailjs/browser';

const EMAIL_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
};

export const sendEmail = async ({ name, email, message }) => {
  try {
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
      to_name: 'Mr.Chelyshkin', 
      website: 'mr-chelyshkin.com',
      date: new Date().toLocaleDateString()
    };

    await emailjs.init(EMAIL_CONFIG.PUBLIC_KEY);
    await emailjs.send(
      EMAIL_CONFIG.SERVICE_ID,
      EMAIL_CONFIG.TEMPLATE_ID,
      templateParams
    );

    return { success: true };
  } catch (error) {
    console.error('Email sending failed:', error);
    return { 
      success: false, 
      error: error.message 
    };
  }
};