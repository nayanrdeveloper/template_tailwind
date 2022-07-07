import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Platform from "./components/Platform";
import Pricing from "./components/Pricing";
import Profile from "./components/Profile";
import Service from "./components/Service";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Profile />
      <Service />
      <Platform />
      <Pricing />
      <Footer />
    </>
  );
}

export default App;
