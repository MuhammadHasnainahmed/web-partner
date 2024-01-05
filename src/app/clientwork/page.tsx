"use client";
import Image from "next/image";
import Link from "next/link";
import { obj } from "../mock";
import Typewriter from "typewriter-effect";

const clientwork = () => {
  const filtObj = obj.filter((e: any) => {
    return e.type == "web client";
  });

  return (
    <div className="text-white bg-back-blue h-screen flex flex-col justify-center">
      <div className=" text-5xl md:text-6xl lg:text-8xl text-white font-extrabold flex justify-center py-28  ">
        <h1 className="">
          <Typewriter
            options={{
              strings: ["Client Work"],
              autoStart: true,
              loop: true,
              delay: 300,
              cursor: "",
            }}
          />
        </h1>
      </div>
      <div className="flex flex-wrap justify-center gap-9">
        {filtObj.map((e: any, index: number) => {
          return (
            <Link key={index} href={e.link}>
              <div
                className={`${e.bgColor} relative  w-[300px] h-[400px] flex items-center justify-center rounded-md cursor-pointer hover:opacity-50 hover:transition-opacityhover:opacity-50 hover:transition-opacity `}
              >
                <Image
                  src={e.img}
                  alt="qrcode"
                  className="w-[220px] h-[320px] rounded-md overflow-hidden hover:w-[260px] hover:h-[340px] transition-all"
                />
              </div>
            </Link>
          );
        })}{" "}
      </div>
    </div>
  );
};

export default clientwork;
