import { motion } from "framer-motion";
import { USPDATA } from "../../utils/constants"

import "./USP.css";

const USP = () => {
  return (
    <section className="usp section">

      <div className="container">

        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <span className="section-tag">
            Why Choose Us
          </span>

          <h2>
            Our Unique
            <br />
            Competitive Advantage
          </h2>

          <p>
            Gills & Greens combines sustainable farming,
            innovative aquaponics and farmer empowerment
            into one scalable ecosystem that benefits
            consumers, farmers and the environment.
          </p>

        </motion.div>

        <div className="usp-grid">

          {USPDATA.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                className="usp-card"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.6,
                }}
              >
                <div className="usp-icon">
                  <Icon size={34} />
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
};

export default USP;