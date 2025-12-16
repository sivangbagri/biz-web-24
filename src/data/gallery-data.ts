import bhoomiImg from "../assets/images/bhoomi_sharma.jpeg";
import adityaImg from "../assets/images/aditya_namdeo.jpeg";
import sagnikImg from "../assets/images/sagnik_giri.jpeg";
import shivangImg from '../assets/images/Shivang_Bagri.jpg';
import dhruvinImg from '../assets/images/Dhruvin_Patel.jpg';
import shivanshImg from '../assets/images/Shivansh gupta .jpg';
import vedaantImg from '../assets/images/Vedaant Gupta.jpg';
import uditImg from '../assets/images/udit_patidar.jpg';
import AarushImg from '../assets/images/AarushAgarwal.jpg';
import diw1 from '../assets/images/IMG-20250403-WA0167.jpg';
import diw2 from '../assets/images/IMG-20250403-WA0184.jpg';
import diw3 from '../assets/images/IMG-20250403-WA0168.jpg';
import diw4 from '../assets/images/IMG-20250403-WA0160.jpg';
import diw5 from '../assets/images/IMG-20250403-WA0158.jpg';
import diw6 from '../assets/images/IMG-20250403-WA0156.jpg';
import finance1 from '../assets/images/finanwork1.jpg';
import consult1 from '../assets/images/consultwork1.jpg';
import consult2 from '../assets/images/consultwork2.jpg';
import consult3 from '../assets/images/consultwork3.jpg';
import consult4 from '../assets/images/consultwork4.jpg';
import prodwork1 from '../assets/images/prodwork1.jpg';
import prodwork2 from '../assets/images/prodwork2.jpg';
import prodwork3 from '../assets/images/prodwork3.jpg';
import orien1 from '../assets/images/orien1.jpg';
import orien2 from '../assets/images/orien2.jpg';
import orien3 from '../assets/images/orien3.jpg';
import orien4 from '../assets/images/orien4.jpg';
import orien5 from '../assets/images/orien5.jpg';
import villa1 from '../assets/images/villap1.jpg';
import villa2 from '../assets/images/villap2.jpg';
import villa3 from '../assets/images/villap3.jpg';
import villa4 from '../assets/images/villap4.jpg';
import villa5 from '../assets/images/villap5.jpg';
import villa6 from '../assets/images/villap6.jpg';
import villa7 from '../assets/images/villap7.jpg';

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
      name: "Bhoomi Sharma",
      position: "Secretary",
      image: bhoomiImg,
      email: "mailto:bhoomi.sharma.mec23@itbhu.ac.in",
      linkedin: "https://www.linkedin.com/in/bhoomi-sharma-16395736a",
    },
    {
      name: "Aditya Namdeo",
      position: "Joint Secretary",
      image: adityaImg,
      email: "mailto:aditya.namdeo.met23@itbhu.ac.in",
      linkedin: "https://www.linkedin.com/in/aditya-namdeo-922aaa27b",
    },
    {
      name: "Sagnik Giri",
      position: "Joint Secretary",
      image: sagnikImg,
      email: "mailto:sagnik.giri.mec23@itbhu.ac.in",
      linkedin: "https://www.linkedin.com/in/sagnik-giri-5a8494287",
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
    {
      name: "Aarush Agarwal",
      position: "Technex Head",
      image: AarushImg,
      email: "mailto:aarushagarwal813@gmail.com",
      linkedin: "https://linkedin.com/in/aarush-agarwal-38b982220",
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
  
  export const galleryPhotos ={
  
    Workshops: [
      prodwork1,
      consult1,
      finance1,
      prodwork2,
      consult2,
      consult3,
      prodwork3,
      consult4,
    ],
    Orientation: [
      orien1,
      orien2,
      orien3,
      orien4,
      orien5,
    ],
    "Diwali Celebration": [
      diw1,
      diw2,
      diw3,
      diw4,
      diw5,
      diw6,
    ],
    Party : [
      villa1,
      villa2,
      villa3,
      villa4,
      villa5,
      villa6,
      villa7,
    ],
  };
  