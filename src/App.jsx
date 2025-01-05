import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EventsPage from './pages/EventsPage';
import EventDetails from './components/EventDetails';
import "./App.css";
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/bash2025" element={<EventsPage />} />
        <Route path="/event/:id" element={<EventDetails />} />
        <Route path="/" element={<EventsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
