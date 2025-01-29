import type React from "react";
import Marquee from "react-fast-marquee";
import icici from "../assets/sponsors/icici-logo.png";
import myAnalyticsSchool from "../assets/sponsors/my analytics school logo.png";
import sponbar from "../assets/sponsors/sponbar logo.png";
import tpf from "../assets/sponsors/tpf-logo.png";
import unstop from "../assets/sponsors/unstop logo.png";
import upsurge from "../assets/sponsors/upsurge logo.png";
import uxreactor from "../assets/sponsors/uxreactor logo.png";
const sponsorLogos = [
  icici,
  myAnalyticsSchool,
  sponbar,
  tpf,
  unstop,
  upsurge,
  uxreactor,
];

const Sponsors: React.FC = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          {" "}
          Sponsors and Partnerships{" "}
        </h2>
        <div className="overflow-hidden">
          <div className="flex animate-marquee">
            <Marquee direction="right" speed={80}>
              {sponsorLogos.map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt={`Sponsor ${index + 1}`}
                  className="w-40 h-auto mx-4 object-contain"
                />
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
