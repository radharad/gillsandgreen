import { motion } from "framer-motion";
import { ROADMAP } from "../../utils/constants"

import "./Roadmap.css";

const Roadmap = () => {
  return (
    <section className="roadmap section">

      <div className="container">

        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">
            Growth Roadmap
          </span>

          <h2>
            Our Vision
            <br />
            For Sustainable Growth
          </h2>

          <p>
            Our roadmap focuses on innovation, farmer empowerment,
            strategic partnerships, and nationwide expansion to build
            India's leading aquaponics ecosystem.
          </p>
        </motion.div>

        <div className="timeline">

          {ROADMAP.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                className="timeline-item"
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.6,
                }}
              >
                <div className="timeline-icon">
                  <Icon size={28} />
                </div>

                <span className="timeline-phase">
                  {item.year}
                </span>

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

export default Roadmap;