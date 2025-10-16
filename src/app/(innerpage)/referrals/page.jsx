'use client';

import React, { useState, useEffect, useRef } from 'react';
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';

const ReferralsPage = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayStep, setDisplayStep] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setCurrentStep(1);
    setDisplayStep(1);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    // Start exit animation
    setTimeout(() => {
      setCurrentStep(prev => prev + 1);
      setDisplayStep(prev => prev + 1);
      
      // Start enter animation after a brief delay
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 300); // Half of the transition duration
  };

  const handleBack = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    // Start exit animation
    setTimeout(() => {
      if (currentStep === 1) {
        setSelectedOption(null);
        setCurrentStep(0);
        setDisplayStep(0);
      } else {
        setCurrentStep(prev => prev - 1);
        setDisplayStep(prev => prev - 1);
      }
      
      // Start enter animation after a brief delay
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 300); // Half of the transition duration
  };

  const headingData = {
    title: 'Referrals',
    color: '#23343B'
  };

  return (
    <div className='referrals-page-area' style={{backgroundColor: '#EADFD4', minHeight: '100vh'}}>
      {/* Page Heading */}
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/page_heading_bg.jpg"
      >
        <PageHeading data={headingData} />
      </Section>

      {/* Main Referrals Section */}
      <Section
        topSpaceLg="70"
        topSpaceMd="35"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className={'cs_referrals cs_style_1 position-relative'}
      >
        <div className="container" ref={sectionRef}>
          {currentStep === 0 && (
            <div className={`referrals-options ${isInView ? 'animate-in' : ''}`}>
              <div className="row justify-content-center">
                <div className="col-lg-8 text-center">
                  <h2 className="referrals-title">Choose Your Referral Method</h2>
                  <p className="referrals-subtitle">
                    Select how you'd like to submit your referral information
                  </p>
                </div>
              </div>
              
              <div className="row cs_gap_y_30 justify-content-center">
                <div className="col-lg-5 col-md-6">
                  <div 
                    className="referral-option-card"
                    onClick={() => handleOptionSelect('upload')}
                  >
                    <div className="option-icon">
                      <i className="fas fa-upload"></i>
                    </div>
                    <h3>Quick Upload</h3>
                    <p>Face/Cover Sheet/Demo</p>
                    <div className="option-description">
                      Upload your documents quickly and easily
                    </div>
                  </div>
                </div>
                
                <div className="col-lg-5 col-md-6">
                  <div 
                    className="referral-option-card"
                    onClick={() => handleOptionSelect('form')}
                  >
                    <div className="option-icon">
                      <i className="fas fa-file-alt"></i>
                    </div>
                    <h3>Fill out Referral Form</h3>
                    <p>Complete detailed information</p>
                    <div className="option-description">
                      Fill out our comprehensive referral form step by step
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentStep > 0 && selectedOption === 'form' && (
            <div className={`referral-form-container ${isInView ? 'animate-in' : ''}`}>
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="form-header">
                    <h2>Referral Form</h2>
                    <div className="progress-indicator">
                      <div className="progress-bar">
                        <div 
                          className="progress-fill" 
                          style={{width: `${(currentStep / 7) * 100}%`}}
                        ></div>
                      </div>
                      <span className="progress-text">Step {currentStep} of 7</span>
                    </div>
                  </div>

                  <div className="form-content">
                    <div className="form-step-container">
                      {displayStep === 1 && (
                        <div className={`form-step ${isTransitioning ? 'exiting' : 'entering'}`}>
                          <h3>Referral Information</h3>
                          <div className="form-group">
                            <label>Referral Date *</label>
                            <input type="date" required />
                          </div>
                          <div className="form-group">
                            <label>Email of Person/Facility Filling Out Form *</label>
                            <input type="email" placeholder="Enter email address" required />
                          </div>
                        </div>
                      )}

                      {displayStep === 2 && (
                        <div className={`form-step ${isTransitioning ? 'exiting' : 'entering'}`}>
                          <h3>Patient Information</h3>
                          <div className="form-group">
                            <label>Patient First Name *</label>
                            <input type="text" placeholder="Enter patient's first name" required />
                          </div>
                          <div className="form-group">
                            <label>Patient Last Name *</label>
                            <input type="text" placeholder="Enter patient's last name" required />
                          </div>
                          <div className="form-group">
                            <label>Date of Birth *</label>
                            <input type="date" required />
                          </div>
                          <div className="form-group">
                            <label>Phone Number *</label>
                            <input type="tel" placeholder="Enter phone number" required />
                          </div>
                        </div>
                      )}

                      {displayStep === 3 && (
                        <div className={`form-step ${isTransitioning ? 'exiting' : 'entering'}`}>
                          <h3>Provider Information</h3>
                          <div className="form-group">
                            <label>Referring Provider and/or Facility *</label>
                            <input type="text" placeholder="Enter provider/facility name" required />
                          </div>
                          <div className="form-group">
                            <label>Provider Phone Number *</label>
                            <input type="tel" placeholder="Enter provider phone number" required />
                          </div>
                          <div className="form-group">
                            <label>Primary Care MD</label>
                            <input type="text" placeholder="Enter primary care physician name" />
                          </div>
                          <div className="form-group">
                            <label>Primary Care MD Phone Number</label>
                            <input type="tel" placeholder="Enter primary care phone number" />
                          </div>
                        </div>
                      )}

                      {displayStep === 4 && (
                        <div className={`form-step ${isTransitioning ? 'exiting' : 'entering'}`}>
                          <h3>Care & Insurance Information</h3>
                          <div className="form-group">
                            <label>Home Health Care</label>
                            <input type="text" placeholder="Enter home health care provider" />
                          </div>
                          <div className="form-group">
                            <label>Home Health Care Phone Number</label>
                            <input type="tel" placeholder="Enter home health care phone number" />
                          </div>
                          <div className="form-group">
                            <label>Payer *</label>
                            <select required>
                              <option value="">Select payer</option>
                              <option value="medicare">Medicare</option>
                              <option value="insurance">Insurance</option>
                              <option value="both">Both</option>
                              <option value="other">Other</option>
                            </select>
                          </div>
                          <div className="form-group">
                            <label>Secondary Insurance (Optional)</label>
                            <input type="text" placeholder="Enter secondary insurance information" />
                          </div>
                        </div>
                      )}

                      {displayStep === 5 && (
                        <div className={`form-step ${isTransitioning ? 'exiting' : 'entering'}`}>
                          <h3>Document Uploads</h3>
                          <div className="form-group">
                            <label>Upload Patient Facesheet *</label>
                            <input type="file" accept="image/*,.pdf,.doc,.docx" required />
                          </div>
                          <div className="form-group">
                            <label>Upload Most Recent Progress Note</label>
                            <input type="file" accept="image/*,.pdf,.doc,.docx" />
                          </div>
                          <div className="form-group">
                            <label>Upload H&P Within Past 60 Days</label>
                            <input type="file" accept="image/*,.pdf,.doc,.docx" />
                          </div>
                          <div className="form-group">
                            <label>Upload Copy of Insurance Cards</label>
                            <input type="file" accept="image/*,.pdf,.doc,.docx" />
                          </div>
                        </div>
                      )}

                      {displayStep === 6 && (
                        <div className={`form-step ${isTransitioning ? 'exiting' : 'entering'}`}>
                          <h3>Additional Documents & Wound Information</h3>
                          <div className="form-group">
                            <label>Upload Echo/Doppler/ABI</label>
                            <input type="file" accept="image/*,.pdf,.doc,.docx" />
                          </div>
                          <div className="form-group">
                            <label>Upload All Other Relevant Documents</label>
                            <input type="file" multiple accept="image/*,.pdf,.doc,.docx" />
                          </div>
                          <div className="form-group">
                            <label>Age of Wound</label>
                            <input type="text" placeholder="Enter wound age (e.g., 2 weeks, 1 month)" />
                          </div>
                          <div className="form-group">
                            <label>Location of Wound</label>
                            <input type="text" placeholder="Enter wound location" />
                          </div>
                        </div>
                      )}

                      {displayStep === 7 && (
                        <div className={`form-step ${isTransitioning ? 'exiting' : 'entering'}`}>
                          <h3>Care Schedule</h3>
                          <div className="form-group">
                            <label>Start of Care Date *</label>
                            <input type="date" required />
                            <small className="form-note">Start of care date will be within 24 to 48 hrs unless otherwise specified here</small>
                          </div>
                          <div className="form-group">
                            <label>Additional Notes</label>
                            <textarea placeholder="Any additional information or special instructions" rows="4"></textarea>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="form-navigation">
                    <button 
                      className="btn btn-secondary" 
                      onClick={handleBack}
                    >
                      Back
                    </button>
                    <button 
                      className="btn btn-primary" 
                      onClick={currentStep === 7 ? () => console.log('Submit') : handleNext}
                    >
                      {currentStep === 7 ? 'Submit Referral' : 'Next'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentStep > 0 && selectedOption === 'upload' && (
            <div className={`upload-container ${isInView ? 'animate-in' : ''}`}>
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="upload-header">
                    <h2>Quick Upload</h2>
                    <p>Upload your referral documents with basic information</p>
                  </div>

                  <div className="upload-content">
                    <div className="upload-form-section">
                      <div className="form-group">
                        <label>Referral Date *</label>
                        <input type="date" required />
                      </div>
                      <div className="form-group">
                        <label>Email of Person/Facility Filling Out Form *</label>
                        <input type="email" placeholder="Enter email address" required />
                      </div>
                    </div>

                    <div className="upload-area">
                      <div className="upload-icon">
                        <i className="fas fa-cloud-upload-alt"></i>
                      </div>
                      <h3>Upload Patient Facesheet</h3>
                      <p>Drag & Drop Files Here or click to browse</p>
                      <input type="file" multiple accept="image/*,.pdf,.doc,.docx" />
                    </div>

                    <div className="upload-instructions">
                      <h4>Accepted File Types:</h4>
                      <ul>
                        <li>Images (JPG, PNG, GIF)</li>
                        <li>PDF Documents</li>
                        <li>Word Documents (.doc, .docx)</li>
                      </ul>
                    </div>
                  </div>

                  <div className="form-navigation">
                    <button 
                      className="btn btn-secondary" 
                      onClick={handleBack}
                    >
                      Back
                    </button>
                    <button 
                      className="btn btn-primary" 
                      onClick={() => console.log('Upload files')}
                    >
                      Upload Files
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </Section>

      <style jsx>{`
        .referrals-options {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 1s ease-out, transform 1s ease-out;
          will-change: opacity, transform;
        }
        .referrals-options.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .referrals-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #23343B;
          margin-bottom: 1rem;
        }

        .referrals-subtitle {
          font-size: 1.2rem;
          color: #666;
          margin-bottom: 3rem;
        }

        .referral-option-card {
          background: #23343B;
          border-radius: 15px;
          padding: 2.5rem 2rem;
          text-align: center;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 5px 20px rgba(0,0,0,0.1);
          border: 2px solid transparent;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .referral-option-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
          border-color: #ffffff;
        }

        .option-icon {
          font-size: 3rem;
          color: #ffffff;
          margin-bottom: 1.5rem;
        }

        .referral-option-card h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 0.5rem;
        }

        .referral-option-card p {
          font-size: 1rem;
          color: #ffffff;
          margin-bottom: 1rem;
        }

        .option-description {
          font-size: 0.9rem;
          color: #ffffff;
          margin-top: auto;
        }

        .referral-form-container,
        .upload-container {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 1s ease-out, transform 1s ease-out;
          will-change: opacity, transform;
        }
        .referral-form-container.animate-in,
        .upload-container.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .form-header,
        .upload-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .form-header h2,
        .upload-header h2 {
          font-size: 2rem;
          font-weight: 600;
          color: #23343B;
          margin-bottom: 1rem;
        }

        .progress-indicator {
          margin-bottom: 2rem;
        }

        .progress-bar {
          width: 100%;
          height: 8px;
          background-color: #e0e0e0;
          border-radius: 4px;
          overflow: hidden;
          margin-bottom: 0.5rem;
        }

        .progress-fill {
          height: 100%;
          background-color: #23343B;
          transition: width 0.3s ease;
        }

        .progress-text {
          font-size: 0.9rem;
          color: #4A5568;
        }

        .form-content {
          background: #23343B;
          border-radius: 15px;
          padding: 2rem;
          box-shadow: 0 5px 20px rgba(0,0,0,0.1);
          margin-bottom: 2rem;
        }

        .form-step-container {
          position: relative;
          min-height: auto;
          overflow: visible;
          padding-bottom: 1rem;
        }

        .form-step {
          position: relative;
          width: 100%;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          margin-bottom: 0;
        }

        .form-step.entering {
          opacity: 1;
          transform: translateY(0);
        }

        .form-step.exiting {
          opacity: 0;
          transform: translateY(-30px);
        }

        .form-step h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 1.5rem;
        }

        .form-group {
          margin-bottom: 1.5rem;
          display: block;
        }

        .form-group label {
          display: block;
          font-weight: 500;
          color: #ffffff;
          margin-bottom: 0.5rem;
        }

        .form-group input,
        .form-group textarea,
        .form-group select {
          width: 100%;
          padding: 0.75rem;
          border: 2px solid #ffffff;
          border-radius: 8px;
          font-size: 1rem;
          transition: border-color 0.3s ease;
          background-color: #23343B;
          color: #ffffff;
          box-sizing: border-box;
          display: block;
          margin-bottom: 0;
        }

        .form-group input:focus,
        .form-group textarea:focus,
        .form-group select:focus {
          outline: none;
          border-color: #ffffff;
          box-shadow: 0 0 0 3px rgba(255,255,255,0.3);
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: rgba(255,255,255,0.7);
        }

        .form-navigation {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
        }

        .btn {
          padding: 0.75rem 2rem;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-primary {
          background-color: #23343B;
          color: #ffffff;
        }

        .btn-primary:hover {
          background-color: #1a2a30;
          transform: translateY(-2px);
        }

        .btn-secondary {
          background-color: #23343B;
          color: #ffffff;
          border: 2px solid #23343B;
        }

        .btn-secondary:hover {
          background-color: #1a2a30;
          border-color: #1a2a30;
        }

        .upload-content {
          background: #23343B;
          border-radius: 15px;
          padding: 2rem;
          box-shadow: 0 5px 20px rgba(0,0,0,0.1);
          margin-bottom: 2rem;
        }

        .upload-area {
          border: 2px dashed #ffffff;
          border-radius: 15px;
          padding: 3rem 2rem;
          text-align: center;
          margin-bottom: 2rem;
          position: relative;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .upload-area:hover {
          background-color: rgba(255,255,255,0.1);
        }

        .upload-area input[type="file"] {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          cursor: pointer;
        }

        .upload-icon {
          font-size: 3rem;
          color: #ffffff;
          margin-bottom: 1rem;
        }

        .upload-area h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 0.5rem;
        }

        .upload-area p {
          color: #ffffff;
        }

        .upload-instructions h4 {
          font-size: 1.2rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 1rem;
        }

        .upload-instructions ul {
          list-style: none;
          padding: 0;
        }

        .upload-instructions li {
          padding: 0.5rem 0;
          color: #ffffff;
          border-bottom: 1px solid rgba(255,255,255,0.3);
        }

        .upload-instructions li:last-child {
          border-bottom: none;
        }

        @media (max-width: 768px) {
          .referrals-title {
            font-size: 2rem;
          }
          
          .referral-option-card {
            padding: 2rem 1.5rem;
          }
          
          .form-content,
          .upload-content {
            padding: 1.5rem;
          }
          
          .form-step-container {
            padding-bottom: 0.5rem;
          }
          
          .form-group {
            margin-bottom: 1.25rem;
          }
          
          .form-group input,
          .form-group textarea,
          .form-group select {
            padding: 0.875rem;
            font-size: 16px; /* Prevents zoom on iOS */
          }
          
          .form-navigation {
            flex-direction: column;
            gap: 0.75rem;
          }
          
          .btn {
            padding: 0.875rem 1.5rem;
            font-size: 1rem;
          }
        }
        .upload-form-section {
          background: #23343B;
          border-radius: 15px;
          padding: 2rem;
          margin-bottom: 2rem;
          box-shadow: 0 5px 20px rgba(0,0,0,0.1);
        }

        .upload-form-section .form-group {
          margin-bottom: 1.5rem;
        }

        .upload-form-section .form-group:last-child {
          margin-bottom: 0;
        }

        .form-note {
          display: block;
          font-size: 0.85rem;
          color: #ffffff;
          margin-top: 0.5rem;
          font-style: italic;
        }
      `}</style>
    </div>
  );
};

export default ReferralsPage;
