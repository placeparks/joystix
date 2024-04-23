"use client"
import React, {useState} from 'react'
import Image from 'next/image'
import Component from '@/public/writtingComponents/Component4.png'
import Vector from '@/public/events/Vector.png'
import btnH from '@/public/events/DiscordBtn2.png'
import btn from '@/public/events/DiscordBtn.png'
import Vector2 from '@/public/events/Vector2.png'

const Events = () => {
  const [hover, setHover] = useState(false);

  return (
    <section className="bg-none md:bg-[url('/events/FrameEvents.png')] bg-cover bg-center p-4 mt-12">
    <div className="grid gap-4 max-w-6xl mx-auto p-4 sm:grid-cols-1 md:grid-cols-2">
      <div className="align-center mt-[-3%] md:mt-0">
         <div >
            <Image src={Component} alt='text' layout="responsive" width={650} height={365} className='mb-12' />
            <Image src={Vector2} alt="for mobile" className="block md:hidden mb-12 -mt-8" layout="responsive" />

                  </div>
                      <div className="mt-[-35px]">
            <div className="border-t-2 border-[#FC3500] my-4"></div>
            <p className="text-white mb-2">
            <span style={{ color: "red", fontSize: "30px" }}>&#9632;</span>{" "}
              Connect, collaborate and grow together in a supportive network of passionate individuals.
            </p>
            <p className="text-white mb-2">
            <span style={{fontSize:'30px', color:'red'}}>&#9679;</span>{" "}
              Get feedback from peers.
            </p>
            <p className="text-white mb-2">
            <span style={{fontSize:'30px', color:'red'}}>&#9679;</span>{" "}
              Become a Shortcut expert, help others do the same.
            </p>
            <p className="text-white mb-2">
            <span style={{fontSize:'30px', color:'red'}}>&#9679;</span>{" "}
              Spend time in one of the only places where no one will fall asleep if you say the word DevOps.
            </p>
          </div>
          <a href="#"  onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}>
            <Image src={hover ? btnH : btn} alt='Join our Discord' layout="fixed" width={250} height={250} className='mt-12' />
          </a> 
        </div>
        <div className="mt-4 md:mt-[-13%]">
          <Image src={Vector} alt="for web" className="hidden md:block" layout="responsive" />
        </div>   
      </div>
    </section>
  )
}

export default Events