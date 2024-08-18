import { SquareCode ,Rocket,Terminal} from "lucide-react"


function Services() {
    return (
        <div className="w-[100%] h-[100%] bg-[#121212] pt[4rem] pb-[5rem] md:pt-[8rem]" id="services">
            <p className="text-white text-[28px] sm:text[33-px] md:text-[45px] font-bold uppercase text-center">
                my<span className="text-yellow-400">services</span>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 w-[80%] mx-auto text-white mt-[4rem] items-center gap-[3rem] " >
                <div className="bg-red-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase text-center font-semibold p-[2rem]" data-aos="fade-right ">
                    <SquareCode className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
                    <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">Frontend </h1>
                    <p className="text-[15px] text-[#d3d2d2] font-normal">
                    Expertise in React, Next.js, Tailwind CSS, and Bootstrap to create visually appealing, responsive, and intuitive UIs.
                    </p>
                </div>
                <div>
                <div className="bg-orange-700 hover:scale-110 transform transition-all duration-300  uppercase text-center font-semibold p-[2rem]" data-aos="fade-up" >
                    <Rocket  className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
                    <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">Backend </h1>
                    <p className="text-[15px] text-[#d3d2d2] font-normal">
                    Strong knowledge in building robust RESTful APIs and handling databases using MongoDB MY SQL Post Gress.
                    </p>
                </div>
                </div>

                <div>
                <div className="bg-blue-700 hover:scale-110 transform transition-all duration-300 hover:rotate-6 uppercase text-center font-semibold p-[2rem]" data-aos="fade-left">
                    <Terminal className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
                    <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">FullStack </h1>
                    <p className="text-[15px] text-[#d3d2d2] font-normal">
                    Proficient in integrating front and back-end technologies to create fully functional and optimized web applications.
                    </p>
                </div>
                </div>

            </div>

        </div>
    )
}

export default Services
