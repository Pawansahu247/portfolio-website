import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    message: ''
  });
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState(''); // Can be 'success', 'error', or empty

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsFormSubmitting(true);
    setFormStatus('');

    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000)); 
      console.log('Form data submitted:', formData);
      setFormStatus('success');
      setFormData({ fullname: '', email: '', message: '' }); 
    } catch (error) {
      console.error('Form submission failed:', error);
      setFormStatus('error');
    } finally {
      setIsFormSubmitting(false);
    }
  };

  return (
    <article className="contact active" data-page="contact">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      {/* Map Section */}
      <section className="mapbox">
        <figure>
          {/* Replace this iframe with your own Google Maps embed code, Mapbox, or another service */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117075.7656209562!2d85.25301828859942!3d23.345227891783084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e1957291a131%3A0xc3f191f6920d30c5!2sRanchi%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1691655110595!5m2!1sen!2sin"
            width="400"
            height="300"
            loading="lazy"
            title="Google Map of Ranchi, India"
            style={{ border: 0 }} // Inline style for border removal
            allowFullScreen // Allow fullscreen for better user experience
          ></iframe>
        </figure>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>
        <form onSubmit={handleSubmit} className="form" data-form>
          <div className="input-wrapper">
            <input
              type="text"
              name="fullname"
              className="form-input"
              placeholder="Full name"
              value={formData.fullname}
              onChange={handleInputChange}
              required
              aria-label="Full name" // Added for accessibility
            />
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email address"
              value={formData.email}
              onChange={handleInputChange}
              required
              aria-label="Email address" // Added for accessibility
            />
          </div>
          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleInputChange}
            required
            aria-label="Your Message" // Added for accessibility
          ></textarea>
          
          <button 
            className="form-btn" 
            type="submit" 
            disabled={isFormSubmitting} // Disable button during submission
          >
            <ion-icon name="paper-plane"></ion-icon>
            <span>{isFormSubmitting ? 'Sending...' : 'Send Message'}</span>
          </button>
        </form>
        
        {/* Form Status Messages */}
        {formStatus === 'success' && (
          <p className="form-status-message success">Thank you! Your message has been sent successfully. 🎉</p>
        )}
        {formStatus === 'error' && (
          <p className="form-status-message error">Sorry, something went wrong. Please try again later. 😟</p>
        )}
      </section>
    </article>
  );
};

export default ContactPage;
