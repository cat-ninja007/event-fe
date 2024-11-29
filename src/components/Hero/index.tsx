
import { FC } from "react";
import HeroImage from "../../../public/hero.png"
import Image from "next/image";

const Hero: FC = () => {
  return (
    <div className="hero-container relative">
      <div className="hero-image-container">
        <Image src={HeroImage} alt="hero" className="w-full"/>
      </div>
      <div className="hero-text-container absolute top-[77px] left-[50%] translate-x-[-50%] w-full">
        <h2 className="text-[#4F4CEE] text-[64px] font-bold text-center">Exclusive events, priceless moments</h2>
      </div>
    </div>
    
  );
};

export default Hero;