import { motion } from "framer-motion";
import {
  ShieldCheck,
  Fish,
  Mountain,
  Users,
} from "lucide-react";

import "./USP.css";

const uspData = [
  {
    icon: <ShieldCheck size={34} />,
    title: "Chemical-Free Farming",
    description:
      "Fresh vegetables and naturally raised fish without pesticides or chemical fertilizers.",
  },
  {
    icon: <Fish size={34} />,
    title: "Dual Revenue Model",
    description:
      "Generate income from premium fish and organic greens using one integrated farming ecosystem.",
  },
  {
    icon: <Mountain size={34} />,
    title: "First Mover Advantage",
    description:
      "Pioneering commercial aquaponics farming in the Nilgiris with scalable sustainable solutions.",
  },
  {
    icon: <Users size={34} />,
    title: "Farmer Partnership",
    description:
      "Helping local farmers adopt aquaponics through training, technology and market support.",
  },
];

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

          {uspData.map((item, index) => (

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

export default USP;