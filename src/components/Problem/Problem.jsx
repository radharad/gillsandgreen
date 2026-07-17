import { motion } from "framer-motion";
import { PROBLEMS } from "../../utils/constants"

import "./Problem.css";

const Problem = () => {
  return (
    <section className="problem section">

      <div className="container">

        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">
            The Challenge
          </span>

          <h2>
            Conventional Farming
            <br />
            Is Reaching Its Limits
          </h2>

          <p>
            Farmers face rising costs, water shortages,
            environmental degradation, and limited market access.
            These challenges demand a smarter and more sustainable
            farming approach.
          </p>
        </motion.div>

        <div className="problem-grid">

          {PROBLEMS.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                className="problem-card"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.6,
                }}
              >
                <div className="problem-icon">
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

export default Problem;