import { useEffect, useState } from "react";
import { NAV_LINKS } from "../../utils/constants";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import {
  Menu,
  X,
  Leaf,
  ArrowRight,
} from "lucide-react";

import "./Navbar.css";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${isHomePage ? (scrolled ? "active" : "") : "inner-page"}`}>
      <div className="container navbar-container">
        <Link to="/" className="logo">
          <Leaf />
          <span>Gills & Greens</span>
        </Link>
        <nav className="nav-links">
          {NAV_LINKS.map((item) => (
            <Link key={item.name} to={item.path}>
              {item.name}
            </Link>
          ))}
        </nav>
        <button
          className="nav-btn"
          onClick={() => navigate("/products")}
        >
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

      <div
        className={`mobile-menu ${
          mobileMenu ? "show" : ""
        }`}
      >

      {NAV_LINKS.map((item) => (
        <Link
          key={item.name}
          to={item.path}
          onClick={() => setMobileMenu(false)}
        >
          {item.name}
        </Link>
      ))}

        <button className="mobile-btn">
          Get Started
        </button>

      </div>

    </header>
  );
};

export default Navbar;