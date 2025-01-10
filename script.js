import React, { useState, useEffect } from 'react';
import './style.css';  
const cardsData = [
  {
    title: "Product Management",
    description:
      "Every great business starts with an innovative idea — a journey from concept to creation. Learn to identify market opportunities, define product strategy, and lead cross-functional teams to deliver successful solutions.",
    image: "https://via.placeholder.com/400x320",
  },
  {
    title: "Finance & Economics",
    description:
      "Learn the strategies behind successful financial planning and management. Master financial modeling, valuation techniques, and economic principles to make informed business decisions.",
    image: "https://via.placeholder.com/400x320",
  },
  {
    title: "Data Analytics",
    description:
      "Gain insights through data interpretation to drive smarter business decisions. Learn advanced analytics tools, visualization techniques, and how to translate data into actionable business strategies.",
    image: "https://via.placeholder.com/400x320",
  },
  {
    title: "Consulting",
    description:
      "Expert advice to tackle challenges and optimize operations for growth. Develop problem-solving skills, strategic thinking, and learn frameworks used by top consulting firms.",
    image: "https://via.placeholder.com/400x320",
  },
];


const Card = ({ cardData }) => (
  <div className="col-md-6">
    <div className="card">
      <div className="card-img-wrapper">
        <img src={cardData.image} alt={cardData.title} />
        <div className="image-overlay"></div>
      </div>
      <div className="card-body">
        <h1 className="card-title">{cardData.title}</h1>
        <p className="card-text">{cardData.description}</p>
      </div>
    </div>
  </div>
);


const App = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(cardsData); 
  }, []);

  return (
    <div className="container py-5">
      <div className="text-center mb-4">
        <h1 className="fw-bold mb-3">Verticals: Navigating the Business Journey</h1>
        <p className="text-muted mx-auto" style={{ maxWidth: '700px' }}>
          At The Business Club IIT BHU, we believe building a business is a journey — a journey that starts with
          innovation and continues with careful planning, analysis, and expert guidance.
        </p>
      </div>

      <div className="row g-4" id="cardsGrid">
        {cards.map((card, index) => (
          <Card key={index} cardData={card} />
        ))}
      </div>
    </div>
  );
};

export default App;
