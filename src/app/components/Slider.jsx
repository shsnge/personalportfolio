import { Education } from "../Data/EducationSkills"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
function Slider() {
  return (
    <div className='text-center w-3/4 mx-auto'>
      <h1 className="text-3xl">hu skuder</h1>
      
     <div className="w-full md:w-[80%] mx-auto  ">
     <Carousel className="w-full h-[400px]">
      <CarouselContent >
        {Education.map((item,i)=>(
          <CarouselItem key={i}>
          <div className="">
            <Card className="border-none outline-none w-full md:w-4/5 mx-auto">
              <CardContent className="flex flex-col  h-[400px] items-center justify-center  ">
                <Image src="/zeshan.PNG" alt="img" width={100} height={100}/>
                <span className="text-xl font-semibold">{item.duration}</span>
                <span className="text-xl font-semibold">{item.skill}</span>
                <span className="text-xl font-semibold">{item.detail}</span>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        )) 
          
        }
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
     </div>
    
    </div>
  )
}

export default Slider
