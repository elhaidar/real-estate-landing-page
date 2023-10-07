"use client";

import Image from "next/image";
import { CgMenuRightAlt } from "react-icons/cg";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Sidebar from "./Sidebar";
import { TiWeatherPartlySunny } from "react-icons/ti";
import WeatherCard from "./card/WeatherCard";

const Navbar = ({ data }: { data: any }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showWeather, setShowWeather] = useState<boolean>(false);
  const sidebarRef = useRef<any>(null);

  useEffect(() => {
    // Add event listener to the document object
    document.addEventListener("mousedown", handleClickOutside);
    // Remove event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleClickOutside(event: MouseEvent) {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      // Clicked outside the side navigation bar, close it
      setIsOpen(false);
    }
  }

  const handleShowWeather = () => {
    if (showWeather) {
      setShowWeather(false);
    } else {
      setShowWeather(true);
    }
  };

  return (
    <nav className="w-full">
      <ul className="mx-8 lg:mx-32 flex justify-between items-center relative">
        <li className="flex items-center gap-16">
          <Link href="#">
            <div className="relative w-20 h-20">
              <Image
                src={"/vercel.svg"}
                alt="logo"
                object-fit="cover"
                fill={true}
              />
            </div>
          </Link>
          <ul className="hidden lg:flex justify-between gap-16">
            <li>
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="#">Rent</Link>
            </li>
            <li>
              <Link href="#">Sell</Link>
            </li>
            <li>
              <Link href="#">About</Link>
            </li>
          </ul>
        </li>
        <li className="flex items-center gap-6">
          <div className="flex items-center gap-6">
            <button onClick={handleShowWeather} className="z-20">
              <TiWeatherPartlySunny className="w-8 h-8" />
            </button>
            <div className="hidden lg:flex items-center gap-6">
              <button className="font-medium">Log in</button>
              <button className="bg-black text-secondary px-6 py-2 rounded-2xl">
                Create Account
              </button>
            </div>
          </div>
          <div className="lg:hidden flex items-center">
            {isOpen ? (
              <button onClick={() => setIsOpen(false)} className="">
                <CgMenuRightAlt className="w-8 h-8" />
              </button>
            ) : (
              <button onClick={() => setIsOpen(true)} className="">
                <CgMenuRightAlt className="w-8 h-8" />
              </button>
            )}
          </div>
        </li>
        <WeatherCard showWeather={showWeather} weather={data} />
        <Sidebar isOpen={isOpen} ref={sidebarRef} />
      </ul>
    </nav>
  );
};

export default Navbar;
