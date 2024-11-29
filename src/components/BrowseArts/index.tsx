import { FC } from "react";
import Frank from '../../../public/Frank.png'
import Picasso from '../../../public/Picasso.png'
import TypeWknd from '../../../public/TypeWknd.png'
import David from '../../../public/David.png'

import {EventCard} from "../EventCard";

const BrowseArts: FC = () => {
  return(
    <div className="event-container px-[120px] pb-[60px] pt-[94px]">
      <div className="category-container">
        <h2 className="text-[30px] font-bold">Browse Arts</h2>
      </div>
      <div className="viewall-container flex justify-end mb-[19px]">
        <p className="text-[#4F4CEE] text-[14px]">View All</p>
      </div>
      <div className="event-card-container flex gap-5">
        <EventCard 
          month="OCT"
          date="01"
          eventTitle="Frank Aurbach: The Fea.."
          eventPrice="Rp. 100.000 - 200.000"
          eventLocation="Online"
          eventImage={Frank}
        />
        <EventCard 
          month="OCT"
          date="02"
          eventTitle="Picasso: Extraordinary P.."
          eventPrice="Rp. 100.000 - 200.000"
          eventLocation="Online"
          eventImage={Picasso}
        />
        <EventCard 
          month="SEP"
          date="03"
          eventTitle="TypeWknd 2021"
          eventPrice="Rp. 100.000 - 200.000"
          eventLocation="Online"
          eventImage={TypeWknd}
        />
        <EventCard 
          month="OCT"
          date="06"
          eventTitle="David Hockney: Drawind .."
          eventPrice="Rp. 100.000 - 200.000"
          eventLocation="Online"
          eventImage={David}
        />

        
      </div>
    </div>
  )
}

export default BrowseArts;