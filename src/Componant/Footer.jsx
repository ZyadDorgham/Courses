
import { FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-brand-inner">
              <span className="footer-brand-icon">📚</span>
              <span className="footer-brand-name">EduCourses</span>
            </div>
            <p className="footer-description">
              Empowering learners worldwide with expert-led courses in technology, design, business, and more.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="#" className="social-link" aria-label="YouTube">
                <FaYoutube />
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <FaInstagram />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-list">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Courses</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">Categories</h4>
            <ul className="footer-list">
              <li><a href="#">Programming</a></li>
              <li><a href="#">Frontend Dev</a></li>
              <li><a href="#">Backend Dev</a></li>
              <li><a href="#">Data Science</a></li>
              <li><a href="#">UI/UX Design</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">Support</h4>
            <ul className="footer-list">
              <li><a href="#">Help Center</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4 className="footer-heading">Contact</h4>
            <ul className="footer-list">
              <li>
                <FaEnvelope className="contact-icon" />
                <span>support@educourses.com</span>
              </li>
              <li>
                <FaPhone className="contact-icon" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li>
                <FaMapMarkerAlt className="contact-icon" />
                <span>123 Learning St, San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-newsletter">
          <div className="newsletter-content">
            <span className="newsletter-icon">✉️</span>
            <div>
              <h4 className="newsletter-title">Subscribe to our newsletter</h4>
              <p className="newsletter-desc">Get the latest courses, updates, and offers straight to your inbox.</p>
            </div>
          </div>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" className="newsletter-input" />
            <button className="newsletter-btn">Subscribe</button>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-copyright">
            © {new Date().getFullYear()} EduCourses. All rights reserved.
          </span>
          <div className="footer-bottom-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;