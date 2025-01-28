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
            <a href="#about">About</a>
            <a href="#mobile">Mobile</a>
            <a href="#blog">Blog</a>
            <a href="#how">How we work?</a>
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
            <a href="#facebook">Facebook</a>
            <a href="#twitter">Twitter</a>
            <a href="#instagram">Instagram</a>
            <a href="#youtube">Youtube</a>
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