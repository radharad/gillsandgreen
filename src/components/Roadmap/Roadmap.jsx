import { motion } from "framer-motion";
import {
  FlaskConical,
  Users,
  Handshake,
  Sprout,
  Globe,
} from "lucide-react";

import "./Roadmap.css";

const roadmap = [
  {
    year: "Phase 01",
    icon: <FlaskConical size={28} />,
    title: "Build R&D Capability",
    description:
      "Develop a dedicated aquaponics research and innovation center to improve farming efficiency.",
  },
  {
    year: "Phase 02",
    icon: <Users size={28} />,
    title: "Farmer Network Expansion",
    description:
      "Train and onboard local farmers to adopt scalable aquaponics farming systems.",
  },
  {
    year: "Phase 03",
    icon: <Handshake size={28} />,
    title: "Market Linkages",
    description:
      "Strengthen partnerships with retailers, aggregators, and institutional buyers.",
  },
  {
    year: "Phase 04",
    icon: <Sprout size={28} />,
    title: "Expand Crop Portfolio",
    description:
      "Introduce premium vegetables and fish varieties to diversify revenue streams.",
  },
  {
    year: "Phase 05",
    icon: <Globe size={28} />,
    title: "Scale Across India",
    description:
      "Build a standardized and replicable aquaponics model for nationwide expansion.",
  },
];

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

          {roadmap.map((item, index) => (

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
                {item.icon}
              </div>

              <span className="timeline-phase">
                {item.year}
              </span>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Roadmap;