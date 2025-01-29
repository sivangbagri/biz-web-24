import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left side - Logo and Description */}
        <div className="footer-left">
          <div className="footer-logo">
            <span>Business Club</span>
          </div>
          <p className="footer-description">
            Lorem Ipsum dummy form
          </p>
          
          {/* Email Subscribe */}
          <div className="email-subscribe">
            <input 
              type="email" 
              placeholder="Enter Your Email" 
              className="subscribe-input"
            />
            <button className="subscribe-button">
              Subscribe
            </button>
          </div>
        </div>

        {/* Right side - Navigation Links */}
        <div className="footer-right">
          <div className="footer-section">
            <h3 className="footer-title">Company</h3>
            <a href="/about">About</a>
            <a href="/newsletter">Blog</a>
            <a href="/gallery">Gallery</a>
            <a href="/achievements">Achievements</a>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Contact</h3>
            <a href="#help">Help/FAQ</a>
            <a href="#press">Press</a>
            <a href="#affiliates">Affiliates</a>
            <a href="#partners">Partners</a>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Social Media</h3>
            <a href="https://www.linkedin.com/company/businessclubiitbhu/mycompany/">Linkedin</a>
             <a href="https://instagram.com/businessclub_iitbhu">Instagram</a>
           </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="footer-bottom">
        <p>© Copyright powered by <a href="#" className="text-purple-600">Biz Club IITBHU</a></p>
      </div>
    </footer>
  );
};

export default Footer; 