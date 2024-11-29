import { FC } from "react";
import Hillsong from '../../../public/Hillsong.png'
import Hamilton from '../../../public/HamiltonTheMusical.png'
import Batavia from '../../../public/Batavia.png'
import Image from "next/image";
import TopCard from "./TopCard";

const TopSelling: FC = () => {
  return(
    <div className="event-container px-[120px] pb-[60px] pt-[60px]">
      <div className="category-container">
        <h2 className="text-[30px] font-bold">Top Selling</h2>
      </div>
      <div className="viewall-container flex justify-end mb-[19px]">
        <p className="text-[#4F4CEE] text-[14px]">View All</p>
      </div>
      <div className="event-card-container flex gap-5">
        <TopCard 
          eventTitle="Hillsong: Wonder Tour"
          eventNotif="5 tickets left!"
          eventImage={Hillsong}
        />
        <TopCard 
          eventTitle="Hamilton The Musical"
          eventNotif="8 tickets left!"
          eventImage={Hamilton}
        />
        <TopCard 
          eventTitle="Batavia Madrigal Singers"
          eventNotif="11 tickets left!"
          eventImage={Batavia}
        />
        
      </div>
    </div>
  )
}

export default TopSelling;