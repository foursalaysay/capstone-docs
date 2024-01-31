'use client'

import Image from "next/image";

import hacker from '/public/hacker.svg'

// bg-gradient-to-l from-black to-blue-900

export default function Home() {
  return (
      <div className="w-50% h-screen bg-gradient-to-l from-black to-blue-900">
        <div className="flex flex-col items-center justify-center">
           <Image
           className=""
           src={hacker}
           height={500}
           width={500}
           objectFit="cover"
           objectPosition="center"
           alt="background"
           />
           <h1 className="text-[150px] font-black text-white absolute ">Mind<span className="text-blue-500">Scapetor</span></h1>
        </div>
      </div>
  );
}
