import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Image from 'next/image'

export function RandomPost() {
  return (
    <div className="m-1 w-full">
      <Carousel opts={{ align: "start" }} className="w-full relative">
        <CarouselPrevious className="absolute top-1/2 transform -translate-y-1/2 left-0 z-10 bg-gray-100 px-2 py-1 rounded-md cursor-pointer">Previous</CarouselPrevious>
        <CarouselContent>
          {Array.from({ length: 10 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-3xl font-semibold">
                        <Image
                            src="/trie2.png" 
                            alt="trie logo image"
                            width={40}
                            height={30}
                            className=" w-full h-full"
                        />

                    </span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext className="absolute top-1/2 transform -translate-y-1/2 right-0 z-10 bg-gray-100 px-2 py-1 rounded-md cursor-pointer">Next</CarouselNext>
      </Carousel>
    </div>
  )
}
