import type React from "react"
import {VerticalsCardsData} from "../data/verticals-data.ts"
// interface ClubData {
//   title: string
//   description: string
//   image: string
// }

// interface ClubsVerticalProps {
//   cardsData: ClubData[]
// }

const ClubsVertical: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Verticals</h2>
      <div className="space-y-8">
        {VerticalsCardsData.map((club, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/3">
              <img src={club.image || "/placeholder.svg"} alt={club.title} className="w-full h-full object-cover" />
            </div>
            <div className="md:w-2/3 p-6">
              <h3 className="text-xl font-semibold mb-2">{club.title}</h3>
              <p className="text-gray-600">{club.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ClubsVertical

