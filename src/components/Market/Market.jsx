import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  TrendingUp,
  Globe,
  Landmark,
  Sprout,
} from "lucide-react";

import "./Market.css";

const marketStats = [
  {
    id: 1,
    icon: <Landmark size={32} />,
    value: 52.6,
    suffix: "M",
    prefix: "$",
    title: "India Market (2024)",
    description:
      "The Indian aquaponics market is expanding rapidly with increasing demand for sustainable agriculture.",
  },


  {
    id: 2,
    icon: <TrendingUp size={32} />,
    value: 15.3,
    suffix: "%",
    title: "India CAGR",
    description:
      "Expected annual growth from 2025–2030, driven by healthy food demand and water-efficient farming.",
  },
  {
    id: 3,
    icon: <Globe size={32} />,
    value: 2399.96,
    suffix: "M",
    prefix: "$",
    title: "Global Market by 2032",
    description:
      "The global aquaponics market continues to expand as sustainable farming gains worldwide adoption.",
  },
  {
    id: 4,
    icon: <Sprout size={32} />,
    value: 9.68,
    suffix: "%",
    title: "Global CAGR",
    description:
      "Steady global growth supported by technological innovation and eco-friendly farming practices.",
  },

];

const Market = () => {
  return (
    <section id="market" className="market section">

      <div className="container">

        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-tag">
            Market Opportunity
          </span>

          <h2>
            A Growing Market
            <br />
            Driven By Sustainability
          </h2>

          <p>
            Rising consumer awareness, increasing demand for
            chemical-free food, and water-efficient agriculture
            make aquaponics one of the fastest-growing farming
            sectors globally.
          </p>
        </motion.div>

        <div className="market-grid">

          {marketStats.map((item, index) => (
            <motion.div
              key={item.id}
              className="market-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
              }}
            >
              <div className="market-icon">
                {item.icon}
              </div>

              <h2>
                {item.prefix}

                <CountUp
                  end={item.value}
                  duration={3}
                  decimals={item.value % 1 !== 0 ? 2 : 0}
                />

                {item.suffix}
              </h2>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </motion.div>
          ))}

        </div>

      </div>


    </section>
  );
};

export default Market;