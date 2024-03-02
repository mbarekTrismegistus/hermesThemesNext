import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bentogrid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../@/components/ui/carousel"


export default function Projects() {
  return (
    <div className="projects d-flex flex-column justify-content-center">
        <strong className="text-center mb-5">Projects</strong>

        <h2 className='text-4xl text-center font-extrabold my-5'>
            Discover My Work
        </h2>

        <small className="mb-5 text-center">Check out some of my featured projects.</small>

        <BentoGrid className="mx-auto max-w-6xl my-5 pt-5 container">

            <BentoGridItem
                key={'1'}
                title={"Forum"}
                description={"kandcjdancnsdacbsd"}
                header={
                  <Carousel className="relative">
                    <CarouselContent className="">
                      <CarouselItem className="h-100 w-100"><Image src={"/dd1.png"} className="object-cover" width={300} height={300} layout="responsive"/></CarouselItem>
                      <CarouselItem className="h-100 w-100"><Image src={"/dd1.png"} className="object-cover" width={300} height={300} layout="responsive"/></CarouselItem>
                      <CarouselItem className="h-100 w-100"><Image src={"/dd1.png"} className="object-cover" width={300} height={300} layout="responsive"/></CarouselItem>
                    </CarouselContent>

                      <CarouselPrevious className="right-0"/>
                      <CarouselNext/>

                  </Carousel>
                }
                //   icon={item.icon}
                className={"md:col-span-3"}
            />
            <BentoGridItem
            key={'1'}
            title={<p className="">forum</p>}
            description={<p className="break-words">kandcjdancnsdacbsdkandcjdancnsdacbsdkandcjdancnsdacbsdkandcjdancnsdacbsdkandcjdancnsdacbsdkandcjdancnsdacbsd</p>}
            header={<Image className="object-cover object-top rounded-xl" alt="forum" src={"/dd.png"} width={100} height={100} layout="responsive"/>}
            //   icon={item.icon}
            className={"md:col-span-2"}
            />
            <BentoGridItem
            key={'1'}
            title={"Forum"}
            description={"kandcjdancnsdacbsd"}
            header={<Image className="object-cover object-top" alt="forum" src={"/p2.jpg"} width={100} height={100} layout="responsive"/>}
            //   icon={item.icon}
            className={"md:col-span-2"}
            />
            
            <BentoGridItem
            key={'1'}
            title={"Forum"}
            description={"kandcjdancnsdacbsd"}
            header={<Image className="object-cover object-top" alt="forum" src={"/p1.jpg"} width={100} height={100} layout="responsive"/>}
            //   icon={item.icon}
            className={"md:col-span-3"}
            />
            

        </BentoGrid>
    </div>
  );
}


