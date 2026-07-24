import {
  Leaf,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="container">

        <div className="footer-grid">

          {/* Company */}

          <div className="footer-col">

            <div className="footer-logo">

              <Leaf size={28} />

              <h2>Gills & Greens</h2>

            </div>

            <p>
              Building a sustainable future through innovative
              aquaponics farming that produces chemical-free fish
              and pesticide-free greens while empowering farmers
              across India.
            </p>

          </div>

          {/* Quick Links */}

          <div className="footer-col">

            <h3>Quick Links</h3>

            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/about">About</Link>
              </li>

              <li>
                <Link to="/solution">Solution</Link>
              </li>

              <li>
                <Link to="/process">Process</Link>
              </li>

              <li>
                <Link to="/products">Products</Link>
              </li>

              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>

          </div>

          {/* Products */}

          <div className="footer-col">

            <h3>Company</h3>

            <ul>
              <li>
                <Link to="/market">Market</Link>
              </li>

              <li>
                <Link to="/roadmap">Roadmap</Link>
              </li>

              <li>
                <Link to="/revenue">Revenue Model</Link>
              </li>

              <li>
                <Link to="/founder">Leadership</Link>
              </li>

              <li>
                <Link to="/cta">Partner With Us</Link>
              </li>
            </ul>

          </div>

          {/* Contact */}

          <div className="footer-col">
            <h3>Our Products</h3>

            <ul>
              <li><Link to="/products">Fresh Organic Greens</Link></li>
              <li><Link to="/products">Chemical-Free Fish</Link></li>
              <li><Link to="/products">Organic Vermicompost</Link></li>
              <li><Link to="/products">Bulk & Institutional Supply</Link></li>
              <li><Link to="/products">Aquaponics Farming Solutions</Link></li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}

        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} Gills & Greens Private Limited.
            All Rights Reserved.
          </p>

          <div className="footer-social">

            <a
              href="#"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="#"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;