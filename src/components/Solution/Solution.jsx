import { motion } from "framer-motion";
import { SOLUTIONSMAP } from "../../utils/constants"
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import "./Solution.css";

const Solution = () => {
  const navigate = useNavigate();
  return (
    <section className="solution section" id="solution">

      <div className="container">

        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">
            Our Solution
          </span>

          <h2>
            Where Fish and Greens
            <br />
            Grow Together
          </h2>

          <p>
            Our innovative aquaponics ecosystem combines aquaculture and
            hydroponics to produce fresh, healthy food while conserving
            water, protecting the environment, and improving farmer
            livelihoods.
          </p>
        </motion.div>

        <div className="solution-wrapper">

          <motion.div
            className="solution-image"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src="/images/solution.png"
              alt="Aquaponics System"
              loading="lazy"
            />
          </motion.div>

          <div className="solution-grid">

            {SOLUTIONSMAP.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  className="solution-card"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.12,
                  }}
                >
                  <div className="solution-icon">
                    <Icon size={32} />
                  </div>

                  <div>
                    <h3>{item.title}</h3>

                    <p>{item.description}</p>
                  </div>
                </motion.div>
              );
            })}

          </div>

        </div>

        <motion.div
          className="solution-cta"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >

        <button
          className="btn-primary"
          onClick={() => navigate("/contact")}
        >
          Learn More
          <ArrowRight size={18} />
        </button>

        </motion.div>

      </div>

    </section>
  );
};

export default Solution;