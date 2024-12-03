'use client'
import { FC, useState } from "react";
import Image from "next/image";
import Login from '../../../../public/login.jpg'
import { useRouter } from "next/navigation";

const LoginScreen : FC = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    // nanti panggil API di sini ya
    
  };

  return (
    <div className="login-screen-container grid grid-cols-1 md:grid-cols-2 min-h-screen">
      {/* Form Section */}
      <div className="login-container px-8 md:px-24 flex flex-col justify-center">
        <div className="logo-container mb-5">
          <h1 className="text-2xl font-bold text-[#4F4CEE]">Karcis.com</h1>
        </div>
        <div className="title-container mb-10">
          <h2 className="text-[56px] font-extrabold">Log in</h2>
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <div className="input-container">
          <form onSubmit={handleLogin} className="flex flex-col gap-3">
            <div className="input">
              <input
                type="email"
                placeholder="Email address"
                className="w-full border-[1px] border-[#828282] py-5 px-4 text-[14px] focus:outline-none focus:border-[#4F4CEE] transition"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Email address"
              />
            </div>
            <div className="input">
              <input
                type="password"
                placeholder="Password"
                className="w-full border-[1px] border-[#828282] py-5 px-4 text-[14px] focus:outline-none focus:border-[#4F4CEE] transition"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                aria-label="Password"
              />
            </div>
            <div className="button">
              <button
                type="submit"
                className="bg-[#4F4CEE] rounded-[4px] py-5 px-4 text-[16px] font-bold text-white w-full hover:bg-[#3e3bbf] transition"
              >
                Log in
              </button>
            </div>
            <p className="self-end text-blue-600 cursor-pointer hover:underline">Forgot your password?</p>
          </form>
        </div>
        
        <div className="signup-container mt-24">
          <p className="text-[16px] text-blue-600 font-bold cursor-pointer hover:underline" onClick={() => router.push('/auth/signup')}>
            Sign up
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="login-image flex justify-center items-center md:order-2">
        <Image src={Login} alt="Login" className="rounded-lg" />
      </div>
    </div>
  );
};

export default LoginScreen