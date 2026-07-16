import { useEffect, useState } from "react";
import {
  Menu,
  X,
  Leaf,
  ArrowRight,
} from "lucide-react";

import "./Navbar.css";

const navLinks = [
  {
    name: "Home",
    href: "#hero",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Solution",
    href: "#solution",
  },
  {
    name: "Products",
    href: "#products",
  },
  {
    name: "Leadership",
    href: "#founder",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "active" : ""}`}>

      <div className="container navbar-container">

        {/* Logo */}

        <a
          href="#hero"
          className="logo"
        >
          <Leaf />

          <span>
            Gills & Greens
          </span>
        </a>

        {/* Desktop Menu */}

        <nav className="nav-links">

          {navLinks.map((item) => (

            <a
              key={item.name}
              href={item.href}
            >
              {item.name}
            </a>

          ))}

        </nav>

        {/* CTA */}

        <button className="nav-btn">

          Get Started

          <ArrowRight size={18} />

        </button>

        {/* Mobile Icon */}

        <button
          className="menu-btn"
          onClick={() =>
            setMobileMenu(!mobileMenu)
          }
        >
          {mobileMenu ? <X /> : <Menu />}
        </button>

      </div>

      {/* Mobile Menu */}

      <div
        className={`mobile-menu ${
          mobileMenu ? "show" : ""
        }`}
      >

        {navLinks.map((item) => (

          <a
            key={item.name}
            href={item.href}
            onClick={() =>
              setMobileMenu(false)
            }
          >
            {item.name}
          </a>

        ))}

        <button className="mobile-btn">
          Get Started
        </button>

      </div>

    </header>
  );
};

export default Navbar;