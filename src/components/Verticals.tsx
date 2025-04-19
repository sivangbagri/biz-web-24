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
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-5xl font-bold mb-20 text-center text-white">Our Verticals</h2>
      <div className="space-y-24 max-w-7xl mx-auto ">
        {VerticalsCardsData.map((club, index) => (
          <div key={index} className={`rounded-lg border-1 border-gray-500 backdrop-blur-xl overflow-hidden flex flex-col lg:h-[350px] gap-15 py-3 ${
            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          }`}>
            <div className="md:w-3/5 overflow-hidden rounded-lg">
              <img src={club.image || "/placeholder.svg"} alt={club.title} className="w-full h-full px-3 object-cover shadow-[0_30px_60px_-12px_rgba(50,_50,_93,_0.25),_0_18px_36px_-18px_rgba(0,_0,_0,_0.3)] transform transition-transform duration-300 hover:scale-105 rounded-lg" />
            </div>
            <div className="md:w-2/3 p-6 flex flex-col justify-center gap-5">
              <h3 className="text-white tracking-[-0.2px] text-4xl mb-2 font-medium">{club.title}</h3>
              <p className="text-gray-200 text-xl">{club.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ClubsVertical

