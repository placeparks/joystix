"use client";
import HeroBgImage from "@/public/imgs/hero-bg.png";
import Image from "next/image";
import Frame1 from "@/public/imgs/Frame1.png";
import Frame2 from "@/public/imgs/Frame2.png";
import Char3 from "@/public/imgs/Char3.png";
import Char3Back from "@/public/imgs/Char3Back.png";
import Cloud from "@/public/imgs/Cloud.png";
import Cloud1 from "@/public/imgs/Cloud1.png";
import Boo from "@/public/imgs/Boo.png";
import ContactBtn from "@/public/imgs/ContactBtn.png";
import ContactBtn2 from "@/public/imgs/ContactBtn2.png";
import BuildBtn from "@/public/imgs/BuildBtn.png";
import BuildBtn2 from "@/public/imgs/BuildBtn2.png";
import HeroImg from "@/public/imgs/Hero.png";
import Btn1 from "@/public/imgs/Btn1.png";
import Btn2 from "@/public/imgs/Btn2.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

export default function Hero() {
  const [showEnhanced, setShowEnhanced] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    AOS.init();
  
    function handleAnimationIteration() {
      // Type assertion to HTMLElement
      const char1 = document.querySelector('.char1') as HTMLElement;
      const char1Back = document.querySelector('.char1Back') as HTMLElement;
      
      if (char1 && char1Back) {
        let animationIterationCount = Number(char1.getAttribute('data-iteration')) || 0;
        animationIterationCount++;
        
        // Set attribute for next iteration check
        char1.setAttribute('data-iteration', animationIterationCount.toString());
  
        // Toggle visibility based on the iteration count
        const isMovingForward = animationIterationCount % 2 === 1;
        char1.style.opacity = isMovingForward ? '1' : '0';
        char1Back.style.opacity = isMovingForward ? '0' : '1';
      }
    }
  
    // Assuming '.animation-area' is a class applied to a container element in your component
    const animationArea = document.querySelector('.animation-area');
    if(animationArea) {
      animationArea.addEventListener('animationiteration', handleAnimationIteration);
    }
  
    // Clean up event listeners
    return () => {
      if(animationArea) {
        animationArea.removeEventListener('animationiteration', handleAnimationIteration);
      }
    };
  }, []);
  

  return (
    <section className="relative min-h-[110vh] flex flex-col items-center justify-between rounded-[0px_0px_50px_50px] overflow-hidden md:bg-[linear-gradient(180deg,rgba(252,205,54,0.00)77.95%,rgba(219,0,255,0.82)100%)]">
      <Image
        src={HeroBgImage}
        alt="Background image"
        layout="fill"
        objectFit="cover"
        className="-z-10 hidden md:block"
      />
      <Image
        src={HeroImg}
        alt="Background image"
        layout="fill"
        objectFit="cover"
        className="-z-10 block md:hidden"
      />

      <div className="ml-52">
      <Image
          src={Cloud1}
          alt=""
          className="ml-80 mt-24 hidden md:block animate-clouds"
        />
        <Image
          src={Cloud}
          alt=""
          className="-mt-14 hidden md:block animate-cloud "
       style={{marginLeft:"100%"}}
        />
      </div>

      {/* Centered text */}
      <div className="z-20 text-center absolute w-full px-4 pt-4 mt-40 md:mt-12">
      <h1 className="text-stroke effect-shine text-5xl lg:text-[88px] lg:leading-normal mt-[96px]">
  WELCOME TO JOYSTIX
</h1>

        <h2 className="text-white text-2xl lg:text-5xl">
          Revolutionizing Gaming with Layer 2 Solutions
        </h2>

        {/* Email input and waitlist button */}
        <div className="flex justify-center mt-8 hidden md:flex">
        <div className="relative overflow-hidden border-b-2 border-purple-500">
    <input
      type="email"
      placeholder="Enter your Email"
      className="bg-transparent w-full py-2 px-4 focus:outline-none placeholder-gray-400"
    />
    <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-white to-transparent opacity-50" style={{ animation: 'movingLight 3s infinite linear' }}></div>
  </div>
          <a href="#"   onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}>
            <Image src={hover ? Btn2 : Btn1} alt="waitlist btn" />
          </a>
        </div>

        {/* Image buttons for mobile */}
        <div className="relative flex flex-col items-center justify-center mt-4 md:hidden gap-4">
      <div className="">
        <button
          onClick={() => setShowEnhanced(!showEnhanced)}
          className="relative w-full h-full"
          aria-label="Toggle building option"
        >
          {showEnhanced ? (
            <Image
              src={BuildBtn2}
              alt="Start Building Enhanced"
              width={200}
              height={60}
              unoptimized
            />
          ) : (
            <Image
              src={BuildBtn}
              alt="Start Building"
              width={200}
              height={60}
              unoptimized
            />
          )}
        </button>
      </div>
      <button aria-label="Contact us"  onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}>
        <Image src={hover ? ContactBtn2 : ContactBtn} alt="Contact Us" width={200} height={60} unoptimized />
      </button>
    </div>


        <div style={{ marginTop: "-15%" }}>
  <Image src={Boo} alt="" className="hidden md:block slide-right-animation" />
  <Image src={Boo} alt="" className="ml-32 -mt-14 hidden md:block slide-left-animation" />
</div>

      </div>

      {/* Arcade machines and characters */}
      <div className="container flex justify-between items-end px-4 lg:px-0 absolute -bottom-20 w-full max-w-none ">
        <Image
          src={Frame1}
          alt="Frame 1"
          className="z-10 justify-start -mb-20 hidden md:block"
          style={{ height: "42rem", width: "39rem", marginLeft: "-9%" }}
        />
<div className="animation-area flex absolute bottom-32 left-0 right-0 justify-center w-full max-w-none px-4 lg:px-20">
  <div className="char1 hidden md:block " data-state="forward">
    <Image
      src={Char3}
      alt="Char" 
      className="z-10 hidden md:block"
    />
  </div>
  <div className="char1Back hidden md:block " data-state="backward">
    <Image
      src={Char3Back}
      alt="Char Back" 
      className="z-10 hidden md:block"
    />
  </div>

          <div className="sprite hidden md:block ">
        
          </div>
        </div>
        <Image
          src={Frame2}
          alt="Frame 2"
          className="z-10 -mb-20 hidden md:block"
          style={{ height: "42rem", width: "39rem", marginRight: "-9%" }}
        />
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 w-full h-28 bg-gradient-to-b from-transparent to-black rounded-b-[50px]"></div>
    </section>
  );
}
