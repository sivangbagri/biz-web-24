import { FC } from 'react';
import HeroSection from '@/components/HeroSection.tsx';
import MeetTheHelm from '../components/meetHelm';
import Verticals from "../components/Verticals";
import Sponsors from '@/components/Sponsors';
const LandingPage: FC = () => {
  return (
    <div>
        <HeroSection/>
        <Verticals/>
        <MeetTheHelm/>
        <Sponsors/>
        
    </div>
  );
};

export default LandingPage; 