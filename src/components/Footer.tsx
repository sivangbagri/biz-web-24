import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-300 text-gray-700 text-sm">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gray-300 md:items-stretch">

        {/* Left: Info */}
        <div className="flex-1 px-4 py-4 text-center md:text-left flex flex-col justify-center">
          <h2 className="text-lg font-semibold text-gray-800 mb-1">
            Business Club, IIT (BHU) Varanasi
          </h2>
          <p className="text-gray-600 max-w-xs mx-auto md:mx-0">
            Empowering future business leaders through innovation and collaboration.
          </p>
        </div>

        {/* Center: Navigation */}
        <div className="flex-1 px-4 py-4 flex flex-col justify-center">
          <h3 className="text-base font-semibold text-gray-800 text-center mb-2">Navigation</h3>
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-gray-600">
            <li><a href="/about" className="hover:text-gray-800">About</a></li>
            <li><a href="/newsletter" className="hover:text-gray-800">Blog</a></li>
            <li><a href="/gallery" className="hover:text-gray-800">Gallery</a></li>
            <li><a href="/achievements" className="hover:text-gray-800">Achievements</a></li>
            <li><a href="/contact" className="hover:text-gray-800">Contact Us</a></li>
          </ul>
        </div>

        {/* Right: Socials */}
        <div className="flex-1 px-4 py-4 text-center md:text-center flex flex-col justify-center">
          <h3 className="text-base font-semibold text-gray-800 mb-2">Follow Us</h3>
          <div className="flex justify-center md:justify-center space-x-5 text-gray-600">
            <a
              href="https://www.linkedin.com/company/businessclubiitbhu/mycompany/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-800"
            >
              <FaLinkedinIn size={22} />
            </a>
            <a
              href="https://www.instagram.com/businessclub.iitbhu/"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-800"
            >
              <FaInstagram size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center py-3 border-t border-gray-200 text-xs text-gray-500">
        © 2025 Business Club, IIT (BHU) Varanasi. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
