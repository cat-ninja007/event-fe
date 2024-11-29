'use client'
import { FC } from "react";
import Image, {StaticImageData} from "next/image";

interface ITopCard{
  eventTitle: string;
  eventNotif: string;
  eventImage: string | StaticImageData;
}

const TopCard: FC<ITopCard> = ({ eventTitle, eventNotif , eventImage}) => {
  return (
    <div className="top-event-card relative">
      <Image src={eventImage} alt={eventTitle} />
      <div className="event-information-container absolute bottom-[22px] left-[18px]">
        <h4 className="text-[30px] font-bold text-white">{eventTitle}</h4>
        <p className="text-[20px] text-[#EB5757]">{eventNotif}</p>
      </div>
    </div>
  );
};

export default TopCard;