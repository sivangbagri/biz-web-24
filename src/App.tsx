import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import "./styles/hero.css";
import "./styles/navbar.css";
import "./styles/footer.css";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  );
}

export default App;
