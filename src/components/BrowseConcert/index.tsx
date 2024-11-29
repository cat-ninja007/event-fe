import { FC } from "react";
import Bruno from '../../../public/Bruno.png';
import Phum from '../../../public/Phum.png';
import Sore from '../../../public/Sore.png';
import Sophie from '../../../public/Sophia.png';

import Image from "next/image";
import {EventCard} from "../EventCard";

const BrowseConcert: FC = () => {
  return(
    <div className="event-container px-[120px] pb-[60px] pt-[94px]">
      <div className="category-container">
        <h2 className="text-[30px] font-bold">Browse Concerts</h2>
      </div>
      <div className="viewall-container flex justify-end mb-[19px]">
        <p className="text-[#4F4CEE] text-[14px]">View All</p>
      </div>
      <div className="event-card-container flex gap-5">
        <EventCard 
          month="OCT"
          date="01"
          eventTitle="Bruno Major"
          eventPrice="Rp. 350.000 - 500.000"
          eventLocation="Jakarta Convention Cen.."
          eventImage={Bruno}
        />
        <EventCard 
          month="OCT"
          date="10"
          eventTitle="Phum Viphurit"
          eventPrice="Rp. 350.000 - 500.000"
          eventLocation="Jakarta Convention Cen.."
          eventImage={Phum}
        />
        <EventCard 
          month="OCT"
          date="04"
          eventTitle="Sore"
          eventPrice="Rp. 350.000 - 500.000"
          eventLocation="Jakarta Convention Cen.."
          eventImage={Sore}
        />
        <EventCard 
          month="OCT"
          date="30"
          eventTitle="Sophia Anne Caruso"
          eventPrice="Rp. 350.000 - 765.000"
          eventLocation="Jakarta Convention Cen.."
          eventImage={Sophie}
        />

        
      </div>
    </div>
  )
}

export default BrowseConcert;