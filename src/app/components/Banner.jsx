"use client"

import Image from "next/image"
import { Download, Play } from "lucide-react"
import TextAnimation from "./TextAnimation"
import Link from "next/link"

function Banner() {
    return (
        <div className="h-[100vh] bg-[url('/banner.jpg')] bg-cover bg-center " id="home" >

            <div className=" w-[80%] h-[100%] mx-auto flex justify-between font-primary gap-10 flex-col md:flex-row mt-[6%] py-32">
                <div className=" w-full md:w-1/2 flex flex-col justify-center gap-7 mt-10 h-[400px] ">
                    <h1 className="text-[2rem] md:text-[3rem] font-bold text-white" data-aos="fade-down-right">HI,I'M <span className="text-yellow-300" >ZEESHAN</span></h1>
                    <h1 className="text-4xl font-bold"><TextAnimation /></h1>
                    <p className="text-[#ffffff92]" data-aos="fade-right">I'm a passionate web developer with hands-on experience building dynamic and responsive web applications using React, Next.js, and MongoDB. My focus is on creating seamless user experiences with a clean, maintainable codebase, ensuring top-notch performance and scalability.</p>
                    <div className="flex items-center gap-5">

                        <Link 
                        download 
                        href="/Zeeshan Jabbar.pdf"
                         target="_blank"
                         alt="zeeshan abduljabbar"
                         rel="noopener noreferrer"
                        
                        >
                            <button className="bg-[#55e6e5] hover:bg-yellow-300 px-5 py-2  font-bold items-center flex gap-2" data-aos="fade-up-right" >DOWNLOAD CV<Download /> </button></Link>

                        {/* <div className="flex gap-3">
                            <Play className="w-[4rem] h-[4rem]font-bold text-[#55e6e5] hover:text-yellow-300" />
                            <h1 className="text-white">watch the video </h1>
                        </div> */}
                    </div>
                </div>

                <div className="w-1/2 hidden md:flex mt-10">
                    <div className="h-[500px] w-[500px] relative" data-aos="fade-down">
                        <Image src="/zeshan.PNG" fill className="h-[400px] w-[400px] rounded-full" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Banner
