import { FC } from "react";
import Panic from '../../../public/Panic.png'
import Hamilton from '../../../public/Hamilton.png'
import Anastasia from '../../../public/Anastasia.png'
import Ali from '../../../public/Ali.png'

import Image from "next/image";
import {EventCard} from "../EventCard";

const UpcomingEvents: FC = () => {
  return(
    <div className="event-container px-[120px] pb-[60px] pt-[170px]">
      <div className="category-container">
        <h2 className="text-[30px] font-bold">Upcoming Events</h2>
      </div>
      <div className="viewall-container flex justify-end mb-[19px]">
        <p className="text-[#4F4CEE] text-[14px]">View All</p>
      </div>
      <div className="event-card-container flex gap-5">
        <EventCard 
          month="NOV"
          date="01"
          eventTitle="Panic! at the Disco"
          eventPrice="Rp. 450.000 - 975.000"
          eventLocation="The Icon, BSD"
          eventImage={Panic}
        />
        <EventCard 
          month="NOV"
          date="02"
          eventTitle="Hamilton The Musical"
          eventPrice="Rp. 1.500.000 - 3.000.000"
          eventLocation="Ciputra, Art Preneur"
          eventImage={Hamilton}
        />
        <EventCard 
          month="NOV"
          date="03"
          eventTitle="Anastasia The Musical"
          eventPrice="Rp. 850.000 - 3.000.000"
          eventLocation="Intercon, Pd. Indah"
          eventImage={Anastasia}
        />
        <EventCard 
          month="NOV"
          date="06"
          eventTitle="Ali Abdaal Seminar"
          eventPrice="Free"
          eventLocation="Online"
          eventImage={Ali}
        />

        
      </div>
    </div>
  )
}

export default UpcomingEvents;



{/* <div className="event-card  w-[285px]">
          <div className="event-card-image-container">
            <Image src={Panic} alt="panic" className="rounded-t-[1px]" />
          </div>
          <div className="event-card-information-container flex border-2 border-[#BDBDBD] rounded-b-[1px] pt-[14px] pb-[18px]">
            <div className="event-date-container w-1/4 flex flex-col justify-center items-center text-[#1B1B25] text-[14px] font-semibold">
              <p className="event-month">NOV</p>
              <p className="event-date">01</p>
            </div>
            <div className="event-detail-container  w-3/4 flex flex-col gap-[8px]">
              <h5 className="event-title text-[16px] text-[#1B1B25] font-semibold">Panic! at the Disco</h5>
              <p className="event-price text-[14px]">Rp. 450.000 - 975.000</p>
              <p className="event-location text-[14px]">The Icon, BSD</p>
            </div>
          </div>
        </div> */}