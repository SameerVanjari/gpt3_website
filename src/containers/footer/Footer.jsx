import React from 'react'
import './footer.css';
import gpt3Logo from '../../assets/logo.svg';

const Footer = () => {
    return (
        <div className="gpt3__footer section__padding" id="footer">
          <div className="gpt3__footer-heading">
              <h1>Do you want to step into future before others.</h1>
          </div>

          <div className="gpt3__footer-btn">
              <p>Request for early access</p>
          </div>

          <div className="gpt3__footer-links">
              <div className="gpt3__footer-links_logo">
                  <img src={gpt3Logo} alt="logo" />
                  <p>Kretcherwood K12 182 DK Alknjkb, All rights reserved</p>
              </div>
              <div className="gpt3__footer-links_div">
                  <h4>Links</h4>
                  <p>Overons</p>
                  <p>Social Media</p>
                  <p>Counters</p>
                  <p>Contact</p>
              </div>
              <div className="gpt3__footer-links_div">
                  <h4>Company</h4>
                  <p>Terms & conditions</p>
                  <p>Privacy Policy</p>
                  <p>Contacts</p>
              </div>
              <div className="gpt3__footer-links_div">
                  <h4>Get in Touch</h4>
                  <p>Kretcherwood K12 182 DK Alknjkb</p>
                  <p>085-135657</p>
                  <p>info@ayme.net</p>
              </div>
          </div>

          <div className="gpt3__footer-copyright">
              <p>&copy; 2021 GPT-3. All rights reserved.</p>
          </div>
        </div>
    )
}

export default Footer
