import { motion } from "framer-motion";
import { REVENUEDATA }  from "../../utils/constants"

import "./Revenue.css";

const Revenue = () => {
  return (
    <section className="revenue section">

      <div className="container">

        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">
            Revenue Model
          </span>

          <h2>
            A Sustainable
            <br />
            Business Model
          </h2>

          <p>
            Our diversified revenue streams create long-term
            financial sustainability while supporting farmers,
            customers, and environmental responsibility.
          </p>
        </motion.div>

        <div className="revenue-grid">

          {REVENUEDATA.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                className="revenue-card"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.6,
                }}
              >
                <div className="revenue-icon">
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

export default Revenue;