'use client'
import { FC } from "react";
import Image, {StaticImageData} from "next/image";

interface IEventCard{
  month: string;
  date: string;
  eventTitle: string;
  eventPrice: string;
  eventLocation: string;
  eventImage: string | StaticImageData;
}

export const EventCard: FC<IEventCard> = ({ month, date, eventTitle, eventPrice, eventLocation, eventImage}) => {
  return (
    
        <div className="event-card  w-[285px]">
          <div className="event-card-image-container">
            <Image src={eventImage} alt={eventTitle} className="rounded-t-[4px]" />
          </div>
          <div className="event-card-information-container flex border-[1px] border-[#BDBDBD] rounded-b-[4px] pt-[14px] pb-[18px]">
            <div className="event-date-container w-1/4 flex flex-col justify-center items-center text-[#1B1B25] text-[14px] font-semibold">
              <p className="event-month">{month}</p>
              <p className="event-date">{date}</p>
            </div>
            <div className="event-detail-container  w-3/4 flex flex-col gap-[8px]">
              <h5 className="event-title text-[16px] text-[#1B1B25] font-semibold">{eventTitle}</h5>
              <p className="event-price text-[14px]">{eventPrice}</p>
              <p className="event-location text-[14px]">{eventLocation}</p>
            </div>
          </div>
        </div>
      

  )
}

export default EventCard;