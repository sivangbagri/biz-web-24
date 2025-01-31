import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EventsPage from '@/pages/EventsPage';
import EventDetailPage from '@/pages/EventDetailPage';
import "./App.css";
import "./index.css";
import LandingPage from '@/pages/LandingPage';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GalleryPage from '@/pages/GalleryPage';
import Timeline from './pages/timeline';
import MeetTheHelm from './components/meetHelm';
import OurAchievements from './pages/achievements';
import ComingSoon from './pages/ComingSoon';
import About from './pages/About';

function App() {
  return (
    <>
    <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/bash" element={<EventsPage />} />
        <Route path="/gallery" element={<GalleryPage />} /> 
        <Route path="/event/:id" element={<EventDetailPage />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/meethelm" element={<MeetTheHelm />} />
        <Route path="/achievements" element={<OurAchievements />} />  
        <Route path="/newsletter" element={<ComingSoon />} />  
        <Route path="/about" element={<About />} />  
      </Routes>
    </Router>
    <Footer />
    </>
  );
}

export default App;
