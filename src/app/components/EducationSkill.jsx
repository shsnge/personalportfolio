

import { Education } from "../Data/EducationSkills"
function EducationSkills() {
    return (
        <div className="w-[100%] h-[100%] bg-[#121212] pt[4rem] pb-[5rem] md:pt-[8rem]" id="skills">
            <p className="text-white text-[28px] sm:text[33-px] md:text-[45px] font-bold uppercase text-center">
                education & <span className="text-yellow-400">skills</span>
            </p>
            <div className="w-[80%] pt-[4rem] pb-[2rem] grid grid-cols-1 md:grid-cols-2   gap-20 mx-auto">


                {
                    Education.map((item, i) => (
                        <div className="" key={i}>

                            <div className="p-3 border-2 border-[#55e6e5] text-[#55e6e5] w-[150px] text-center">
                                <span className="font-semibold">{item.duration}</span>

                            </div>
                            <div className="py-5 uppercase text-3xl font-bold text-white">
                                <h1 >{item.skill}</h1>
                            </div>
                            <div className="py-5 text-[17px] font-normal text-justify text-gray-200">
                                <p>{item.detail}</p>
                            </div>
                        </div >
                    ))
                }








            </div>

        </div>
    )
}

export default EducationSkills
