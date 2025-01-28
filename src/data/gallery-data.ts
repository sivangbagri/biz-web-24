export interface TeamMember {
    name: string
    position: string
    image: string
    email: string
    linkedin: string
  }
  
  export interface AlumniMember {
    name: string
    year: string
    position: string
    image: string
  }
  
  export interface GalleryPhoto {
    src: string
    title: string
    alt?: string
  }
  
  export const coreTeam: TeamMember[] = [
    {
      name: "John Doe",
      position: "Chief Strategy Officer",
      image:
        "https://dummyimage.com/200x200/000/fff&text=John+Doe",
      email: "mailto:johndoe@example.com",
      linkedin: "https://linkedin.com/in/johndoe",
    },
    {
      name: "Jane Smith",
      position: "Head of Operations",
      image:
        "https://dummyimage.com/200x200/000/fff&text=Jane+Smith",
      email: "mailto:janesmith@example.com",
      linkedin: "https://linkedin.com/in/janesmith",
    },
    {
      name: "Alex Johnson",
      position: "Director of Innovation",
      image:
        "https://dummyimage.com/200x200/000/fff&text=Alex+Johnson",
      email: "mailto:alexjohnson@example.com",
      linkedin: "https://linkedin.com/in/alexjohnson",
    },
    {
      name: "Emily Davis",
      position: "Product Development Lead",
      image:
        "https://dummyimage.com/200x200/000/fff&text=Emily+Davis",
      email: "mailto:emilydavis@example.com",
      linkedin: "https://linkedin.com/in/emilydavis",
    },
    {
      name: "Michael Brown",
      position: "Marketing and Communications Head",
      image:
        "https://dummyimage.com/200x200/000/fff&text=Michael+Brown",
      email: "mailto:michaelbrown@example.com",
      linkedin: "https://linkedin.com/in/michaelbrown",
    },
  ];
  
  
  export const alumni: AlumniMember[] = [
    {
      name: "John Doe",
      year: "2022",
      position: "Former President",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      name: "Jane Smith",
      year: "2021",
      position: "Former Vice President",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      name: "Mike Johnson",
      year: "2020",
      position: "Former Secretary",
      image: "/placeholder.svg?height=400&width=300",
    },
  ];
  
  export const galleryPhotos: GalleryPhoto[] = [
    {
      src: "/placeholder.svg?height=600&width=800",
      title: "Event 2023",
      alt: "Team gathered at Event 2023",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      title: "Workshop 2023",
      alt: "Participants during Workshop 2023",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      title: "Conference 2023",
      alt: "Conference 2023 main event",
    },
  ];
  