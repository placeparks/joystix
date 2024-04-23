"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
import cat from '@/public/nftassets/cat.png';
import CharA from '@/public/nftassets/CharB.png';
import CharB from '@/public/nftassets/Drag.png';
import Component2 from '@/public/writtingComponents/Component6.png';
import styles from './inassetnfts.module.css';
import AOS from "aos";
import "aos/dist/aos.css";

const Inassetnfts = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={styles.pageLayout}>
      <section className="text-white overflow-hidden">
        <div className="grid max-w-screen-xl px-4 py-4 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">

          <div className="mr-auto place-self-center lg:col-span-7 order-1 md:order-none">
            <div className="">
              <div className='hidden md:block -mt-64'>
              <h1 className="text-stroke text-4xl lg:text-[64px] lg:leading-normal">
         NFTs For In-Game Assets
        </h1>
              </div>
              <div className='block md:hidden'>
    <Image src={Component2} alt='text' />
    <div className='flex justify-center mt-8 mb-8'>
        <Image src={cat} alt="Cat Image" layout="fixed" width={200} height={200} />
    </div>
</div>

            </div>
            
            <div className='order-3 md:order-none'>
              <p className="text-1xl md:text-2xl border-t-2 border-red-500 pt-5 pb-16">
                <span className="text-red-500 text-3xl">&#9632;</span>{" "}
                Non-Fungible Tokens (NFTs) are implemented using Joystix&apos;s smart contracts to represent unique in-game assets. This includes items, characters, or achievements. NFTs ensure ownership and scarcity of virtual assets, allowing gamers to trade or sell their in-game possessions securely on the blockchain.
              </p>
            </div>
          </div>

          <div className='flex flex-col'>
            <div className="relative lg:-mr-96 lg:col-span-5">
              <div className="hidden md:block">
              <div className=''>
                  <Image src={CharA} alt="mockup" className='-mt-20 animate-character'/>
                  <Image src={CharB} alt="mockup" className='-mt-60 ml-40 animate-drag' />
                  </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 lg:flex lg:justify-end lg:items-end lg:relative order-2 md:order-none">
            <div className="lg:bottom-0 lg:right-0">
              <Image src={cat} alt="mockup" objectFit="contain" className='md:mt-44 lg:mt-44 hidden md:block'/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Inassetnfts;
