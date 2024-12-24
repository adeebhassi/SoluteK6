import React from 'react';
import contact_blkm from '../../assets/images/contact-blkm.png'
const ContactUs = () => {
  return (
    <div className="contact-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="section-title text-left">
              <div>
                <h5 className="section-sub-title">Contact Us for Partnerships</h5>
                <h5 className="section-main-title" style={{ lineHeight: '30px' }}>
                  Explore the partnership opportunities that align with your business goals. Fill out the contact form below, ensuring the subject line specifies the partnership type you're interested in. Our team will get back to you promptly!
                </h5>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="form_box">
                  <input type="text" name="name" placeholder="Your Name *" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form_box">
                  <input type="email" name="email" placeholder="Your E-Mail *" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form_box">
                  <input type="text" name="subject" placeholder="Subject *" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form_box">
                  <input type="text" name="phone" placeholder="Phone *" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form_box">
                  <textarea name="message" id="message" cols="30" rows="10" placeholder="Message"></textarea>
                </div>
                <div className="quote_button">
                  <button className="btn" type="submit">
                    SEND NOW <i className="bi bi-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <img width="100%" src={contact_blkm} alt="Contact" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
