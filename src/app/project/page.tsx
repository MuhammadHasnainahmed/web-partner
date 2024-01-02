'use client'
import React from "react";
import Image from "next/image";
import webdeve from "/public/web-deve.png";
import webdes from "/public/web-des.png";
import Link from "next/link";

import Typewriter from "typewriter-effect";

const project = () => {
  return (
    <div className="bg-back-blue  flex flex-col justify-center lg:h-screen">
      <div className=" text-7xl md:text-8xl text-white font-extrabold flex justify-center py-28  ">
        <h1 className="">
          {/* <span className="text-regal-green">P</span>
          roject */}
          <Typewriter
        options={{
            strings: ['Project'],
            autoStart: true,
            loop: true,
        }}
        />
        </h1>
      </div>

      <div className="flex flex-wrap justify-center gap-12 p-2">
        <div className="bg-white w-[460px] h-[500px] rounded-lg">
          <div className="flex justify-center text-white text-3xl font-medium p-6 bg-regal-green rounded-t-lg">
            <h1>Web-Developing</h1>
          </div>

          <div  className="flex flex-col justify-center items-center py-8 ">
            <div>
              <Image src={webdeve} alt="imgflex1 " className="w-[250px]"/>
            </div>

            <div className="mt-4">
            <Link href={"project/web-dev"}>
              <button className="text-regal-green font-bold border-2 border-regal-green p-2 w-36 rounded-lg hover:text-regal-green hover:transition-all hover:ease-in-out ">
                See Now
              </button>
            </Link>
            </div>
          </div>
        </div>

        <div className="bg-white w-[460px] h-[500px] rounded-lg">
          <div className="flex justify-center text-white text-3xl font-medium p-6 bg-regal-green rounded-t-lg">
            <h1>Web-Designing</h1>
          </div>

         <div className="flex flex-col justify-center items-center py-8 ">
            <div>
              <Image src={webdes} alt="imgflex1 " className="w-[370px]" />
            </div>
            
            <div className="mt-4">
            <Link href={"project/web-des"}>
            
              <button className="text-regal-green font-bold border-2 border-regal-green p-2 w-36 rounded-lg hover:text-regal-green hover:transition-all hover:ease-in-out ">
                See Now
              </button>
            </Link>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default project;
