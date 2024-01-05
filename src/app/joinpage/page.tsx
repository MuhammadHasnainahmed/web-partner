import React from 'react'
import Image from "next/image";
import device3 from "/public/Device (3).png";
import { LuFacebook } from "react-icons/lu";
import { FiInstagram } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";

const Joinweb = () => {
  return (
    <div className='bg-back-blue'>
       <div className='flex flex-wrap justify-center items-center p-6'>
       <Image src={device3} alt="Device3" />
        
        <div>
           <div className='text-white text-center md:text-left'>
              <h1 className='font-bold text-[25px] md:text-[30px] lg:text-[51px] lg:max-w-sm '>Join Our Web Network</h1>
              <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
           </div>

           <div className="flex  justify-center md:justify-start text-2xl gap-4 py-4  cursor-pointer">
          <div className=" border border-regal-green hover:border-2 hover:border-white p-2 rounded-full text-white hover:text-regal-green transition-all ">
            <LuFacebook />
          </div>

          <div className=" border border-regal-green hover:border-2 hover:border-white p-2 rounded-full text-white hover:text-regal-green transition-all">
            <FiInstagram />
          </div>

          <div className=" border border-regal-green hover:border-2 hover:border-white p-2 rounded-full text-white hover:text-regal-green transition-all">
            <FiTwitter />
          </div>
        </div>

        </div>

       </div>
    </div>
  )
}

export default Joinweb
