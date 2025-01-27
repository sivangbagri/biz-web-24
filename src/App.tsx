import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EventsPage from './pages/EventsPage';
import EventDetailPage from './pages/EventDetailPage';
import "./App.css";
import "./index.css";
import LandingPage from './pages/LandingPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Navbar />
    <Router>
      <Routes>
        <Route path="/bash" element={<EventsPage />} />
        <Route path="/event/:id" element={<EventDetailPage />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
    <Footer />
    </>
  );
}

export default App;
