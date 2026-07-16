import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Send,
} from "lucide-react";

import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact section">

      <div className="container">

        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <span className="section-tag">
            Contact Us
          </span>

          <h2>
            Let's Start A
            <br />
            Sustainable Journey
          </h2>

          <p>
            We'd love to hear from you. Whether you're interested in
            aquaponics, partnerships, investments, or sustainable
            farming solutions, our team is ready to connect.
          </p>

        </motion.div>

        <div className="contact-wrapper">

          {/* Left Side */}

          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <div className="info-card">

              <Phone size={24} />

              <div>
                <h4>Call Us</h4>

                <p>+91 97175 94510</p>

                <p>+91 82771 99510</p>
              </div>

            </div>

            <div className="info-card">

              <Mail size={24} />

              <div>
                <h4>Email</h4>

                <p>gillsandgreensbluehills@gmail.com</p>
              </div>

            </div>

            <div className="info-card">

              <MapPin size={24} />

              <div>

                <h4>Location</h4>

                <p>
                  No.5/130-C Village Jackanarai,
                  Aravenu,
                  Kotagiri,
                  Nilgiris,
                  Tamil Nadu - 643201
                </p>

              </div>

            </div>

          </motion.div>

          {/* Right Side */}

          <motion.div
            className="contact-form"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <form>

              <input
                type="text"
                placeholder="Your Name"
              />

              <input
                type="email"
                placeholder="Email Address"
              />

              <input
                type="tel"
                placeholder="Phone Number"
              />

              <textarea
                rows="5"
                placeholder="Tell us about your requirement..."
              ></textarea>

              <button type="submit">

                Send Message

                <Send size={18} />

              </button>

            </form>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default Contact;