import { motion } from "framer-motion";
import {
  Mountain,
  IndianRupee,
  TrendingDown,
  Sprout,
  AlertTriangle,
} from "lucide-react";

import "./Problem.css";

const problems = [
  {
    icon: <Mountain size={34} />,
    title: "Limited Hill Farming",
    description:
      "Difficult terrain and poor infrastructure restrict modern farming practices in hilly regions.",
  },
  {
    icon: <IndianRupee size={34} />,
    title: "High Farming Costs",
    description:
      "Increasing fertilizer, water, and operational costs reduce farmer profitability.",
  },
  {
    icon: <TrendingDown size={34} />,
    title: "Weak Market Access",
    description:
      "Farmers struggle to connect directly with buyers, resulting in unstable pricing.",
  },
  {
    icon: <Sprout size={34} />,
    title: "Low Technology Adoption",
    description:
      "Limited awareness prevents farmers from using sustainable technologies like aquaponics.",
  },
  {
    icon: <AlertTriangle size={34} />,
    title: "Environmental Damage",
    description:
      "Chemical farming degrades soil fertility and contaminates water resources over time.",
  },
];

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

          {problems.map((item, index) => (

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
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Problem;