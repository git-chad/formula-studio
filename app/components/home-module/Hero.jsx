import Image from "next/image";
import React from "react";
import heroGif from "@/public/fs-hero-gif.gif";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="hero-container w-full flex flex-col text-fswhite">
      <div className="title-container flex justify-center items-center">
        <p className="text-8xl 2xl:text-9xl font-black bg-green-gradient bg-clip-text text-transparent">{`{`}</p>
        <h1 className="text-8xl 2xl:text-9xl font-bold">Formula Studio</h1>
        <p className="text-8xl 2xl:text-9xl font-black bg-green-gradient bg-clip-text text-transparent">{`}`}</p>
      </div>
      <section className="flex flex-col 2xl:flex-row justify-center items-center">
        <Image src={heroGif} width={0} className="py-16 2xl:py-32 px-8 max-w-[900px] 2xl:max-w-[1200px]" />

        <div className="info-container flex flex-col space-y-16 text-start">
          <h2 className="text-4xl max-w-[25ch]">
            Code formulas in{" "}
            <b className="font-bold bg-green-gradient bg-clip-text text-transparent">
              Google Sheets
            </b>{" "}
            with ChatGPT.
          </h2>
          <h3 className="text-2xl max-w-[50ch]">
            The same programming experience as with Javascript or Python, but on spreadsheets.
          </h3>
          <div className="flex flex-col space-y-3">
            <Link href='/login' className="border-fsapple border rounded-lg px-6 py-3 self-start text-xl">Start free trial</Link>
            <p className="text-[10px]">*Only $5.99 per month <br/> after your trial ends</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
