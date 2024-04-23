import React from 'react'
import Cloud from "@/public/imgs/Cloud.png";
import Image from 'next/image';
const blog = () => {
  return (
      <div>

      <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center relative px-4">
      <Image
          src={Cloud}
          alt=""
          className="hidden md:block animate-cloud"
        />
              <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-30"
style={{ backgroundImage: `url('/imgs/hero-bg.png')` }}>
</div>
    <h1 className="text-5xl md:text-7xl text-stroke lg:leading-normal mb-8 z-10">Coming Soon</h1>
    <p className="text-white text-xl md:text-2xl">
        We&apos;re working hard to bring you something amazing. Stay tuned!
    </p>
</div>
    </div>
  )
}

export default blog
