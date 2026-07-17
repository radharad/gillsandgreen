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
                <a href="tel:+919717594510">
                  +91 97175 94510
                </a>
              </p>

              <p>
                <Phone size={18} />
                <a href="tel:+918277199510">
                  +91 82771 99510
                </a>
              </p>

              <p>
                <Mail size={18} />
                <a href="mailto:gillsandgreensbluehills@gmail.com">
                  gillsandgreensbluehills@gmail.com
                </a>
              </p>

              <p>
                <MapPin size={18} />

                <a
                  href="https://www.google.com/maps/search/?api=1&query=No.+5/130-C,+Village+Jackanarai,+Aravenu,+Kotagiri,+Nilgiris,+Tamil+Nadu+643201"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {`No. 5/130-C, Village Jackanarai,
              Aravenu, Kotagiri,
              Nilgiris, Tamil Nadu - 643201`}
                </a>
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