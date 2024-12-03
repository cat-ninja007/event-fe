'use client'
import { FC, useState } from "react";
import Image from "next/image";
import Login from '../../../../public/login.jpg'
import { useRouter } from "next/navigation";

const LoginScreen : FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add your sign-up logic here
    // Example: Call your sign-up API and handle response
    // If sign-up fails, setError('Email already in use');
    // If sign-up succeeds, redirect to the login page
  };
  return (
    <div className="sign-up-screen-container grid grid-cols-1 md:grid-cols-2">
      <div className="sign-up-container px-8 md:px-24 flex flex-col justify-center">
        <div className="logo-container mb-5">
          <h1 className="text-2xl font-bold text-[#4F4CEE]">Karcis.com</h1>
        </div>
        <div className="title-container mb-10">
          <h2 className="text-[56px] font-extrabold leading-none">Create an account</h2>
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <div className="input-container">
          <form onSubmit={handleSignUp} className="flex flex-col gap-3">
            <div className="input">
              <input
                type="text"
                placeholder="Name"
                className="w-full border-[1px] border-[#828282] py-5 px-4 text-[14px] focus:outline-none focus:border-[#4F4CEE] transition"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                aria-label="Name"
              />
            </div>
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
                Sign up
              </button>
            </div>
            <p className="self-end">
              Already have an account? 
              <a 
                className="text-[#4F4CEE] cursor-pointer hover:underline" 
                onClick={() => router.push('/auth/login')}
              >
                Sign In
              </a>
            </p>
          </form>
        </div>
      </div>

      <div className="sign-up-image flex justify-center items-center">
        <Image src={Login} alt="Sign Up" className="rounded-lg" />
      </div>
    </div>
  );
};

export default LoginScreen