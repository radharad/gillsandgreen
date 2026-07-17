import { motion } from "framer-motion";
import CountUp from "./CountUp";
import { MARKETSTATS } from "../../utils/constants";

import "./Market.css";

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

          {MARKETSTATS.map((item, index) => {
            const Icon = item.icon;

            return (
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
                  <Icon size={32} />
                </div>

                <h2>
                  {item.prefix}
                  <CountUp
                    end={item.value}
                    duration={3000}
                    decimals={item.value % 1 !== 0 ? 2 : 0}
                  />
                  {item.suffix}
                </h2>

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

export default Market;