import { motion } from "framer-motion";
import {
  Leaf,
  Fish,
  Recycle,
  Building2,
  ArrowRight,
} from "lucide-react";

import "./Products.css";

const products = [
  {
    id: 1,
    icon: <Leaf size={34} />,
    title: "Fresh Organic Greens",
    description:
      "Premium pesticide-free leafy greens cultivated using advanced aquaponics systems.",
    image: "/images/greens.jpg",
  },
  {
    id: 2,
    icon: <Fish size={34} />,
    title: "Chemical-Free Fresh Fish",
    description:
      "Naturally grown Tilapia and Koi fish raised in oxygen-rich recirculating water.",
    image: "/images/fish.jpg",
  },
  {
    id: 3,
    icon: <Recycle size={34} />,
    title: "Organic Vermicompost",
    description:
      "Eco-friendly compost created from fish waste to naturally enrich agricultural soil.",
    image: "/images/vermicompost.jpg",
  },
  {
    id: 4,
    icon: <Building2 size={34} />,
    title: "Bulk & Institutional Supply",
    description:
      "Reliable large-volume supply of fresh greens and fish for retailers, hotels and institutions.",
    image: "/images/bulk.jpg",
  },
];

const Products = () => {
  return (
    <section className="products section">

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

          {products.map((item, index) => (

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
                />

              </div>

              <div className="product-content">

                <div className="product-icon">
                  {item.icon}
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <button className="product-btn">
                  Learn More
                  <ArrowRight size={18} />
                </button>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Products;