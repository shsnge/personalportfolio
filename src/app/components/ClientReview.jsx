import { review } from "../Data/ClientReview"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

function ClientReview() {
    return (
        <div className="w-[100%] h-[100%] bg-[#121212] pt[4rem] pb-[5rem] md:pt-[8rem]" id="client">
            <p className="text-white text-[28px] sm:text[33-px] md:text-[45px] font-bold uppercase text-center">
                client & <span className="text-yellow-400">review</span>
            </p>
            <div className="w-[80%] pt-[4rem] pb-[2rem] grid grid-cols-1    gap-20 mx-auto">


            <div className="w-full md:w-[80%] mx-auto  ">
     <Carousel className="w-full  border-0 outline-none">
      <CarouselContent className="  border-0 outline-none">
        {review.map((item,i)=>(
          <CarouselItem key={i}>
          
            <Card className="border-0 border-black outline-none w-full md:w-4/5 mx-auto">
              <CardContent className="flex flex-col border-0 outline-none   items-center justify-center bg-[#121212] gap-4 ">
                <Image src={item.imgage} alt="img" width={100} height={100} className="rounded-full p-1"/> 
                 <span className="text-xl font-semibold text-yellow-400 flex  gap-1"><Star/><Star/><Star/><Star/><Star/></span>
                <span className="text-xl font-semibold text-white uppercase">{item.name}</span>
                <span className="text-xl font-semibold text-gray-400 uppercase">{item.role}</span>
                <span className="text-xl font-semibold text-gray-400 text-center">{item.comment}</span>
              </CardContent>
            </Card>
         
        </CarouselItem>
        )) 
          
        }
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
     </div>








            </div>

        </div>
    )
}

export default ClientReview
