import { FC } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import BackToFuture from '../../../public/back-to-future.png'
import BackButton from '../../../public/back-button.png'
import PlusButton from '../../../public/plus-button.png'
import MinusButton from '../../../public/minus-button.png'

const TicketInfo: FC = () => {
  return (
    <>
      <Navbar />
      <div className="ticket-info-container px-[120px]">
        <div className="top-content flex items-center pt-[86px] gap-14">
          <div className="back-button-container">
            <Image src={BackButton} alt="Back Button" width={43} height={43} />
          </div>

          <div className="ticket-options-container">
            <h2 className="text-[30px] font-bold">Ticket Option</h2>
          </div>
        </div>
        
        
        <div className="grid grid-cols-2 pt-[54px]">
          <div className="ticket-image-container w-[507px] h-[239px]">
            <Image src={BackToFuture} alt="Back To Future" />
          </div>
          <div className="ticket-info-container flex flex-col gap-3">
            <h2 className="event-title text-[24px] text-[#1B1B25]">Drive In Senja : Back To Future</h2>
            <p className="event-location text-[18px] text-[#1B1B25]">Parkiran Utama Mall @ Alam Sutera</p>
            <p className="event-date text-[18px] text-[#1B1B25]">September 22, 2021 · 20.00 - 21.56 WIB</p>
            <p className="event-description text-[18px] text-[#1B1B25]">
              Marty travels back in time using an eccentric scientist's time machine. However, he must make his high-school-aged parents fall in love in order to return to the present.
            </p>
          </div>
        </div>
      </div>

      <div className="ticket-counter">
        <h3>Tickets</h3>
        
      </div>


      <Footer />
    </>
  );
};

export default TicketInfo;