"use client"
import Image from "next/image";
import QuoteRocketImg from "@/public/imgs/quote-rocket.png";
import GroupImg from "@/public/imgs/Group8.png";
import GroupImg1 from '@/public/imgs/bgVector.png';
import Character from "@/public/imgs/Char7.png";
import Flow from "@/public/imgs/Flow.png";
import FlowMob from "@/public/imgs/FlowMob.png";
import Th1 from "@/public/imgs/th1.png"
import Th2 from "@/public/imgs/th2.png"
import GroupRocket from "@/public/imgs/GroupRocket.png"
import Char from "@/public/imgs/Char3.png";
import Char2 from "@/public/imgs/Char4.png";
import Char3 from "@/public/imgs/Char3.png";
import Char3Back from "@/public/imgs/Char3Back.png";

export default function Quote() {


  return (
    <>
    <section className="pt-12 md:pt-36 pb-16 relative overflow-hidden">
            <div className="container">
                <div className="flex flex-row ml-0 mb-4 md:mb-0 md:ml-40 md:space-x-32">
                <div className="char md:char1Q" data-state="forward">
    <Image
      src={Char3}
      alt="Char" 
      className="z-10 "
    />
  </div>
  <div className="hidden md:char1BackQ" data-state="backward">
    <Image
      src={Char3Back}
      alt="Char Back" 
      className="z-10"
    />
  </div>
                    <div className="char2">
                        <Image src={Char2} alt="Char2" className="" />
                    </div>
                </div>
                <h1 className="text-3xl lg:text-[70px] leading-none text-center text-stroke md:mr-20">
                    OUR LAYER 2 BLOCKCHAIN DESIGNED SPECIFICALLY FOR GAMING WHICH ENABLES
                    FAST AND SECURE TRANSACTIONS
                </h1>
                <div className="hidden md:block absolute top-[50%] -translate-y-[50%] -right-20 border-[3.5px] border-[#FFC300] rounded-full -z-20 max-lg:opacity-90 ">
                    <Image src={QuoteRocketImg} alt="img" width={300} height={300} />
                </div>
            </div>
        </section>
    
      
      <section id="features">
  <div className="container mt-24 mb-8 relative">
    <Image src={Character} alt="Char0" className="char0-animation absolute md:-top-36 lg:-top-36 lg-mr-52 md:-mr-52 -top-20 md:ml-0 lg:ml-0 ml-56 md:right-1/4 lg:right-1/3 md:h-36 lg:h-36 w-auto h-20" />
    <Image src={GroupImg} alt="Group" className="hidden md:block w-full" />
    <Image src={GroupImg1} alt="mobile" className="block md:hidden w-full"/>
  </div>
</section>

      
      <section id='ecosystem'>
  <div className="container mt-24 relative">
  <h1 className="text-stroke text-4xl lg:text-[81px] lg:leading-normal mt-[96px] text-center md:mr-24">
        Joystix Development Architecture
          </h1>
          <Image src={GroupRocket} alt="" className="block md:hidden lg:hidden ml-72 -mt-12"/>
          <Image src={Th1} alt="Th1" className="md:absolute md:right-20 md:mr-20 md:top-0 w-auto h-20 hidden md:block" />
          <Image src={Th2} alt="Th2" className="md:absolute md:right-20 md:top-10 w-auto h-32 hidden md:block" />
          <Image src={Flow} alt="Flow" className="hidden md:block w-full pt-8" />
          <Image src={FlowMob} alt="Flow" className='md:hidden pt-4 pb-4 w-full' />

  </div>
</section>


      </>
  );
}
