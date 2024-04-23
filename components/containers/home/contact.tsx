import React from "react";
import Image from "next/image";
import Frames from "@/public/contact/Frames.png";
import Bricks from "@/public/contact/bricks.png";
import Boo from "@/public/imgs/Boo.png";
import Char2 from "@/public/contact/Char2.png";
import Heading from "@/public/writtingComponents/Component9.png";
import Arrow from "@/public/contact/Arrow.png";
import MobFrame from "@/public/contact/MobFrame.png";

const Contact = () => {
  return (
    <div className="flex flex-col items-center pt-8 h-screen px-8 md:px-0">
<div className="relative md:-mr-44">
  <div className="flex justify-end">
    <div className="relative z-0">
      <Image src={Bricks} alt="Bricks" className="hidden md:block h-10 w-20 mt-14"/>
      <Image src={Boo} alt="Boo" className=" absolute top-0 z-10 float-animation"/>
          </div>
          <Image src={Boo} alt="Boo" className="block md:hidden float-animation"/>
    <Image src={Char2} alt="Char2" height={90} className="slide-animation self-end ml-4"/>
  </div>
</div>




      <div className="w-full max-w-3xl border-4 border-yellow-500 rounded-lg overflow-hidden flex md:flex-row">
        <div className="md:w-2/3 hidden md:block lg:block">
          <Image
            src={Frames}
            alt="Frames"
            layout="responsive"
            width={1241}
            height={728}
          />
        </div>

        <div className="md:w-full flex flex-col justify-between rounded-r-lg">
          <div>
            <Image src={Heading} alt="Start A Project" />
            <hr className="border-t-2 border-yellow-500 my-4" />

            {/* Form */}
            <form className="space-y-4 ml-8 hidden md:block lg:block">
              <div className="flex items-center space-x-4 -mb-12">
                <input
                  className="w-2/4 border border-gray-300 bg-transparent"
                  type="email"
                  placeholder="Enter Your E-mail"
                />
                <button className="w-32 h-32 flex items-center justify-center">
                  <Image src={Arrow} alt="Submit" className="mt-12" />
                </button>
              </div>
              <textarea
                className="w-2/4 p-2 border border-gray-300 bg-transparent"
                placeholder="Write a Message"
              />
            </form>

            {/* For Mobile */}
            <form className="block sm:hidden">
              <button>
                <Image src={MobFrame} alt="mobile button"  className="w-screen" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
