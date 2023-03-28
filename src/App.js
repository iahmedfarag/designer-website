import "./css/style.css";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Numbers from "./components/Numbers";
import Testimonials from "./components/Testimonials.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Numbers />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
