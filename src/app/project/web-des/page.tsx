"use client";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import Link from "next/link";
import { obj } from "../../mock";
const webDesigningProject = () => {
  const filtObj = obj.filter((e: any) => {
    return e.type != "web dev";
  });
  return (
    <div className="bg-back-blue py-11 text-white">
      <div className=" text-4xl md:text-6xl lg:text-8xl text-white font-extrabold flex justify-center py-28  ">
        <h1 className="">
          <Typewriter
            options={{
              strings: ["Web-Designing"],
              autoStart: true,
              loop: true,
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

export default webDesigningProject;
