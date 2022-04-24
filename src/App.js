import "./App.css";
import Navbar from "./components/Navbar";
import Contact from "./container/Contact/Contact";
import Features from "./container/Features/Features";
import Hero from "./container/Hero/Hero";
import Product from "./container/Product/Product";
import Testimonial from "./container/Testimonial/Testimonial";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Features />
      <Product />
      <Testimonial />
      <Contact />
    </div>
  );
}

export default App;
