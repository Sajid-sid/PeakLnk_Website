import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import Process from "./pages/Process";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Staffing from "./components/Staffing";

import Payroll from "./components/Payroll";
import Resources from "./components/Resources";
import EcommerceRetail from "./pages/Ecommerce";
import Engineering from "./pages/Engineering";
import Telecom from "./pages/Telecom"
import Healthcare from "./pages/Healthcare";
import Finance from "./pages/Finance";



function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/process" element={<Process />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/staffing" element={<Staffing />} />

        <Route path="/payroll" element={<Payroll />} />
         <Route path="/resources" element={<Resources />} />
          <Route path="/ecommerce-retail" element={<EcommerceRetail />} />
        <Route
  path="/engineering"
  element={<Engineering />}
/>
<Route
  path="/telecommunications"
  element={<Telecom/>}
/>
<Route path="/healthcare"element={<Healthcare />}/>
        <Route path="financial"element={<Finance />}/>
      </Routes>

      <Footer />
    </>
  );
}

export default App;