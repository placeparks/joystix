import React from "react";
import Image from "next/image";
import Map from "@/public/roadmap/RMap1.png";
import MapMob from "@/public/roadmap/RMap2.png";
import PacManAnimation from "@/components/shared/pacmanAnimation";

const Roadmap = () => {
  return (
    <div
      className="roadmapLayout flex flex-col bg-cover bg-center p-4 md:p-8"
      style={{ backgroundImage: `url(./roadmap/roadBg.png)` }}
    >
      <div className="flex flex-col sm:flex-row sm:items-center">
     <div className='sm:order-2 sm:ml-55p'>
  <PacManAnimation/>
</div>

        <div className="sm:order-1 mt-4 sm:mt-0">
          <h1 className="text-stroke text-6xl lg:text-[88px] lg:leading-normal">
            ROADMAP
          </h1>{" "}
        </div>
      </div>
      <div className="my-4">
        <hr className="border-red-500 border" />
      </div>
      <div className="my-4 mx-4 text-white flex flex-row justify-between">
  <p className="flex items-center">
    <span className="pb-8 md:pb-2" style={{ color: "red", fontSize: "30px" }}>&#9632;</span>{" "}
    Navigating the Future: Our Roadmap for Revolutionizing Gaming
  </p>
  <p className="flex items-center ml-4 ">
    2024
  </p>
</div>

      <div className="p-8 md:p-0">
        <Image src={Map} alt="Roadmap Map" className="hidden md:block pl-20 ml-12"/>
        <Image src={MapMob} alt="Roadmap Map" className="block md:hidden pl-8 pr-8"/>

      </div>
    </div>
  );
};

export default Roadmap;
