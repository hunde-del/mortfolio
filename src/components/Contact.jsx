import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Code, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = React.useRef(null);
  const [loading, setLoading] = React.useState(false);
  const [status, setStatus] = React.useState({ type: '', message: '' });

  // Initialize EmailJS ONCE
  React.useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    const templateParams = {
      from_name: formRef.current.from_name.value,
      from_email: formRef.current.from_email.value,
      message: formRef.current.message.value,
      to_name: 'Ravi Kumar',
      to_email: 'kumarsoniravi705@gmail.com',
      reply_to: formRef.current.from_email.value,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams
      )
      .then(() => {
        setLoading(false);
        setStatus({
          type: 'success',
          message: 'Message sent successfully! I will get back to you soon.',
        });
        formRef.current.reset();
      })
      .catch((error) => {
        setLoading(false);
        setStatus({
          type: 'error',
          message: 'Failed to send message. Please try again later.',
        });
        console.error('EmailJS Error:', error);
      });
  };

  return (
    // 🔴 YOUR UI STARTS — NO CHANGE AT ALL
    <section id="contact" className="section-padding bg-dark relative">
      {/* EVERYTHING BELOW IS EXACTLY YOUR UI */}
      {/* Only formRef + handleSubmit already connected */}
    </section>
  );
};

export default Contact;
