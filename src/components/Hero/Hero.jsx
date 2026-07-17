import { motion } from "framer-motion";
import { ArrowRight, Fish, Leaf, ChevronDown } from "lucide-react";

import "./Hero.css";
import heroImg from "/images/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      {/* Background */}

      <div className="hero__bg">
        <img
          src={heroImg}
          alt="Aquaponics Farm"
          loading="lazy"
        />
      </div>

      <div className="hero__overlay"></div>

      {/* Content */}

      <div className="container hero__container">

        <motion.div
          className="hero__content"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >

          <div className="hero__badge">
            <Leaf size={18} />
            Sustainable Aquaponics Farming
          </div>

          <h1>
            Where <span>Fish</span> Feed Greens.
            <br />
            And <span>Greens</span> Feed Futures.
          </h1>

          <p>
            Gills & Greens combines modern aquaponics with sustainable
            agriculture to produce chemical-free fish and pesticide-free
            vegetables while empowering farmers across the Nilgiris.
          </p>

          <div className="hero__buttons">

            <button
              className="btn-primary"
              onClick={() =>
                document.getElementById("about")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              Explore More
              <ArrowRight size={18} />
            </button>

            <button
              className="btn-secondary"
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              Contact Us
            </button>

          </div>

        </motion.div>

        {/* Floating Cards */}

        <motion.div
          className="hero__cards"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: .3, duration: 1 }}
        >

          <div className="hero-card">
            <Fish size={28} />
            <h2>90%</h2>
            <p>Less Water Usage</p>
          </div>

          <div className="hero-card">
            <Leaf size={28} />
            <h2>100%</h2>
            <p>Chemical Free Farming</p>
          </div>

        </motion.div>

      </div>

      {/* Scroll */}

      <motion.div
        className="scroll-down"
        animate={{ 
          y: [0, 10, 0] 
        }}
        transition={{
          repeat: Infinity,
          duration: 1.8,
        }}
        onClick={() => {
          document.getElementById("about")?.scrollIntoView({
            behavior: "smooth",
          });
        }}
        aria-label="Scroll Down"
      >
        <ChevronDown />
      </motion.div>

    </section>
  );
};

export default Hero;