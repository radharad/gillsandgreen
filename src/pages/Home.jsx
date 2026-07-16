import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Problem from "../components/Problem/Problem";
import Solution from "../components/Solution/Solution";
import USP from "../components/USP/USP";
import Products from "../components/Products/Products";

import Roadmap from "../components/Roadmap/Roadmap";
import Revenue from "../components/Revenue/Revenue";
import Founder from "../components/Founder/Founder";
import CTA from "../components/CTA/CTA";
import Contact from "../components/Contact/Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Problem />
      <Solution />
      <USP />
      <Products />
      {/* <Market/> */}
      <Roadmap />
      <Revenue />
      <Founder />
      <CTA />
      <Contact />
    </>
  );
};

export default Home;