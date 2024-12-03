import { FC } from "react";
import Image from "next/image";
import Login from '../../../public/login.jpg'

const LoginScreen : FC = () => {
  return (
    <div className="login-screen-container grid grid-cols-2">
      <div className="login-container px-[150px] flex flex-col justify-center">
        <div className="logo-container">
          <h1 className="text-2xl font-bold text-[#4F4CEE]">Karcis.com</h1>
        </div>
        <div className="title-container">
          <h2 className="text-[56px] font-extrabold">Log in</h2>
        </div>
        <div className="input-container ">
          <form action="" className="flex flex-col gap-3">
            <div className="input ">
              <input type="text" placeholder="Email address" className="w-full border-[1px] border-[#828282] py-5 px-4 text-[14px]" />
            </div>
            <div className="input">
              <input type="text" placeholder="Password" className="w-full border-[1px] border-[#828282] py-5 px-4 text-[14px]" />
            </div>
            <div className="button">
              <button className="bg-[#4F4CEE] rounded-[4px] py-5 px-4 text-[16px] font-bold text-white w-full">Log in</button>
            </div>
            <p className="self-end">Forgot your password?</p>
          </form>
        </div>
        
        <div className="signup-container mt-24">
          <p className="text-[16px] text-blue-600 font-bold">Sign up</p>
        </div>
      </div>

      <div className="login-image">
        <Image src={Login} alt="Login" />
      </div>
    </div>
  );
};

export default LoginScreen