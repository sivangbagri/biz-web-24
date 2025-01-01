const cardsData = [
  {
      title: "Product Management",
      description: "Every great business starts with an innovative idea — a journey from concept to creation. Learn to identify market opportunities, define product strategy, and lead cross-functional teams to deliver successful solutions.",
      image: "https://via.placeholder.com/400x320"
  },
  {
      title: "Finance & Economics",
      description: "Learn the strategies behind successful financial planning and management. Master financial modeling, valuation techniques, and economic principles to make informed business decisions.",
      image: "https://via.placeholder.com/400x320"
  },
  {
      title: "Data Analytics",
      description: "Gain insights through data interpretation to drive smarter business decisions. Learn advanced analytics tools, visualization techniques, and how to translate data into actionable business strategies.",
      image: "https://via.placeholder.com/400x320"
  },
  {
      title: "Consulting",
      description: "Expert advice to tackle challenges and optimize operations for growth. Develop problem-solving skills, strategic thinking, and learn frameworks used by top consulting firms.",
      image: "https://via.placeholder.com/400x320"
  }
];

function createCard(cardData) {
  return `
      <div class="col-md-6">
          <div class="card">
              <div class="card-img-wrapper">
                  <img src="${cardData.image}" alt="${cardData.title}">
                  <div class="image-overlay"></div>
              </div>
              <div class="card-body">
                  <h1 class="card-title">${cardData.title}</h1>
                  <p class="card-text">${cardData.description}</p>
              </div>
          </div>
      </div>
  `;
}

function initializeGrid() {
  const gridElement = document.getElementById('cardsGrid');
  gridElement.innerHTML = cardsData.map(card => createCard(card)).join('');
}

document.addEventListener('DOMContentLoaded', initializeGrid);
