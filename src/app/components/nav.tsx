"use client";
import React, { useState } from "react";
import { LuAlignJustify } from "react-icons/lu";
// import  cv  from "/public/burger.png";

import Link from "next/link";

const Nav = () => {
      
  const [open, setOpen] = useState(false);
  return (
    <div className=" flex justify-between items-center p-3 lg:p-5 bg-regal-green  fixed w-full top-0 z-10  ">
      {/* logo */}
      <div>
        <h1 className="text-2xl font-bold text-white cursor-none">
          <span className="text-back-blue ">WEB</span>
          PARTNERS
        </h1>
      </div>
      {/* hamburger */}
      <div
        className={open ? "absolute mx-auto w-2/3 md:w-3/6 h-auto top-24  rounded-md  bg-regal-green right-0 left-0  z-10   lg:hidden" : "hidden"}>
          {/* top border */}
          <div className="w-auto h-2 bg-white rounded-t-md">
          </div>
          <div className="flex flex-col justify-center items-center gap-5 p-3 text-white font-bold">

       <Link
            href={"/heropage"}
            className="hover:text-black hover:transition-all hover:ease-in-out"
            >
            Home
          </Link>

         

          
          <Link
            href={"/clientwork"}
            className="hover:text-black hover:transition-all hover:ease-in-out"
          >
            Client Work
          </Link>
          <Link
            href={"/project"}
            className="hover:text-black hover:transition-all hover:ease-in-out"
          >
            Porjects
          </Link>
         
          </div>
      </div>
      {/* hamburger */}

      {/* list item */}
      <div className="flex relative items-center text-white font-medium gap-7 text-xl">
        <div className=" hidden lg:flex  gap-6 ">
          <Link
            href={"/heropage"}
            className="hover:text-back-blue hover:transition-all hover:ease-in-out"
          >
            Home
          </Link>

         

          <Link
            href={"/clientwork"}
            className="hover:text-back-blue hover:transition-all hover:ease-in-out"
          >
            Client Work
          </Link>
          <Link
            href={"/project"}
            className="hover:text-back-blue hover:transition-all hover:ease-in-out"
          >
            Porjects
          </Link>
        </div>

        <div>
        <Link href={"/contact"}>
          <button className="bg-back-blue p-2 w-36 rounded-lg hover:text-regal-green hover:transition-all hover:ease-in-out sm:hidden lg:block">
            Contect
          </button>
        </Link>
        </div>
        <div>
           
      {/* <Link
         download="Example-PDF-document"
        target="_blank"
        rel="noreferrer"
        href={cv}
      > */}
    
        {/* </Link> */}
        </div>
        
        {/* hamburger */}
        <div
          className="sm:block lg:hidden"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <LuAlignJustify />
        </div>
      </div>
    </div>
  );
};

export default Nav;
