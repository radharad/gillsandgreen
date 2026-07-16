import { motion } from "framer-motion";
import {
  Leaf,
  Fish,
  Droplets,
  Users,
} from "lucide-react";

import "./About.css";

const features = [
  {
    icon: <Leaf size={30} />,
    title: "Organic Farming",
    description:
      "Pesticide-free leafy greens cultivated using sustainable aquaponics."
  },
  {
    icon: <Fish size={30} />,
    title: "Chemical-Free Fish",
    description:
      "Naturally raised Tilapia and Koi fish in a closed-loop ecosystem."
  },
  {
    icon: <Droplets size={30} />,
    title: "90% Water Saving",
    description:
      "Recirculating water technology dramatically reduces water consumption."
  },
  {
    icon: <Users size={30} />,
    title: "Farmer Empowerment",
    description:
      "Helping local farmers adopt innovative and profitable farming methods."
  },
];

const About = () => {
  return (
    <section className="about section">

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
              src="/images/about.jpg"
              alt="Aquaponics Farming"
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

          {features.map((item, index) => (
            <motion.div
              className="feature-card"
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * .15 }}
            >
              <div className="icon">
                {item.icon}
              </div>

              <h4>{item.title}</h4>

              <p>{item.description}</p>
            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default About;