"use client";
import React, { ReactNode, useState } from "react";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import SignUpImage from "/public/Sign Up Image.png";

const Contact = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [mail, setMail] = useState("");

  const contactData = async () => {
    if (name == "" || contact == "" || mail == "") {
      alert("all feilds are required");
    } else {
      const api = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({ name, mail, contact }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      setName("");
      setContact("");
      setMail("");
    }
  };
  return (
    // main div
    <div className="bg-back-blue flex flex-col justify-center  py-9">
      <div className=" text-5xl md:text-8xl text-white font-extrabold flex justify-center py-28  ">
        <h1 className="">
          <Typewriter
            options={{
              strings: ["Contact Us"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
      </div>

      <div className="flex flex-wrap justify-center items-center p-3 ">
        {/* input section */}
        <div className="w-auto lg:w-1/2 flex flex-col  ">
          <div className="max-w-md text-white   p-4  space-y-4">
            {/* name */}
            <div>
              <input
                placeholder="Name"
                required
                type="text"
                className="w-72 md:w-96  h-10 rounded-md  border-2 border-solid border-regal-green bg-transparent text-white p-2 font-medium"
                value={name}
                onChange={(e: any) => setName(e.target.value)}
              />{" "}
            </div>

            {/* email */}
            <div>
              <input
                placeholder="Contact"
                required
                type="number"
                minLength={15}
                className="w-72 md:w-96  h-10 rounded-md  border-2 border-solid border-regal-green bg-transparent text-white p-2 font-medium"
                value={contact}
                onChange={(e: any) => setContact(e.target.value)}
              />{" "}
            </div>

            {/* Contact */}
            <div>
              <input
                placeholder="Email"
                required
                type="email"
                className=" w-72 md:w-96  h-10 rounded-md  border-2 border-solid border-regal-green bg-transparent text-white p-2 font-medium"
                value={mail}
                onChange={(e: any) => setMail(e.target.value)}
              />{" "}
            </div>

            <div>
              <button
                onClick={contactData}
                className="border-2 border-regal-green p-2 w-36 rounded-lg font-semibold hover:text-regal-green hover:transition-all hover:ease-in-out"
              >
                Submit
              </button>
            </div>
          </div>
        </div>

        {/* image contact */}
        <div>
          <Image src={SignUpImage} alt="SignUpImage" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
