import Image from "next/image"



function Project() {
    return (
        <div className="w-[100%] h-[100%] bg-[#121212] pt[4rem] pb-[5rem] md:pt-[8rem]" id="project">
            <p className="text-white text-[28px] sm:text[33-px] md:text-[45px] font-bold uppercase text-center ">
                pro <span className="text-yellow-400">ject</span>
            </p>
            <div className="w-[80%] pt-[4rem] pb-[2rem]  mx-auto">

<div className=" grid grid-cols-1 md:grid-cols-3 items-center gap-5">
   
    <div className="w-full md:w-[400px] h-[400px] relative  " data-aos="zoom-in-up">
    <Image src="/p1.png" alt="img" fill sizes="30vw" className="object-fill h-full w-full"/>
    </div> 
    <div className="w-full md:w-[400px] h-[400px] relative "data-aos="zoom-out">
    <Image src="/p2.png" alt="img" fill sizes="30vw" className="object-fill h-full w-full"/>
    </div>
    <div className="w-full md:w-[400px] h-[400px] relative " data-aos="zoom-in-down">
    <Image src="/p3.png" alt="img" fill sizes="30vw" className="object-fill h-full w-full"/>
    </div>
</div>
             







            </div>

        </div>
    )
}

export default Project
