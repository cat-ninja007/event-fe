'use client'
import { FC } from "react";
import Image, {StaticImageData} from "next/image";

interface IEventTime{
  infoImage: string | StaticImageData;
  infoHeading: string;
  infoDesc: string;
  infoTime: string;
}

export const EventTime: FC<IEventTime> = ({ infoImage, infoHeading, infoDesc, infoTime }) => {
  return (
    <div className="event-time-container flex">
      <div className="event-time-duration flex gap-5">
        <div className="duration-image w-[45px]">
          <Image src={infoImage} alt="Duration" width={45} height={45} />
        </div>
        <div className="duration-detail w-[150px]">
          <h4 className="text-[20px] text-[#1B1B25] font-bold">{infoHeading}</h4>
          <p className="text-[#5C5C5F] text-[16px]">{infoDesc}</p>
          <p className="text-[#5C5C5F] text-[16px]">{infoTime}</p>
        </div>
      </div>
    </div>
  );
};

export const EventInfoOther: FC<IEventTime> = ({ infoImage, infoHeading, infoDesc }) => {
  return (
    <div className="event-time-container flex">
      <div className="event-time-duration flex gap-5">
        <div className="duration-image w-[45px]">
          <Image src={infoImage} alt="Duration" width={45} height={45} />
        </div>
        <div className="duration-detail">
          <h4 className="text-[20px] text-[#1B1B25] font-bold">{infoHeading}</h4>
          <p className="text-[#5C5C5F] text-[16px]">{infoDesc}</p>
        </div>
      </div>
    </div>
  );
};