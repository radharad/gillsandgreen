import { motion } from "framer-motion";
import {
  Fish,
  Leaf,
  Droplets,
  Users,
  Store,
  ArrowRight,
} from "lucide-react";

import "./Solution.css";

const solutions = [
  {
    icon: <Fish size={32} />,
    title: "Aquaponics Farming",
    description:
      "An integrated fish and plant cultivation system that creates a natural, self-sustaining ecosystem.",
  },
  {
    icon: <Droplets size={32} />,
    title: "90% Less Water Usage",
    description:
      "Water continuously circulates between fish tanks and grow beds, dramatically reducing water consumption.",
  },
  {
    icon: <Leaf size={32} />,
    title: "Chemical-Free Production",
    description:
      "Fish waste naturally nourishes plants, eliminating the need for chemical fertilizers and pesticides.",
  },
  {
    icon: <Users size={32} />,
    title: "Farmer Empowerment",
    description:
      "Training, technical guidance, and scalable farming models help farmers increase long-term income.",
  },
  {
    icon: <Store size={32} />,
    title: "Direct Market Linkage",
    description:
      "Connecting farmers with retailers and institutional buyers ensures stable demand and fair pricing.",
  },
];

const Solution = () => {
  return (
    <section className="solution section">

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
            />
          </motion.div>

          <div className="solution-grid">

            {solutions.map((item, index) => (
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
                  {item.icon}
                </div>

                <div>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                </div>

              </motion.div>
            ))}

          </div>

        </div>

        <motion.div
          className="solution-cta"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >

          <button className="btn-primary">
            Learn More
            <ArrowRight size={18} />
          </button>

        </motion.div>

      </div>

    </section>
  );
};

export default Solution;