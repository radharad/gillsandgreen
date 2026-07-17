import { motion } from "framer-motion";
import { FEATURES } from "../../utils/constants";

import "./About.css";
import aboutImg from "/images/about.jpg";

const About = () => {
  return (
    <section className="about section" id="about">

      <div className="container">

        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
        >

          <span className="section-tag">
            About Gills & Greens
          </span>

          <h2>
            Sustainable Farming.
            <br />
            Smarter Future.
          </h2>

          <p>
            Gills & Greens is an agritech startup pioneering
            aquaponics farming in the Nilgiris. By integrating
            modern aquaculture with sustainable agriculture,
            we produce pesticide-free greens and naturally
            grown fish while supporting farmers through
            technology and innovation.
          </p>

        </motion.div>

        <div className="about-grid">

          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
          >

            <img
              src={aboutImg}
              alt="Aquaponics Farming"
              loading="lazy"
            />

          </motion.div>

          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
          >

            <div className="vision-box">
              <h3>Our Vision</h3>

              <p>
                To build a scalable aquaponics ecosystem
                transforming sustainable farming and empowering
                farmers across hilly regions.
              </p>
            </div>

            <div className="mission-box">
              <h3>Our Mission</h3>

              <p>
                Produce chemical-free food while enabling
                farmers through innovation, partnerships,
                and accessible aquaponics technology.
              </p>
            </div>

          </motion.div>

        </div>

        <div className="feature-grid">

          {FEATURES.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                className="feature-card"
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <div className="icon">
                  <Icon size={30} />
                </div>

                <h4>{item.title}</h4>

                <p>{item.description}</p>
              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
};

export default About;