import { FC } from "react";

const Navbar: FC = () => {
  return (
    <div className="navbar-container border-b-[1px] border-[#DDDDDE] h-[74px] w-full flex justify-between items-center px-14">
      <div className="logo-container">
        <h1 className="text-2xl font-bold text-[#4F4CEE]">Karcis.com</h1>
      </div>
      <div className="nav-menu-container px-3">
        <ul className="flex items-center gap-[35px]">
          <li className="p-[10px]">Concerts</li>
          <li>Arts</li>
          <li>Conference</li>
          <li>Movies</li>
          <li>International</li>
        </ul>
      </div>
      <div className="nav-button-container px-3 py-4 flex items-center gap-[35px]">
        <button className="border-[1px] border-[#4F4CEE] rounded-[4px] py-[10px] px-4 text-[14px] text-[#4F4CEE]">Login</button>
        <button className="bg-[#4F4CEE] rounded-[4px] py-[10px] px-4 text-[14px] text-white">Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
