"use client"
import Image from "next/image";
import Link from "next/link";
import JoystixLogo from "@/public/imgs/logo.png";
import { navLinks, socials } from "@/constants";
import React, { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const NavLinks = () => {
    return (
      <ul className="flex flex-col md:flex-row gap-4 md:gap-16">
        {navLinks.map((item, index) => (
          <li key={index} className="text-[32px] text-[#00C395] font-fontVT">
            <Link href={item.link}>{item.label}</Link>
          </li>
        ))}
      </ul>
    );
  };
  
  const Socials = () => {
    return (
      <ul className="flex justify-center items-center gap-4 mt-4">
        {socials.map((item, index) => (
          <li key={index}>
            <Link href={item.link} target="_blank" rel="noopener noreferrer">
              <Image
                src={item.image}
                alt="Social Icon"
                width={32}
                height={32}
              />
            </Link>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <header className="absolute inset-x-0 top-0 py-2 z-50">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <Image src={JoystixLogo} alt="Joystix Logo" className="w-20 h-auto" />
        </Link>
        <nav className="hidden lg:flex items-center gap-20">
          <NavLinks />
          <Socials />
        </nav>
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <Image src="/imgs/hamburger.png" alt="Menu" className="w-10 h-10" width={10} height={10}/>
          </button>
          <div className={`absolute top-full right-0 bg-white shadow-lg rounded-lg ${isOpen ? 'block' : 'hidden'} p-4`}>
            <NavLinks />
            <Socials />
          </div>
        </div>
      </div>
    </header>
  );
}
