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
import MeetTheHelm from './pages/meetHelm';
import OurAchievements from './pages/achievements';

function App() {
  return (
    <>
    <Navbar />
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/bash" element={<EventsPage />} />
        <Route path="/gallery" element={<GalleryPage />} /> 
        <Route path="/event/:id" element={<EventDetailPage />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/meethelm" element={<MeetTheHelm />} />
        <Route path="/achievements" element={<OurAchievements />} />  
      </Routes>
    </Router>
    <Footer />
    </>
  );
}

export default App;
