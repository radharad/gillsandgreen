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
                <a href="#hero">Home</a>
              </li>

              <li>
                <a href="#about">About</a>
              </li>

              <li>
                <a href="#solution">Solution</a>
              </li>

              <li>
                <a href="#products">Products</a>
              </li>

              <li>
                <a href="#founder">Leadership</a>
              </li>

              <li>
                <a href="#contact">Contact</a>
              </li>

            </ul>

          </div>

          {/* Products */}

          <div className="footer-col">

            <h3>Our Products</h3>

            <ul>

              <li>Fresh Organic Greens</li>

              <li>Chemical-Free Fish</li>

              <li>Organic Vermicompost</li>

              <li>Bulk & Institutional Supply</li>

            </ul>

          </div>

          {/* Contact */}

          <div className="footer-col">

            <h3>Contact Info</h3>

            <div className="footer-contact">

              <p>
                <Phone size={18} />
                <span>+91 97175 94510</span>
              </p>

              <p>
                <Phone size={18} />
                <span>+91 82771 99510</span>
              </p>

              <p>
                <Mail size={18} />
                <span>gillsandgreensbluehills@gmail.com</span>
              </p>

              <p>
                <MapPin size={18} />
                <span>
                  No. 5/130-C, Village Jackanarai,
                  Aravenu, Kotagiri,
                  Nilgiris, Tamil Nadu - 643201
                </span>
              </p>

            </div>

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