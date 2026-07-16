import { motion } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  Award,
} from "lucide-react";

import "./Founder.css";

const founders = [
  {
    id: 1,
    image: "/images/founder.jpg",
    name: "Jeyaraj Mani",
    designation: "Founder",

    icon: <Award size={22} />,

    description:
      "Retired Sergeant from the Indian Air Force with over 20 years of disciplined technical service. Passionate about sustainable agriculture and climate-resilient farming models that empower farmers.",

    education: "M.Sc. Mathematics",
  },

  {
    id: 2,
    image: "/images/co-founder.jpg",
    name: "Swathi Murugan",
    designation: "Co-Founder",

    icon: <Briefcase size={22} />,

    description:
      "Technology professional with expertise in software development, digital transformation, and process optimization. Driving innovation through scalable and transparent farming solutions.",

    education: "B.Tech Information Technology",
  },
];

const Founder = () => {
  return (
    <section className="founder section">

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

          {founders.map((person, index) => (

            <motion.div
              key={person.id}
              className="founder-card"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * .2,
                duration: .7,
              }}
            >

              <div className="founder-image">

                <img
                  src={person.image}
                  alt={person.name}
                />

              </div>

              <div className="founder-content">

                <div className="founder-icon">
                  {person.icon}
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

          ))}

        </div>

      </div>

    </section>
  );
};

export default Founder;