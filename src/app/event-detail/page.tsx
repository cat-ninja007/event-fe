import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Copylink from '../../../public/copy-link.png'
import InstagramIcon from '../../../public/intagram-logo.png'
import FacebookIcon from '../../../public/facebook-logo.png'
import TwitterIcon from '../../../public/twitter-logo.png'
import BackToFuture from '../../../public/back-to-future.png'
import Duration from '../../../public/duration.png'
import Audience from '../../../public/audience.png'
import Attention from '../../../public/attention.png'
import { EventTime, EventInfoOther} from "./EventTime";

export default function EventDetail() {
  return (
    <>
      <Navbar />
      <div className="top-content flex justify-center items-center pt-[86px] gap-8">
        {/* <div className="social-media-container flex flex-col gap-6 p-2"> */}
        <div className="social-media-container grid grid-rows-4 gap-4 p-2">
          <p className="text-[20px]">Share</p>
          <Image src={Copylink} width={43} height={43} alt="copylink" />
          <Image src={InstagramIcon} width={43} height={43} alt="instagram" />
          <Image src={TwitterIcon} width={43} height={43} alt="twitter" />
          <Image src={FacebookIcon} width={43} height={43} alt="facebook" />
        </div>
        <div className="banner-container p-[21px] bg-[#DADAFB] rounded-[4px]">
          <Image src={BackToFuture} alt="Back To Future" />
        </div>
      </div>

      <div className="top-middle-content flex gap-[139px] py-[44px] px-[222px]">
        <div className="event-detail-info flex flex-col gap-4">
          <h2 className="event-title text-[30px] font-bold text-[#1B1B25]">Drive In Senja : Back To Future</h2>
          <p className="event-location text-[16px] text-[#1B1B25] font-bold">Parkiran Utama Mall @ Alam Sutera</p>
          <p className="event-date text-[16px] text-[#1B1B25] font-bold">September 22, 2021 · 20.00 - 21.56 WIB</p>
          <p className="event-description text-[18px] text-[#1B1B25]">
            Marty travels back in time using an eccentric scientist's time machine. However, he must make his high-school-aged parents fall in love in order to return to the present.
          </p>
        </div>

        <div className="ticket-price border-[1px] border-[#828282] rounded-[8px] px-8 w-[285px] h-[144px] py-5 flex flex-col items-center justify-center shadow-custom-purple">
          <p className="text-[#4F4F4F] text-[16px]">Tickets starting at</p>
          <p className="text-[#1B1B25] text-[20px] font-bold">Rp. 212.000</p>
          <button className="w-[220px] bg-[#4F4CEE] py-[10px] px-4 rounded-[4px] text-[14px] text-white mt-4">Buy Tickets</button>
        </div>
      </div>

      <div className="event-information-container px-[222px] ">
        <div className="event-title mb-9">
          <h3 className="text-[24px] font-bold text-[#1B1B25]">Event Information</h3>
        </div>
        {/* <div className="event-time-container flex justify-between gap-28 mb-8"> */}
        <div className="event-time-container grid grid-cols-3 gap-28 mb-8">
          <EventTime 
            infoImage={Duration}
            infoHeading="Duration"
            infoDesc="20.00 - 21.56 WIB"
            infoTime="1 hour 56 minutes"
          />
          <EventInfoOther
            infoImage={Audience}
            infoHeading="Audience"
            infoDesc="This movie is suitable for audience aged 12 and above" 
            infoTime={""}        
          />
          <EventInfoOther
            infoImage={Attention}
            infoHeading="Audience"
            infoDesc="Face mask and social distancing are mandatory outside the car." 
            infoTime={""}        
          />
        </div>

        <div className="description-container mb-14">
          <h3 className="text-[20px] text-[#1B1B25] font-bold pb-2">Description</h3>
          <p className="text-[16px] text-[#1B1B25]">     
            Drive-In Senja memberikan retro drive-in experience yang dikemas secara modern. Penggunaan transmisi radio kit, mengintegrasikan suara film ke dalam radio mobil, ditambah proyektor resolusi tinggi yang menyediakan pengalaman visual terbaik. Acara ini merupakan sarana yang aman untuk menghabiskan waktu bersama keluarga, pasangan, maupun komunitas
          </p>
        </div>

        <div className="terms-container mb-[286px]">
          <select name="terms" className="w-full p-4 border-[1px] border-[#828282]" id="TermsCondition">
            <option>Terms & Condition</option>
          </select>
        </div>

        {/* <div className="event-time-container flex">
          <div className="event-time-duration flex gap-5 w-full">
            <div className="duration-image w-[45px]">
              <Image src={Duration} alt="Duration" width={45} height={45} />
            </div>
            <div className="duration-detail w-[125px]">
              <h4 className="text-[20px] text-[#1B1B25] font-bold">Duration</h4>
              <p className="text-[#5C5C5F] text-[16px]">20.00 - 21.56 WIB</p>
              <p className="text-[#5C5C5F] text-[16px]">1 hour 56 minutes</p>
            </div>
          </div>
          <div className="event-time-duration flex gap-5 w-full">
            <div className="duration-image">
              <Image src={Audience} alt="Duration" width={45} height={45} />
            </div>
            <div className="duration-detail w-[125px]">
              <h4 className="text-[20px] text-[#1B1B25] font-bold">Audience</h4>
              <p className="text-[#5C5C5F] text-[16px]">
                This movie is suitable for audience aged 12  and above
              </p>
              
            </div>
          </div>
          <div className="event-time-duration flex gap-5 w-full">
            <div className="duration-image">
              <Image src={Attention} alt="Duration" width={45} height={45} />
            </div>
            <div className="duration-detail w-[125px]">
              <h4 className="text-[20px] text-[#1B1B25] font-bold">Attention</h4>
              <p className="text-[#5C5C5F] text-[16px]">
                Face mask and social distancing are mandatory outside the car.
              </p>
            </div>
          </div>
        </div> */}

      </div>

      
      
      <Footer />
    </>
  );
}
