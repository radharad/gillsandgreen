import { motion } from "framer-motion";
import { FOUNDERS } from "../../utils/constants";
import { GraduationCap } from "lucide-react";

import "./Founder.css";

const Founder = () => {
  return (
    <section className="founder section" id="founder">

      <div className="container">

        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <span className="section-tag">
            Leadership Team
          </span>

          <h2>
            Meet The Visionaries
            <br />
            Behind Gills & Greens
          </h2>

          <p>
            Guided by experienced professionals with expertise
            in technology, operations and sustainable agriculture,
            Gills & Greens is building a future where innovation
            and farming grow together.
          </p>

        </motion.div>

        <div className="founder-grid">

          {FOUNDERS.map((person, index) => {
            const Icon = person.icon;

            return (
              <motion.div
                key={person.id}
                className="founder-card"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.2,
                  duration: 0.7,
                }}
              >
                <div className="founder-image">
                  <img
                    src={person.image}
                    alt={person.name}
                    loading="lazy"
                  />
                </div>

                <div className="founder-content">
                  <div className="founder-icon">
                    <Icon size={22} />
                  </div>

                  <h3>{person.name}</h3>

                  <span>{person.designation}</span>

                  <div className="education">
                    <GraduationCap size={18} />
                    <p>{person.education}</p>
                  </div>

                  <p className="description">
                    {person.description}
                  </p>
                </div>
              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
};

export default Founder;