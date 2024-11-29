import { FC } from "react";
import Ovo from '../../../public/Ovo.png';
import Visa from '../../../public/Visa.png';
import Image from "next/image";

const HotOffers: FC = () => {
  return(
    <div className="event-container px-[120px] pb-[60px] pt-[60px]">
      <div className="category-container">
        <h2 className="text-[30px] font-bold">Hot Offers</h2>
      </div>
      <div className="viewall-container flex justify-end mb-[19px]">
        <p className="text-[#4F4CEE] text-[14px]">View All</p>
      </div>
      <div className="event-card-container flex gap-5">
        <Image src={Ovo} alt="ovo" />
        <Image src={Visa} alt="visa" />
      </div>
    </div>
  )
}

export default HotOffers;