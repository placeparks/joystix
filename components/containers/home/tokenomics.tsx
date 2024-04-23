import React from 'react'
import Image from "next/image";
import Token from '@/public/tokenomics/Tokenomics.png';
import v1 from '@/public/tokenomics/v1.png'
import v2 from '@/public/tokenomics/v2.png'
import v3 from '@/public/tokenomics/v3.png'
import v4 from '@/public/tokenomics/v4.png'
import v5 from '@/public/tokenomics/v5.png'
import v6 from '@/public/tokenomics/v6.png'
import v7 from '@/public/tokenomics/v7.png'
import remote from "@/public/imgs/remote2.png"
import remote2 from "@/public/imgs/remote3.png"


const Tokenomics = () => {
  return (
    <div className='px-12 pt-8'>
      <div className='flex justify-end space-x-36 md:space-x-52 '>
      <Image src={remote} alt="" priority className=' -mt-20 ' />
      <Image src={remote2} alt='' className=' md:-mt-32  -mt-36 '/>
      </div>
      <section >
          <h1 className="text-stroke text-6xl lg:text-[88px] lg:leading-normal">
         Tokenomics
        </h1>              <Image src={Token} alt='image' className='hidden lg:block md:block' />
              <div className=' block md:hidden lg:hiddenflex flex-col items-center text-center'>
  <Image src={v1} alt='' />
  <Image src={v2} alt='' />
  <Image src={v3} alt='' />
  <Image src={v4} alt='' />
  <Image src={v5} alt='' />
  <Image src={v6} alt='' />
  <Image src={v7} alt='' />
</div>

      </section>
      </div>
  )
}

export default Tokenomics
