import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import PaymentSuccess from '../../../public/payment-success.png'


export default function PaymentCompleted() {
  return (
    <>
      <Navbar />
      <div className="content-container flex flex-col justify-center items-center py-[168px]">
        <div className="title-container border-[2px] border-[#4F4CEE] py-[10px] px-[40px] shadow-custom-purple">
          <h3 className="text-[48px] text-[#4F4CEE] font-bold">Completed!</h3>
        </div>
        <div className="image-container">
          <Image src={PaymentSuccess} alt="payment-success" />
        </div>
        <div className="confirmation-container text-center py-[30px]">
          <p className="text-[24px] font-bold">Tickets have been sent to</p>
          <p className="text-[#4F4CEE] text-[20px]">rachelgreen@gmail.com</p>
        </div>
        <div className="problem-container py-[30px] text-center">
          <p className="text-[16px] pb-[19px]">Haven’t received tickets yet?</p>
          <button className="border-[1px] border-[#4F4CEE] rounded-[4px] py-[10px] px-4 text-[14px] text-[#4F4CEE]">Resend Tickets</button>
        </div>
        <div className="contact-container text-center py-[60px]">
          <p className="pb-6">Having trouble receiving the tickets?</p>
          <div className="flex text-[#4F4CEE]">
            <div className="contact px-4">
              <p>+62 21 1234 9876</p>
            </div>
            <div className="contact px-4">
              <p>karcis@karcis.com</p>
            </div>
          </div>
        </div>

        
      </div>
      
      <Footer />
    </>
  );
}
