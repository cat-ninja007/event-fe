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
    <div className="relative flex items-center justify-center min-h-screen bg-gray-100">
      <Image src={Login} alt="Login" className="absolute inset-0 object-cover w-full h-full z-0" />
      <div className="relative z-10 p-8 bg-white rounded-lg shadow-md max-w-md w-full">
        <div className="logo-container mb-5">
          <h1 className="text-2xl font-bold text-[#4F4CEE]">Karcis.com</h1>
        </div>
        <div className="title-container mb-10">
          <h2 className="text-[36px] font-extrabold leading-none">Log in</h2>
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleLogin} className="flex flex-col gap-3">
          <input
            type="email"
            placeholder="Email address"
            className="w-full border-[1px] border-[#828282] py-5 px-4 text-[14px] focus:outline-none focus:border-[#4F4CEE] transition"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-label="Email address"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border-[1px] border-[#828282] py-5 px-4 text-[14px] focus:outline-none focus:border-[#4F4CEE] transition"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            aria-label="Password"
          />
          <button
            type="submit"
            className="bg-[#4F4CEE] rounded-[4px] py-5 px-4 text-[16px] font-bold text-white w-full hover:bg-[#3e3bbf] transition"
          >
            Log in
          </button>
          <p className="self-end text-blue-600 cursor-pointer hover:underline">Forgot your password?</p>
        </form>
        <p className="self-end mt-4">
          Don't have an account? 
          <a 
            className="text-[#4F4CEE] cursor-pointer hover:underline" 
            onClick={() => router.push('/auth/signup')}
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginScreen