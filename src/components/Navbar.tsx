import '../styles/navbar.css';
import Logo from "../assets/logos/biz.jpg";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img className='w-12 h-12 rounded-full' src={Logo} />
        </div>
        
        <div className="navbar-links">
          <a href="/" className="nav-link">HOME</a>
          <a href="/timeline" className="nav-link">TIMELINE</a>
          <a href="https://linktr.ee/businessclub_iitbhu" target="_blank" className="nav-link">RESOURCES</a>
          <a href="/bash" className="nav-link">BASH</a>
          <a href="/newsletter" className="nav-link">NEWSLETTER</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 