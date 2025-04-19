import asthaImg from '../assets/images/astha_shetty.png';
import aryanImg from '../assets/images/aryan_sharma.jpeg';
import hrishitImg from '../assets/images/hrishit_yelchuri copy.png';
import shivangImg from '../assets/images/Shivang_Bagri.jpg';
import dhruvinImg from '../assets/images/Dhruvin_Patel.jpg';
import shivanshImg from '../assets/images/Shivansh gupta .jpg';
import vedaantImg from '../assets/images/Vedaant Gupta.jpg';
import uditImg from '../assets/images/udit_patidar.jpg';

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
      name: "Astha Shetty",
      position: "Secretary",
      image: asthaImg,
      email: "mailto:aastha.shetty.phe22@itbhu.ac.in",
      linkedin: "https://linkedin.com/in/aastha-shetty-4bb85824a",
    },
    {
      name: "Aryan Sharma",
      position: "Joint Secretary",
      image: aryanImg,
      email: "mailto:aryankumar.sharma.met22@itbhu.ac.in",
      linkedin: "https://linkedin.com/in/aryan-sharma-100841255",
    },
    {
      name: "Hrishit Yelchuri",
      position: "Joint Secretary",
      image: hrishitImg,
      email: "mailto:hrishityelchuri2017@gmail.com",
      linkedin: "https://linkedin.com/in/hrishit-yelchuri-66837824a",
    },
    {
      name: "Shivang Bagri",
      position: "Tech Head",
      image: shivangImg,
      email: "mailto:sivangbagri@gmail.com",
      linkedin: "https://linkedin.com/in/shivang-bagri",
    },
    {
      name: "Dhruvin Patel",
      position: "B.A.S.H. Head",
      image: dhruvinImg,
      email: "mailto:dhruvinpatelajitbhai9719@gmail.com",
      linkedin: "https://linkedin.com/in/dhruvin-patel-34877524b",
    },
    {
      name: "Shivansh Gupta",
      position: "B.A.S.H. Head",
      image: shivanshImg,
      email: "mailto:shivansh180804@gmail.com",
      linkedin: "https://linkedin.com/in/shivansh-gupta-126206250",
    },
    {
      name: "Vedaant Gupta",
      position: "Casebook Head",
      image: vedaantImg,
      email: "mailto:vedaantguptaofficial@gmail.com",
      linkedin: "https://linkedin.com/in/vedaant-gupta",
    },
    {
      name: "Udit Patidar",
      position: "Casebook Head",
      image: uditImg,
      email: "mailto:uditpatidar07@gmail.com",
      linkedin: "https://linkedin.com/in/udit-patidar",
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
  