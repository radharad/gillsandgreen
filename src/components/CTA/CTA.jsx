import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail } from "lucide-react";

import "./CTA.css";

const CTA = () => {
  return (
    <section className="cta">

      <div className="cta-overlay"></div>

      <div className="container">

        <motion.div
          className="cta-content"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <span className="cta-tag">
            Join The Green Revolution
          </span>

          <h2>
            Let's Build The Future Of
            <br />
            Sustainable Farming Together
          </h2>

          <p>
            Whether you're a farmer, investor, retailer, or sustainability
            partner, Gills & Greens welcomes you to be part of a healthier,
            greener future powered by innovative aquaponics.
          </p>

          <div className="cta-buttons">

            <button className="btn-primary">
              Become a Partner
              <ArrowRight size={18} />
            </button>

            <button className="btn-secondary">
              Contact Us
            </button>

          </div>

          <div className="cta-contact">

            <div className="contact-item">
              <Phone size={18} />
              <span>+91 97175 94510</span>
            </div>

            <div className="contact-item">
              <Mail size={18} />
              <span>gillsandgreensbluehills@gmail.com</span>
            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default CTA;