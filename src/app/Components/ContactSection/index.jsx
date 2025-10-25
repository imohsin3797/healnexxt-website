"use client";
import Image from "next/image";
import SectionHeading from "../SectionHeading";
import { useState } from "react";

const ContactSection = ({ data, reverseOrder }) => {
  const panelBg = "#23343B"; // blue/grey
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
  
  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const result = await response.json();
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          phone: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
        console.error('Error:', result.error);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const Shape = () => (
    <div className="cs_contact_bg_shape">
      {/* this is the rectangular panel behind the card */}
      <div
        className="cs_white_bg_shape"
        style={{ backgroundColor: panelBg, borderColor: panelBg }}
      />
      <div className={`cs_iconbox ${data.iconBox.style}`}>
        <div className="cs_iconbox_icon cs_center">
          <Image src={data.iconBox.icon} alt="img" width={62} height={62} />
        </div>
        <div className="cs_iconbox_right">
          <h3 className="cs_iconbox_title">{data.iconBox.title}</h3>
          <p className="cs_iconbox_subtitle mb-0">{data.iconBox.subtitle}</p>
        </div>
      </div>
    </div>
  );

  const Thumb = () => (
    <div className="cs_contact_thumbnail cs_pl-40">
      <div className="cs_contact_img">
        <Image src={data.contactImg} alt="img" width={319} height={497} />
      </div>
      <Shape />
    </div>
  );

  const formFieldStyle = {
    backgroundColor: "#EADFD4",
    border: "1px solid #23343B"
  };

  const ContactForm = () => (
    <form className="cs_contact_form row cs_gap_y_30" onSubmit={handleSubmit}>
      <div className="col-md-6">
        <input 
          type="text" 
          name="name"
          className="cs_form_field" 
          placeholder="Your name" 
          style={formFieldStyle}
          value={formData.name}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="col-md-6">
        <input 
          type="email" 
          name="email"
          className="cs_form_field" 
          placeholder="Your email" 
          style={formFieldStyle}
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="col-md-6">
        <input 
          type="text" 
          name="subject"
          className="cs_form_field" 
          placeholder="Your Subject" 
          style={formFieldStyle}
          value={formData.subject}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="col-md-6">
        <input 
          type="text" 
          name="phone"
          className="cs_form_field" 
          placeholder="Your phone" 
          style={formFieldStyle}
          value={formData.phone}
          onChange={handleInputChange}
        />
      </div>
      <div className="col-lg-12">
        <textarea 
          rows={5} 
          name="message"
          className="cs_form_field" 
          placeholder="Your comments" 
          style={formFieldStyle}
          value={formData.message}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="col-lg-12">
        <button 
          type="submit" 
          className="cs_btn cs_style_1 cs_color_1"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Request'}
        </button>
      </div>
      
      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="col-lg-12">
          <div style={{ 
            backgroundColor: '#d4edda', 
            color: '#155724', 
            padding: '12px', 
            borderRadius: '4px',
            border: '1px solid #c3e6cb',
            marginTop: '10px'
          }}>
            ✅ Thank you! Your message has been sent successfully.
          </div>
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="col-lg-12">
          <div style={{ 
            backgroundColor: '#f8d7da', 
            color: '#721c24', 
            padding: '12px', 
            borderRadius: '4px',
            border: '1px solid #f5c6cb',
            marginTop: '10px'
          }}>
            ❌ Sorry, there was an error sending your message. Please try again.
          </div>
        </div>
      )}
    </form>
  );

  return (
    <div style={{ backgroundColor: "#EADFD4" }}>
      <div className="container">
        <div className="row cs_gap_y_30">
          {reverseOrder ? (
            <>
              <div className="col-lg-6"><Thumb /></div>
              <div className="col-lg-6">
                <SectionHeading
                  SectionSubtitle={data.sectionSubtitle}
                  SectionTitle={data.SectionTitle}
                />
                <div className="cs_height_25 cs_height_lg_25" />
                <ContactForm />
              </div>
            </>
          ) : (
            <>
              <div className="col-lg-6">
                <SectionHeading
                  SectionSubtitle={data.sectionSubtitle}
                  SectionTitle={data.SectionTitle}
                />
                <div className="cs_height_25 cs_height_lg_25" />
                <ContactForm />
              </div>
              <div className="col-lg-6"><Thumb /></div>
            </>
          )}
        </div>
      </div>

      <style jsx>{`
        /* Mobile Responsiveness */
        @media (max-width: 991.98px) {
          .cs_contact_thumbnail {
            margin-top: 2rem;
            text-align: center;
          }
          
          .cs_contact_img img {
            max-width: 100%;
            height: auto;
          }
        }

        @media (max-width: 767.98px) {
          .cs_contact_thumbnail {
            margin-top: 1.5rem;
          }
          
          .cs_contact_img img {
            width: 100%;
            max-width: 300px;
          }
          
          .cs_form_field {
            font-size: 14px;
            padding: 12px 15px;
          }
        }

        @media (max-width: 575.98px) {
          .cs_contact_thumbnail {
            margin-top: 1rem;
          }
          
          .cs_contact_img img {
            width: 100%;
            max-width: 250px;
          }
          
          .cs_form_field {
            font-size: 13px;
            padding: 10px 12px;
          }
          
          .cs_btn.cs_style_1 {
            width: 100%;
            padding: 12px 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactSection;