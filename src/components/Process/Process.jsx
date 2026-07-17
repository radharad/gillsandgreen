import { motion } from "framer-motion";
import { PROCESSDATA } from "../../utils/constants"

import "./Process.css";

const Process = () => {
  return (
    <section className="process section" id="process">
      <div className="container">

        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">Our Process</span>

          <h2>
            How Our
            <br />
            Aquaponics System Works
          </h2>

          <p>
            A sustainable farming cycle where fish, water and plants
            work together to produce healthy food with minimal waste.
          </p>
        </motion.div>

        <div className="process-grid">
          {PROCESSDATA.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                className="process-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <div className="process-number">
                  {String(item.id).padStart(2, "0")}
                </div>

                <div className="process-icon">
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

export default Process;