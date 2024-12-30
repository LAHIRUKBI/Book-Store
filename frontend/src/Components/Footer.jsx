import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

export default function Footer() {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Footer Section */}
      <footer className="bg-gray-800 text-gray-200 py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          {/* Footer Links */}
          <div className="w-full md:w-2/3 mb-8 md:mb-0">
            <ul className="flex flex-col md:flex-row md:space-x-8">
              <li>
                <Link to="/about-us" className="hover:text-teal-400">About Us</Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-teal-400">Careers</Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-teal-400">Terms</Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-teal-400">Privacy</Link>
              </li>
              <li>
                <Link to="/interest-based-ads" className="hover:text-teal-400">Interest Based Ads</Link>
              </li>
              <li>
                <Link to="/ad-preferences" className="hover:text-teal-400">Ad Preferences</Link>
              </li>
              <li>
                <Link to="/help" className="hover:text-teal-400">Help</Link>
              </li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-6">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-teal-400"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-teal-400"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-teal-400"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-teal-400"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 mt-8">
          <p>&copy; 2024 SmartBIN. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}