import type React from "react"
import { Mail, Linkedin } from "lucide-react"


import { coreTeam, alumni, galleryPhotos } from "@/data/gallery-data"
import type { TeamMember, AlumniMember } from "@/data/gallery-data"


const TeamGallery: React.FC = () => {
  return (
    <div className=" mx-auto px-4 py-25" style={{
      backgroundImage: "linear-gradient(290deg, #7e28d6 5%, #2a225b 64%)",
    }}>
      {/* Core Team Section */}
      <section className="mb-20">
        <h2 className="text-5xl font-bold text-center mb-12 text-white">Core Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreTeam.map((member: TeamMember, index: number) => (
            <div key={index} className="bg-black/25 rounded-lg shadow-md overflow-hidden">
              <div className="aspect-[4/5] relative">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2 text-white">{member.name}</h3>
                <p className="text-md text-gray-400 mb-4">{member.position}</p>
                <div className="flex justify-center gap-4">
                  <a href={member.email} className="text-white hover:text-gray-500">
                    <Mail className="w-5 h-5" />
                  </a>
                  <a href={member.linkedin} className="text-white hover:text-gray-500">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Alumni Section */}
      {/* <section className="mb-20">
        <h2 className="text-5xl font-bold text-center mb-12 text-white">Our Alumni</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {alumni.map((alum: AlumniMember, index: number) => (
            <div key={index} className="rounded-lg shadow-md overflow-hidden">
              <div className="aspect-[4/5] relative">
                <img src={alum.image || "/placeholder.svg"} alt={alum.name} className="object-cover w-full h-full" />
              </div>
              <div className="p-6 text-center bg-black/25">
                <h3 className="text-xl font-bold mb-2 text-white">{alum.name}</h3>
                <p className="text-md text-gray-400">{alum.position}</p>
                <p className="text-md text-gray-400">Class of {alum.year}</p>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* Gallery Section */}
      <section>
        <h2 className="text-5xl font-bold text-center mb-12 text-white">Photo Gallery</h2>
        {Object.entries(galleryPhotos).map(([sectionTitle, images]) => (
        <div key={sectionTitle} className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-300">{sectionTitle}</h2>
          <div className="flex space-x-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
            {images.map((src: string, index: number) => (
              <img
                key={index}
                src={src}
                alt={`${sectionTitle} ${index + 1}`}
                className="h-60 w-auto rounded-lg object-cover flex-shrink-0 snap-center"
              />
            ))}
          </div>
        </div>
      ))}
      </section>
    </div>
  )
}

export default TeamGallery

