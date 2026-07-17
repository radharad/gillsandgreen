import { motion } from "framer-motion";
import { PRODUCTS } from "../../utils/constants"
import { ArrowRight } from "lucide-react";

import "./Products.css";

const Products = () => {
  return (
    <section className="products section" id="products">

      <div className="container">

        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <span className="section-tag">
            Our Products
          </span>

          <h2>
            Sustainable Products
            <br />
            For A Healthier Tomorrow
          </h2>

          <p>
            Every product from Gills & Greens is developed using
            sustainable aquaponics, ensuring freshness, quality,
            and environmental responsibility.
          </p>

        </motion.div>

        <div className="products-grid">

          {PRODUCTS.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                className="product-card"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.6,
                }}
              >
                <div className="product-image">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                  />
                </div>

                <div className="product-content">
                  <div className="product-icon">
                    <Icon size={34} />
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  <button
                    className="product-btn"
                    onClick={() => {
                      document.getElementById("contact")?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                  >
                    Learn More
                    <ArrowRight size={18} />
                  </button>
                  
                </div>
              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
};

export default Products;