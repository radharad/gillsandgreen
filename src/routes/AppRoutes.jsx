import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "../components/common/ScrollToTop";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AboutPage  from "../pages/About";
import ProblemPage from "../pages/Problem";
import SolutionPage from "../pages/Solution";
import ProcessPage from "../pages/Process";
import USPPage from "../pages/USP";
import ProductsPage from "../pages/Products";
import MarketPage from "../pages/Market";
import RoadmapPage from "../pages/Roadmap";
import RevenuePage from "../pages/Revenue";
import FounderPage from "../pages/Founder";
import CTAPage from "../pages/CTA";
import ContactPage from "../pages/Contact";

const AppRoutes = () => {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/problem" element={<ProblemPage />} />
          <Route path="/solution" element={<SolutionPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/usp" element={<USPPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/market" element={<MarketPage />} />
          <Route path="/roadmap" element={<RoadmapPage />} />
          <Route path="/revenue" element={<RevenuePage />} />
          <Route path="/founder" element={<FounderPage />} />
          <Route path="/cta" element={<CTAPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;