"use client"
import Image from "next/image";
import IntroImg from "@/public/imgs/intro-img.png";
import IntroCoinImg1 from "@/public/imgs/intro-coin-1.png";
import IntroCoinImg2 from "@/public/imgs/intro-coin-2.png";
import { Rotate } from "@/components/shared/animation-wrappers";
import MobBtn from "@/public/imgs/MobBtn3.png"
import BtnH from "@/public/imgs/BtnRead2.png"
import Btn from "@/public/imgs/BtnRead.png"
import remote from "@/public/imgs/remote2.png"
import thunder from "@/public/imgs/thunder.png"
import Link from 'next/link';
import React, { useState } from 'react';

export default function Intro() {
  const [hover, setHover] = useState(false);
  return (
    <section id="about" className="container py-20 space-y-12">
      
      <div className="flex flex-row block md:hidden space-x-32 -mt-20">
      <Image src={remote} alt=""  />
      <Image src={thunder} alt=""/>

     </div>
      
      <h1 className="text-stroke text-3xl text-center md:text-left lg:text-[70px] lg:leading-none lg:w-3/4">
        Transforming Gaming Through The Integration Of Blockchain Technology
      </h1>

      {/* for mobile */}
      <div className="flex items-center justify-center relative block md:hidden">
          <div className="absolute right-0 lg:right-20 -top-0 lg:-top-32">
            <Rotate>
              <Image src={IntroCoinImg1} alt="img" className="h-12 w-12" />
            </Rotate>
          </div>
          <div className="left-0 -bottom-10 overflow-hidden mt-32">
            <Rotate rotateTime={15000}>
              <Image src={IntroCoinImg2} alt="img" className="h-12 w-12" />
            </Rotate>
          </div>
          <div className="bg-[rgba(0,255,240,0.40)] blur-[135px] rounded-[54%_46%_71%_29%/73%_40%_60%_27%] absolute inset-0 -z-20"></div>
          <Image src={IntroImg} alt="img" className="h-64 w-64" />
      </div>
      
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div className="md:-mt-4">
          <p className="text-white text-1xl md:text-2xl border-t-2 border-[#FC3500] pt-5">
          <span className="text-red-500 text-3xl">&#9632;</span>{" "}
            The integration of blockchain in gaming has evolved from basic
            tokenization to more complex systems involving decentralized
            applications (dApps) and Non-Fungible Tokens (NFTs). Joystix
            Blockchain provides transparency, ownership verification, and new
            economic models within the gaming industry.
          </p>

          <div className="mt-20 md:block md:justify-none flex justify-center">
      <Link href="https://amethyst-sound-orangutan-120.mypinata.cloud/ipfs/Qmc88rSziiCYesDhLdN12iNR1qJ1zsf9Sj9TvNoF8JPYMT" passHref target="_blank" rel="noopener noreferrer"   onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}>
          <Image src={hover ? BtnH : Btn} alt="Button" unoptimized height={300} width={300} />
      </Link>
    </div>
        </div>
           

         {/* for web */}
        <div className="hidden md:block flex left-14 items-center justify-center relative max-lg:py-16">
          <div className="absolute right-0 lg:right-20 -top-0 lg:-top-32">
            <Rotate>
              <Image src={IntroCoinImg1} alt="img" className="h-28 w-28" />
            </Rotate>
          </div>
          <div className="absolute left-0 -bottom-10 overflow-hidden p-2">
            <Rotate rotateTime={15000}>
              <Image src={IntroCoinImg2} alt="img" />
            </Rotate>
          </div>
          <div className="bg-[rgba(0,255,240,0.40)] blur-[135px] rounded-[54%_46%_71%_29%/73%_40%_60%_27%] absolute inset-0 -z-20"></div>
          <Image src={IntroImg} alt="img" />
        </div>
        {/* <button className="w-60 h-20 bg-blue-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="501"
            height="86"
            viewBox="0 0 501 86"
            fill="none"
            className=""
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M34 0H467V1H475V4H483V7H491V15H496V23H499V31H501V39V47V55H499V63H496V71H491V79H483V82H475V85H467V86H34V85H26V82H18V79H10V71H5V63H2V55H0V47V39V31H2V23H5V15H10V7H18V4H26V1H34V0ZM34 78H467V77H475V74H483V71H488V63H491V55H493V47V39V31H491V23H488V15H483V12H475V9H467V8H34V9H26V12H18V15H13V23H10V31H8V39V47V55H10V63H13V71H18V74H26V77H34V78Z"
              fill="#FC3500"
            />
          </svg>
          
        </button> */}
      </div>
    </section>
  );
}
