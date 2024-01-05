import React from "react";
import { LuFacebook } from "react-icons/lu";
import { FiInstagram } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import Image from "next/image";
import heroimage from "/public/Image  --dalle.png";
import Link from "next/link";
import Solution from "@/app/solutionpage/page"
import Joinweb from "@/app/joinpage/page";

const Hero = () => {
  return (
    <div className="pt-14">

    
    <div className="flex flex-col md:flex-row md:justify-evenly justify-center items-center  bg-back-blue p-9 lg:h-screen ">
      <div className="lg:w-1/2  ">
        <div className="text-center md:text-left text-white">
          <h1 className="font-bold tracking-wider text-3xl md:text-4xl  lg:text-5xl">
            Welcome to Your <br />
            <span className="text-regal-green animate-pulse"> WEB </span>
            Solution
          </h1>
          <p className="mt-2 text-lg lg:text-xl">Discover a partner for your web needs.</p>{" "}
        </div>

        {/* icon */}

        <div className="mt-2 flex justify-center md:justify-start">
          <Link href="/contact">
            <button className="text-white font-bold border border-regal-green p-2 w-36 rounded-lg hover:text-regal-green hover:transition-all hover:ease-in-out lg:hidden sm:block">
              Contect
            </button>
          </Link>
        </div>

        <div className="flex justify-center md:justify-start  text-2xl gap-4 py-4  cursor-pointer">
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

      <div>
        <div>
          <Image src={heroimage} alt="imgflex1 "  />
        </div>
      </div>

    </div>


    <Solution/>
    <Joinweb/>
    </div>

  );
};

export default Hero;
