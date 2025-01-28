import '../styles/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          LOGO
        </div>
        
        <div className="navbar-links">
          <a href="#home" className="nav-link">HOME</a>
          <a href="#timeline" className="nav-link">TIMELINE</a>
          <a href="#resources" className="nav-link">RESOURCES</a>
          <a href="/bash" className="nav-link">BASH</a>
          <a href="#newsletter" className="nav-link">NEWSLETTER</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 