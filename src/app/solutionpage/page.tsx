import React from "react";
import Image from "next/image";

import device from "/public/Device.png";
import device1 from "/public/Device (1).png";
import device2 from "/public/Device (2).png";

const Solution = () => {
  return (
    <div className="flex flex-col justify-center py-20">
      <div className="text-center text-regal-green space-y-3 py-6  ">
        <h1 className="font-bold text-4xl md:text-5xl">Why Choose Us</h1>
        <p className="text-sm">Lorem ipsum dolor sit amet consectetur</p>
      </div>

      <div className="flex flex-wrap justify-center gap-12 lg:gap-24 ">
        {/* box1 */}
        <div className="flex flex-col justify-center items-center   ">
          <Image src={device} alt="Device" />
          <div className="-mt-12 ">
            <div className="bg-regal-green text-white p-3 rounded-[20px] w-[280px] ">
              <p className="font-semibold text-lg">Web Expertise</p>
              <p className="text-sm">Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>

        {/* box2 */}
        <div className="flex flex-col justify-center items-center   ">
          <Image src={device1} alt="Device1" />
          <div className="-mt-12 ">
          <div className="bg-regal-green text-white p-3 rounded-[20px] w-[280px] ">
              <p className="font-semibold text-lg">Web Expertise</p>
              <p className="text-sm">Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>

        {/* box3 */}
        <div className="flex flex-col justify-center items-center   ">
          <Image src={device2} alt="Device2" />
          <div className="-mt-12 ">
          <div className="bg-regal-green text-white p-3 rounded-[20px] w-[280px] ">
              <p className="font-semibold text-lg">Web Expertise</p>
              <p className="text-sm">Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;
