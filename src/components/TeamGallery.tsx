import type React from "react"
import { Mail, Linkedin } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"


import { coreTeam, alumni, galleryPhotos } from "@/data/gallery-data"
import type { TeamMember, AlumniMember, GalleryPhoto } from "@/data/gallery-data"


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
      <section className="mb-20">
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
      </section>

      {/* Gallery Section */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Photo Gallery</h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          className="max-w-5xl mx-auto"
        >
          {galleryPhotos.map((photo: GalleryPhoto, index: number) => (
            <SwiperSlide key={index}>
              <div className="relative aspect-video">
                <img
                  src={photo.src || "/placeholder.svg"}
                  alt={photo.alt || photo.title}
                  className="object-cover w-full h-full"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                  <p className="text-center">{photo.title}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  )
}

export default TeamGallery

