
import { MapPinHouse,PhoneCall,Mail } from "lucide-react"

function Contaact() {
    return (

<div id="footer" className="w-[100%] h-[100%] bg-[#121212] pt[5rem] pb-[5rem] md:pt-[4rem] md:pb-[12rem]" >

<div className="w-[80%] pt-[2rem] pb-[2rem] grid grid-cols-1 md:grid-cols-3 gap-5 mx-auto">


    <div className="text-white flex  items-center gap-5 " data-aos="fade-right">
        <div className=" bg-[#55e6e5] h-[100px] w-[100px] rounded-full flex justify-center items-center">
        <MapPinHouse size={48} color="#000000" className="hover:rotate-180 transition-all duration-300"/>
        </div>
        <div>
            <h1 className="text-lg font-semibold uppercase">Add<span className="text-yellow-400">ress</span></h1>
            <p>Y 272 housing colony</p>
            <p>nankana sahib</p>
        </div>

    </div>



    <div className="text-white flex  items-center gap-5 " >
        <div className=" bg-[#55e6e5] h-[100px] w-[100px] rounded-full flex justify-center items-center">
        <PhoneCall size={48} color="#000000" className="hover:rotate-180 transition-all duration-300"/>
        </div>
        <div>
            <h1 className="text-lg font-semibold uppercase">Ph<span className="text-yellow-400">one</span></h1>
            <p>+92 301 4870303</p>
            <p>+92 313 4098664</p>
        </div>

    </div>

    <div className="text-white flex  items-center gap-5 " data-aos="fade-left">
        <div className=" bg-[#55e6e5] h-[100px] w-[100px] rounded-full flex justify-center items-center">
        <Mail size={48} color="#000000" className="hover:rotate-180 transition-all duration-300" />
        </div>
        <div>
            <h1 className="text-lg font-semibold uppercase">Send Us <span className="text-yellow-400">Email</span></h1>
            <p>zeshanabduljabbar@gmail.com</p>
            <p>shanibahe@gmail.com</p>
        </div>

    </div>









</div>

</div>


       


    )
}

export default Contaact
