import { motion } from "framer-motion";
import {
  Fish,
  Building2,
  Recycle,
  Users,
} from "lucide-react";

import "./Revenue.css";

const revenueData = [
  {
    icon: <Fish size={34} />,
    title: "Dual Revenue Streams",
    description:
      "Generate recurring income through the sale of premium fish and pesticide-free leafy greens.",
  },
  {
    icon: <Building2 size={34} />,
    title: "B2B Institutional Supply",
    description:
      "Long-term contracts with retailers, hotels, restaurants, and institutions ensure stable revenue.",
  },
  {
    icon: <Recycle size={34} />,
    title: "Value-Added Products",
    description:
      "Organic vermicompost created from fish waste provides an additional sustainable income stream.",
  },
  {
    icon: <Users size={34} />,
    title: "Farmer Partnership Model",
    description:
      "Scale rapidly by partnering with farmers, enabling shared growth while minimizing capital investment.",
  },
];

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

          {revenueData.map((item, index) => (

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

export default Revenue;